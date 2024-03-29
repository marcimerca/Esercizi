import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  userTodos: Todo[] = [];
  todos: Todo[] = [];

  constructor(private userSrv: UserService, private todoSrv: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
    this.users = this.userSrv.getUsers();
  }

  getTodos() {
    this.todos = this.todoSrv.getToDos();
  }

  getUserTodos(userId: number): Todo[] {
    return this.todos.filter((todo) => todo.userId === userId);
  }

  onCheckboxChange(event: any, id: number) {
    if (event.target.checked) {
      this.todoSrv.updateToDos(id, { completed: true });
    } else {
      this.todoSrv.updateToDos(id, { completed: false });
    }
    this.getTodos();
  }
}
