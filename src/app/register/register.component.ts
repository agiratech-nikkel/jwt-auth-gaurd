import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { LoginService } from '../service/loginauth/login.service';
import {EnumService} from 'src/app/service/enum/enum.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Route,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userForm!: FormGroup;
  response:any;
  value:any
  routid=0
  perId:any
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private fb:FormBuilder,private loginSer:LoginService,public data:EnumService)  { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
    console.log(this.data.data)
    localStorage.setItem("data",JSON.stringify(this.data.data))
    this.response =  this.data.data
    // console.log(this.data.data.data.permision_modules.map(a =>a.id))
    this.value = this.data.data.data.permision_modules
    console.log(this.value)
    localStorage.setItem("permissionId",JSON.stringify(this.value))
    this.perId = JSON.parse(localStorage.getItem('permissionId')|| "{}")
    console.log(this.perId[0])
    console.log(this.perId.find(({id}:any) => id === 2))
  }
  submit(){
    const password = this.userForm.get('password')!.value
    const email = this.userForm.get('email')!.value

  }

}
