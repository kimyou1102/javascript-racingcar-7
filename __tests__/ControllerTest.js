import { Controller } from '../src/controller/controller';
import { Car } from '../src/model/Car';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('컨트롤러 클래스 테스트', () => {
  test('입력받은 이름으로 자동차들을 생성한다.', () => {
    const INPUT = ['pobi', 'woni'];

    const controller = new Controller();

    const arr = INPUT.map((name) => new Car(name, 0));
    expect(controller.createCars(INPUT)).toEqual(arr);
  });
});
