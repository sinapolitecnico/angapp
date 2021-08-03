import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(public id:number,public description:string,public done:boolean,public targetdate:Date){
    
  }
}



@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[new Todo(12,'how to swim',true,new Date()),new Todo(32,'how to dance',false,new Date()),
new Todo(90,'how to fly',true,new Date())]

  constructor() { }

  ngOnInit(): void {
  }

}
