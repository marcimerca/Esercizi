import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.scss'],
})
export class FordComponent {
  cars!: Car[];
  fordCars: Car[] = [];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
      this.fordCars = this.cars.filter((car) => {
        return car.brand == 'Ford';
      });
    });
  }

  async getCars() {
    let response = await fetch('assets/dbAuto.json');
    let data = await response.json();
    return data;
  }
}
