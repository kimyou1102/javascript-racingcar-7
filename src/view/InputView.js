import { Console } from '@woowacourse/mission-utils';

export class InputView {
  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      throw new Error('입력 중 오류가 발생했습니다.');
    }
  }
}
