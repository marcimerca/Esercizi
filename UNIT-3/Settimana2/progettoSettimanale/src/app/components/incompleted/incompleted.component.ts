import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-incompleted',
  templateUrl: './incompleted.component.html',
  styleUrls: ['./incompleted.component.scss'],
})
export class IncompletedComponent {
  incompletedToDos!: Todo[];

  constructor(private todosSrv: TodoService, private userSrv: UserService) {}

  ngOnInit(): void {
    this.getIncompleted();
  }

  getIncompleted() {
    this.incompletedToDos = this.todosSrv.getToDos().filter((todo) => {
      return !todo.completed;
    });
  }

  onCheckboxChange(event: any, id: number) {
    this.todosSrv.updateToDos(id, { completed: true });
    this.getIncompleted();
    this.todosSrv.getToDos();
  }

  getUser(userId: number) {
    return this.userSrv.getSingleUser(userId);
  }
}
