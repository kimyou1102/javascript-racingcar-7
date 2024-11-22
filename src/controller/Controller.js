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
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name, 0));
  }
}
