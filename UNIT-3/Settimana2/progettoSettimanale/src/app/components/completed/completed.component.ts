import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/todo.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedToDos!: Todo[];

  constructor(private todosSrv: TodoService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.getCompleted();
  }

  getCompleted() {
    this.completedToDos = this.todosSrv.getToDos().filter((todo) => {
      return todo.completed;
    });
  }

  onCheckboxChange(event: any, id: number) {
    this.todosSrv.updateToDos(id, { completed: false });
    this.getCompleted();
    this.todosSrv.getToDos();
  }

  getUser(userId: number) {
    return this.userSrv.getSingleUser(userId);
  }
}
