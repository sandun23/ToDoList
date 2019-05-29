import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private _todolist = [
      {
    date: '2019-03-11',
    task: 'Playing Cricket'
    },
    {
      date: '2019-03-12',
      task: 'Playing Football'
    } ,
    {
      date: '2019-03-13',
      task: 'Traveling'
    },{
      date: '2019-03-14',
      task: 'Swimming'
    },
    {
      date: '2019-03-15',
      task: 'Reading Books'
    }
];

  gettodolist(): { date: string; task: string }[] {
    return this._todolist;
  }

  settodolist(value: { date: string; task: string }[]) {
    this._todolist = value;
  }

  constructor() { }
}
