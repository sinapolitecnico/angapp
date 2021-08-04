import { Component, OnInit } from '@angular/core';
import { HardcodedauthenticationService } from '../service/hardcodedauthentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

// no need to this isuser : boolean=false
  constructor(public authen:HardcodedauthenticationService) { }
  
  ngOnInit(): void {
    //no need to this this.isuser=this.authen.isuserloggedin();
    
}}
