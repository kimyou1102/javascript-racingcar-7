import { Console } from '@woowacourse/mission-utils';

export class OutputView {
  printMoveForward(carName, step) {
    Console.print(`${carName} : ${'-'.repeat(step)}`);
  }

  printEmpty() {
    Console.print('');
  }
}
