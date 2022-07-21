import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  inputTodo: string = '';
  inputDescription: string = 'ola';

  constructor() {}

  ngOnInit(): void {
    this.todos = [];
  }

  toggleDone(id: number): void {
    this.todos.map((v, i) => {
      if (i == id) {
        v.completed = !v.completed;
      }
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((v, i) => i != id);
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      description: this.inputDescription,
      completed: false,
    });

    this.inputTodo = '';
  }
}
