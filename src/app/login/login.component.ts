import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

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
  
     if(this.autservice.authenticate(this.username,this.password)){
       this.check=false;
       this.router.navigate(['welcome',this.username])
    }else{
      this.check=true
    }
  }

  constructor(private router:Router,private autservice:HardcodedauthenticationService) { }

  ngOnInit(): void {
  }

}
