import { Component } from '@angular/core';
import { Car } from 'src/app/models/car.interface';

@Component({
  selector: 'app-featured-cars',
  templateUrl: './featured-cars.component.html',
  styleUrls: ['./featured-cars.component.scss'],
})
export class FeaturedCarsComponent {
  cars!: Car[];
  numofCars = 2;
  featuredCars: Car[] = [];

  constructor() {
    this.getCars();
  }

  async getCars() {
    let response = await fetch('assets/dbAuto.json');
    let data = await response.json();
    this.cars = data;

    while (this.featuredCars.length < this.numofCars) {
      let randomIndex = Math.floor(Math.random() * this.cars.length);
      let randomCar = this.cars[randomIndex];
      if (!this.featuredCars.includes(randomCar)) {
        this.featuredCars.push(randomCar);
      }
    }

    console.log(this.cars);
    console.log(this.featuredCars);
  }
}
