import { Console } from '@woowacourse/mission-utils';

export class InputView {
  async getCarNames() {
    const carNames = await this.getInput(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    );

    return carNames;
  }

  async getTryCount() {
    const tryCount = await this.getInput('시도할 횟수는 몇 회인가요?');

    return tryCount;
  }

  async getInput(message) {
    try {
      return await Console.readLineAsync(message);
    } catch (error) {
      throw new Error('입력 중 오류가 발생했습니다.');
    }
  }
}
