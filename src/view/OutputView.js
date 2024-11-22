import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MESSAGE } from '../constant/constant.js';

export class OutputView {
  printRound(gameResult) {
    gameResult.forEach(({ name, step }) => {
      Console.print(`${name} : ${OUTPUT_MESSAGE.STEP_SYMBOL.repeat(step)}`);
    });
  }

  printRacing(gameResults) {
    gameResults.forEach((gameResult) => {
      this.printRound(gameResult);
      Console.print('');
    });
  }

  printWinners(winners) {
    Console.print(`${OUTPUT_MESSAGE.WINNERS}${winners.join(', ')}`);
  }

  printEmpty() {
    Console.print('');
  }
}
