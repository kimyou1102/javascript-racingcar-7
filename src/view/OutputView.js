import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/constant';

export class OutputView {
  printMoveForward(carName, step) {
    Console.print(`${carName} : ${OUTPUT_MESSAGE.STEP_SYMBOL.repeat(step)}`);
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNERS}${winners.join(', ')}`);
  }

  printEmpty() {
    Console.print('');
  }
}
