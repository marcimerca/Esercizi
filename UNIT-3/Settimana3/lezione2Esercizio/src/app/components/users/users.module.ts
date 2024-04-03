import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from '../user-details/user-details.component';

import { UsersRoutingModule } from './users-routing.module';

@NgModule({
    declarations: [UsersComponent, UserDetailsComponent],
    imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
