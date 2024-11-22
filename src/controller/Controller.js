import { Car } from '../model/Car.js';
import { InputView } from '../view/InputView.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { OutputView } from '../view/OutputView.js';

export class Controller {
  constructor() {
    this.outputView = new OutputView();
  }

  async start() {
    const inputView = new InputView();
    const carNamesInput = await inputView.getCarNames();
    const carNames = carNamesInput.split(',');
    const cars = this.createCars(carNames);
    const tryCount = await inputView.getTryCount();

    this.runRace(cars, tryCount);
  }

  runRace(cars, tryCount) {
    for (let i = 0; i < tryCount; i++) {
      this.runRaceRound(cars);
    }
  }

  runRaceRound(cars) {
    cars.forEach((car) => {
      if (this.canMoveForward()) car.move();
      this.outputView.printMoveForward(car.getName(), car.getStep());
    });
    this.outputView.printEmpty();
  }

  canMoveForward() {
    if (getRandomNumber() >= 4) {
      return true;
    }
    return false;
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name, 0));
  }
}
