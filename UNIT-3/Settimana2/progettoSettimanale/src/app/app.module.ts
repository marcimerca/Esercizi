import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CompletedComponent } from './components/completed/completed.component';
import { IncompletedComponent } from './components/incompleted/incompleted.component';
import { UsersComponent } from './components/users/users.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent,
  },
  {
    path: 'incompleted',
    component: IncompletedComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CompletedComponent,
    IncompletedComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
