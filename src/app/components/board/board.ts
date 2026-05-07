import { Component, inject } from '@angular/core';
import { TodoList } from '../todo-list/todo-list';
import { BoardStore } from '../../store/board.store';

@Component({
  selector: 'app-board',
  imports: [TodoList],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class Board {
  store = inject(BoardStore);
}
