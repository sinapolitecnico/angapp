import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username=""
  password=""
  invalid="invalid credentials"
  check=false
  firstfunction(){
    if(this.username==="sina" && this.password!=""){
      this.router.navigate(['welcome',this.username])
      this.check=false
    }else{
      this.check=true
    }
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
