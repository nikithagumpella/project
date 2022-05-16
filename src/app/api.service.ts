import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  getcartdetails(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/ShoppingCart/698',{'headers': headers})
    .pipe(map((res:any)=>{
          return res;
        }))
  }
  getwishlistdetails(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/Wishlist/698',{'headers': headers})
    .pipe(map((data:any)=>{
          return data;
        }))
  }
  getproducts(){
    const headers=new HttpHeaders()
    .set('Accept','text/plain')
    return this.http.get('https://bookcart.azurewebsites.net/api/Book',{'headers': headers})
    .pipe(map((book:any)=>{
      return book;
    }))
  }





getPatientDetails(){
  const headers=new HttpHeaders()
  .set('ApiKey','B180E86E-5D1A-4403-ABE0-A4030CAC2B5E')
  .set('accept','text/plain')
 return  this.http.get("https://helixapi20211129123604.azurewebsites.net/patients",{'headers': headers});
}

getPatientUniqueDetails(patientId: any){
  const headers=new HttpHeaders()
.set('ApiKey','B180E86E-5D1A-4403-ABE0-A4030CAC2B5E')
.set('Accept','text/plain')

  return this.http.get(`https://helixapi20211129123604.azurewebsites.net/patients/${patientId}`,{'headers': headers})
}


// fetchUserData(){
//   const headers=new HttpHeaders()
//   return this.http.get('https://bookcart.azurewebsites.net/api/Book',{'headers': headers})
// }

}
