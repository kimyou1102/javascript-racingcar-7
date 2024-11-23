import { CarRacing } from '../src/model/CarRacing';
import { Car } from '../src/model/Car';
import { MissionUtils } from '@woowacourse/mission-utils';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('자동차 경주 클래스 테스트', () => {
  test('시도한 횟수만큼 게임을 진행한 총 결과를 반환한다.', () => {
    const INPUT = ['pobi', 'woni'];
    const TRY_COUNT = 3;
    const CARS = INPUT.map((name) => new Car(name, 0));
    const ARR = [
      [
        { name: 'pobi', step: 1 },
        { name: 'woni', step: 0 },
      ],
      [
        { name: 'pobi', step: 2 },
        { name: 'woni', step: 1 },
      ],
      [
        { name: 'pobi', step: 3 },
        { name: 'woni', step: 2 },
      ],
    ];

    const MOVING_FORWARD = 4;
    const STOP = 3;

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
      MOVING_FORWARD,
    ]);

    const carRacing = new CarRacing(CARS);

    expect(carRacing.runRace(TRY_COUNT)).toEqual(ARR);
  });

  test('우승자를 찾는다.', () => {
    const CAR1 = new Car('pobi', 5);
    const CAR2 = new Car('woni', 4);
    const CARS = [CAR1, CAR2];

    const carRacing = new CarRacing(CARS);

    expect(carRacing.findWinners()).toEqual(['pobi']);
  });
});
