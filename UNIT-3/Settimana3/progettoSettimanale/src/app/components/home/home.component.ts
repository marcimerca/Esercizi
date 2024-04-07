import { Component, OnInit } from '@angular/core';
import { AuthData } from 'src/app/models/auth-data.interface';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: AuthData | null = null;

  constructor(private authSrv: AuthService) {}

  ngOnInit(): void {
    this.authSrv.user$.subscribe((user: AuthData | null) => {
      this.user = user;
    });
  }
}
