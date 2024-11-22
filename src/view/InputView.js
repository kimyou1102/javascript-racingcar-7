import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/constant';

export class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      throw new Error(INPUT_MESSAGE.INPUT_ERROR);
    }
  }
}
