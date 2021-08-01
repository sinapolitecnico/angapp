import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username="enter your username"
  password=""

  firstfunction(){
    console.log(this.password)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
