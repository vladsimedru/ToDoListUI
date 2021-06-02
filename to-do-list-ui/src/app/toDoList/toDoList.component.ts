import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ITask } from '../task/task';
import { ListsService } from './lists.service';
import { IToDoList } from './toDoList';

@Component({
  selector: 'app-toDoList',
  templateUrl: './toDoList.component.html',
  styleUrls: ['./toDoList.component.css'],
})
export class ToDoListComponent implements OnInit {
  @Input() toDoList!: IToDoList;
  id!: number;
  taskDescription: string = '';
  displayedColumns: string[] = ['description', 'status'];
  favoritePressed: boolean = false;

  constructor(private listsService: ListsService) {}

  changeFavorite(){
    this.favoritePressed=!this.favoritePressed;
  }

  addToDoListTask(id: number, taskDescription: string): void {
    console.log('id', id);
    this.listsService
      .addToDoListTask(id, taskDescription)
      .subscribe
      // next:()=>this.toDoList=this.listsService.getToDoListByToDoListId(this.toDoList.id).pipe();
      ();
    this.taskDescription = '';
  }

  ngOnInit() {}
}
