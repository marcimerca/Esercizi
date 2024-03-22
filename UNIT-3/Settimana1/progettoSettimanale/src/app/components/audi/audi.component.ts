import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.scss'],
})
export class AudiComponent {
  cars!: Car[];
  audiCars: Car[] = [];

  constructor() {
    this.getCars().then((cars) => {
      this.cars = cars;
      this.audiCars = this.cars.filter((car) => {
        return car.brand == 'Audi';
      });
    });
  }

  async getCars() {
    let response = await fetch('assets/dbAuto.json');
    let data = await response.json();
    return data;
  }
}
