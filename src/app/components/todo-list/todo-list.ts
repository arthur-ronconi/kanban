import { Component, inject, input } from '@angular/core';
import { Task } from '../task/task';
import { BoardStore } from '../../store/board.store';

@Component({
  selector: 'app-todo-list',
  imports: [Task],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  store = inject(BoardStore);
  list_id = input<string>();
}
