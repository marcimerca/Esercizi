import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.interface';
import { User } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos!: Todo[];
  constructor(private todosSrv: TodoService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.getTodos();
    console.log(this.todos);
  }

  getTodos() {
    this.todos = this.todosSrv.getToDos();
  }

  onCheckboxChange(event: any, id: number) {
    if (event.target.checked) {
      this.todosSrv.updateToDos(id, { completed: true });
    } else {
      this.todosSrv.updateToDos(id, { completed: false });
    }
    this.getTodos();
  }

  getUser(userId: number) {
    return this.userSrv.getSingleUser(userId);
  }
}
