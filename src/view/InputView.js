import { Console } from '@woowacourse/mission-utils';
import { INPUT_MESSAGE } from '../constant/constant.js';
import { createError } from '../utils/helper.js';

export class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      createError(INPUT_MESSAGE.INPUT_ERROR);
    }
  }
}
