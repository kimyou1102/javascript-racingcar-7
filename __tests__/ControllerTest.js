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

    const arr = INPUT.map((name) => new Car(name));
    expect(controller.createCars(INPUT)).toEqual(arr);
  });

  test('랜덤 숫자가 4이상이면 자동차를 전진시킬 수 있다.', () => {
    const MOVING_FORWARD = 4;

    mockRandoms([MOVING_FORWARD]);

    const controller = new Controller();
    expect(controller.canMoveForward()).toBe(true);
  });

  test('랜덤 숫자가 4미만이면 자동차를 전진시킬 수 없다.', () => {
    const STOP = 3;

    mockRandoms([STOP]);

    const controller = new Controller();

    expect(controller.canMoveForward()).toBe(false);
  });

  test('우승자를 찾는다', () => {
    const CAR1 = new Car('pobi', 5);
    const CAR2 = new Car('woni', 4);
    const CARS = [CAR1, CAR2];
    const controller = new Controller();

    expect(controller.findWinners(CARS)).toEqual(['pobi']);
  });
});
