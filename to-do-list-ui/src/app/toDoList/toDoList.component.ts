import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
  EventEmitter
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
  selectedOptions: string[] = [];
  numberOfListsPerParge:number = 7;
  @Output() notifyToDoListDeleted: EventEmitter<string> = new EventEmitter<string>()
  
  constructor(private listsService: ListsService) {}

  changeFavorite() {
    this.favoritePressed = !this.favoritePressed;
  }

  addToDoListTask(id: number, taskDescription: string): void {
    console.log('id', id);
    this.listsService
      .addToDoListTask(id, taskDescription)
      .subscribe({
        next: () => this.getToDoListByToDoListId(this.toDoList.id),
      });
    this.taskDescription = '';
  }

  ngOnInit() {
    console.log('to do list compo ', this.toDoList);
  }

  getToDoListByToDoListId(toDoListId: number) {
    this.listsService.getToDoListByToDoListId(toDoListId).subscribe({
      next: (newToDoList) => (this.toDoList = newToDoList),
    });
  }

  deleteToDoListById(toDoListId:number){
    this.listsService.deleteToDoListById(toDoListId).subscribe({
      next:()=>{this.notifyToDoListDeleted.emit(toDoListId.toString()); }
    });
  }


  onTaskStatusChange(taskId: number, status: boolean) {
    this.listsService.updateToDoListTaskStatus(taskId, status).subscribe({
      next: (modifiedTask) => console.log('mod task', modifiedTask),
    });
  }
}
