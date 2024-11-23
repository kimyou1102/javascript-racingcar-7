import { Car } from '../model/Car.js';
import { InputView } from '../view/InputView.js';
import { OutputView } from '../view/OutputView.js';
import { validateCarNames, validateTryCount } from '../utils/validation.js';
import { INPUT_MESSAGE } from '../constant/constant.js';
import { CarRacing } from '../model/CarRacing.js';

export class Controller {
  constructor() {
    this.outputView = new OutputView();
    this.inputView = new InputView();
  }

  async start() {
    const carNamesInput = await this.getCarNames();
    const carNames = carNamesInput.split(',');
    const cars = this.createCars(carNames);
    const tryCount = await this.getTryCount();
    const carRacing = new CarRacing(cars);
    const racingResult = carRacing.runRace(tryCount);
    this.outputView.printRacing(racingResult);
    const winners = carRacing.findWinners();
    this.outputView.printWinners(winners);
  }

  createCars(carNames) {
    return carNames.map((name) => new Car(name, 0));
  }

  async getCarNames() {
    const carNames = await this.inputView.getInput(INPUT_MESSAGE.CAR_NAMES);
    validateCarNames(carNames);

    return carNames;
  }

  async getTryCount() {
    const tryCount = await this.inputView.getInput(INPUT_MESSAGE.TRY_COUNT);
    validateTryCount(tryCount);

    return tryCount;
  }
}
