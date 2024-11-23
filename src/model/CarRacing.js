import { getRandomNumber } from '../utils/helper.js';

export class CarRacing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  findWinners() {
    const carsStep = this.#cars.map((car) => car.getStep());
    const max = Math.max(...carsStep);
    const maxCars = this.#cars.filter((car) => car.getStep() === max);

    return maxCars.map((car) => car.getName());
  }

  runRace(tryCount) {
    const gameResults = [];
    for (let i = 0; i < tryCount; i++) {
      gameResults.push(this.#runRaceRound());
    }
    return gameResults;
  }

  #runRaceRound() {
    const gameResult = [];
    this.#cars.forEach((car) => {
      if (this.#canMoveForward()) car.move();
      gameResult.push({ name: car.getName(), step: car.getStep() });
    });

    return gameResult;
  }

  #canMoveForward() {
    if (getRandomNumber() >= 4) {
      return true;
    }
    return false;
  }
}
