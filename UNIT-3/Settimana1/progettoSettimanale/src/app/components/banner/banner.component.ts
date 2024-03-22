import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  cars!: Car[];
  carBrandsLogo: string[] = [];
  constructor() {
    this.getCars();
  }

  async getCars() {
    let response = await fetch('assets/dbAuto.json');
    let data = await response.json();
    this.cars = data;
    console.log(this.cars);
    for (let i = 0; i < this.cars.length; i++) {
      if (!this.carBrandsLogo.includes(this.cars[i].brandLogo)) {
        this.carBrandsLogo.push(this.cars[i].brandLogo);
      }
    }
    console.log(this.carBrandsLogo);
  }
}
