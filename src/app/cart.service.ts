import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
public cartitemlist:any=[]
public  productlist= new BehaviorSubject<any>([]);
  constructor() { }
}
