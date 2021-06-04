import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListsService } from '../toDoList/lists.service';
import { IToDoList } from '../toDoList/toDoList';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  errorMessage: string = '';
  sub!: Subscription;
  toDoLists: IToDoList[] = [];
  toDoListName: string = '';
  onNotify(id: string): void {
    this.getToDoLists();
    console.log('The toDoList with the id ' + id + ' was deleted');
  }

  constructor(private listsService: ListsService) {}

  addToDoList(name: string) {
    this.listsService.addToDoList(this.toDoListName).subscribe({
      next: () => {
        this.getToDoLists();
      },
    });
    this.toDoListName = '';
  }

  getToDoLists() {
    this.sub = this.listsService.getToDoLists().subscribe({
      next: (lists) => {
        this.toDoLists = lists;
      },
      error: (err) => {
        this.errorMessage = err;
      },
    });
  }

  ngOnInit() {
    this.getToDoLists();
  }
}
