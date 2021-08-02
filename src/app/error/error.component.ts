import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errormessage="some error occured, contact the manager on; sina.yektay1990@gmail.com"
  check=true
  constructor() { }

  ngOnInit(): void {
  }

}
