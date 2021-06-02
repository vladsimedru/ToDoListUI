import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListsService } from '../toDoList/lists.service';
import { IToDoList } from '../toDoList/toDoList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  errorMessage: string = '';
  sub!: Subscription;
  toDoLists: IToDoList[] = [];
  toDoListName:string='';

  constructor(private listsService: ListsService) {}

  addToDoList(name:string){
    this.listsService.addToDoList(this.toDoListName);
    this.toDoListName='';
  }

  ngOnInit() {
    this.sub = this.listsService.getToDoLists().subscribe({
      next: (lists) => {
        this.toDoLists = lists;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }
}
