import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListsService } from '../../lists.service';
import { IToDoList } from '../../toDoList';

@Component({
  selector: 'app-to-do-list-details',
  templateUrl: './to-do-list-details.component.html',
  styleUrls: ['./to-do-list-details.component.css'],
})
export class ToDoListDetailsComponent implements OnInit {
  @Input() toDoList: IToDoList | undefined;
  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private listsService: ListsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
}
