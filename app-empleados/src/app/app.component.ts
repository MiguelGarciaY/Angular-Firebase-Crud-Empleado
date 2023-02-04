import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private loginService:LoginService){    
  }
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCwphjVGg4hjW4YL7geGInoWWeYKEKTPhU",
      authDomain: "mis-clientes---angular.firebaseapp.com"
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    return this.loginService.logout();
  }

}
