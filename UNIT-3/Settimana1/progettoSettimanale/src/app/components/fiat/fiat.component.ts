import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-fiat',
  templateUrl: './fiat.component.html',
  styleUrls: ['./fiat.component.scss'],
})
export class FiatComponent {
  cars!: Car[];
  fiatCars: Car[] = [];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
      this.fiatCars = this.cars.filter((car) => {
        return car.brand == 'Fiat';
      });
    });
  }

  async getCars() {
    let response = await fetch('assets/dbAuto.json');
    let data = await response.json();
    return data;
  }
}
