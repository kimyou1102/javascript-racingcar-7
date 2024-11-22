import { Car } from '../src/model/Car.js';

describe('자동차 클래스 테스트', () => {
  test('이름과 전진 정도를 가질 수 있다.', () => {
    const NAME = 'pobi';

    const car = new Car(NAME);

    expect(car.getName()).toBe('pobi');
    expect(car.getStep()).toBe(0);
  });

  test('자동차는 전진할 수 있다', () => {
    const NAME = 'pobi';

    const car = new Car(NAME);
    car.move();

    expect(car.getStep()).toBe(1);
  });
});
