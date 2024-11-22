import { Car } from '../model/Car.js';
import { InputView } from '../view/InputView.js';
import { getRandomNumber } from '../utils/getRandomNumber.js';
import { OutputView } from '../view/OutputView.js';

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
    this.runRace(cars, tryCount);
    const winners = this.findWinners(cars);
    this.outputView.printWinners(winners);
  }

  findWinners(cars) {
    const carsStep = cars.map((car) => car.getStep());
    const max = Math.max(...carsStep);
    const maxCars = cars.filter((car) => car.getStep() === max);

    return maxCars.map((car) => car.getName());
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

  async getCarNames() {
    const carNames = await this.inputView.getInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
    );

    return carNames;
  }

  async getTryCount() {
    const tryCount = await this.inputView.getInput('시도할 횟수는 몇 회인가요?\n');

    return tryCount;
  }
}
