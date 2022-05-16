import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AlertifyService } from '../alertify.service';
import { Router } from '@angular/router';
import { faArrowDown, faBookBookmark, faCaretDown, faHeart, faHome, faShoppingCart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { ApiserviceService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
home=faHome;
book=faBookBookmark;
user=faUserCircle;
 cart=faShoppingCart;
 wishlist=faHeart;
down=faCaretDown;
collapsed = true;
 searchValue: any;
  member = new User();
  showNavbar = false;
  loginbar = 'nav-login-desktop';
  loggedinUserName: any;
  loginForm:any;
public totalitem:number=0;
  count: any;
  constructor(private authService: AuthService, private alertify: AlertifyService, private router:Router, private details:ApiserviceService) { }

  ngOnInit() {
this.details.getcartdetails()
.subscribe(res=>{
  this.totalitem=res.length;
})

this.details.getwishlistdetails()
.subscribe(data=>{
  this.count=data.length;
})

 }

 id:any;
 drop(param:any){
   this.id=param
 }

  onLogin(form: NgForm) {
    let user = this.authService.login(this.member);
    if (user){
      this.alertify.success('Successfully logged in');
      form.reset();
    } else {
      this.alertify.error('User ID or password is wrong');
    }
    this.router.navigate(['./home'])
  }

  onLogout() {
    this.authService.logout();
    this.alertify.success('Logged out Successful')
  }

  loggedin() {
    const token = localStorage.getItem('token');
    this.loggedinUserName = token;
    return token;
  }

  onToggleNavbar() {
    this.showNavbar = !this.showNavbar;
    if (this.showNavbar) {
      this.loginbar = 'nav-login-mobile';
    } else {
      this.loginbar = 'nav-login-desktop';
    }
  }
}
function bookId(bookId: any) {
  throw new Error('Function not implemented.');
}

