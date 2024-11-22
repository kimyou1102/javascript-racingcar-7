import { Console } from '@woowacourse/mission-utils';

export class OutputView {
  printMoveForward(carName, step) {
    Console.print(`${carName} : ${'-'.repeat(step)}`);
  }

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  }

  printEmpty() {
    Console.print('');
  }
}
