import { Component, OnInit } from '@angular/core';
import {ToDoService} from '../services/to-do.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  date;
  selectDate;
  firstdate;
  saveTask;
  saveDate;


  constructor(private todoservice: ToDoService) { }

  ngOnInit() {
    // this.selectDate = this.data.todolist;
    // console.log(this.selectDate);
  }
  showTodo(){

    this.selectDate = this.todoservice.gettodolist();
    console.log(this.todoservice.gettodolist());

  }
  OnSaveTask(){
   var _todolist = [
      {
        date: this.saveDate,
        task: this.saveTask
      }];

   this.todoservice.settodolist(_todolist);

  }

}
