import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { AlertifyService } from '../alertify.service';
import { ApiserviceService } from '../api.service';
import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  user=faUserCircle;
  collapsed = true;
  searchValue: any;
   member = new User();
   showNavbar = false;
   loginbar = 'nav-login-desktop';
   loggedinUserName: any;
   loginForm:any;
   users:any;
 public totalitem:number=0;
   count: any;
   list:any;
  // searchingWithName: any;
  // filteredtableData: any;
  // tabledata: any;
  // visualizeTblData: any;
  // tableData: any;
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
    this.details.getproducts()
    .subscribe(book=>{
      this.list=book
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

    //  getUserData(){
    //    this.details.fetchUserData()
    //    .subscribe((list:any)=>{
    //      console.log(list)
    //      this.visualizeTblData=this.visualizeTblData ? this.visualizeTblData: this.tableData=list
    //    })
    //  }
// searchWithName(name:any){
//   this.searchingWithName=name
//   if(this.searchingWithName!==""||this.searchingWithName!==null ||this.searchingWithName!==undefined){
//     this.filteredtableData =this.tabledata.filter((item:any)=>item.firstName.trim().toLowerCase().includes(name.trim().toLowerCase()));
//   }
//   this.filteredtableData ? this.visualizeTblData =this.filteredtableData : this.visualizeTblData =this.tableData
// }



    }
    
