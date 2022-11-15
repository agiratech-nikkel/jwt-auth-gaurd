import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';;
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth, 
  ){}
  login(){
    return this.http.get("https://jwt-role-base-default-rtdb.asia-southeast1.firebasedatabase.app/data2.json")
  }
  regsisteruser(data:any){
    return this.http.post("https://jwt-role-base-default-rtdb.asia-southeast1.firebasedatabase.app/data2.json",data)
  }
}


