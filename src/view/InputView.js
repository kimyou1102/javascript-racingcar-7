import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/constant';
import { createError } from '../utils/helper';

export class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      createError(INPUT_MESSAGE.INPUT_ERROR);
    }
  }
}
