import { validateCarNames } from '../src/utils/validation';

describe('자동차 이름 입력 예외처리 테스트', () => {
  test.each(['pobi*', '12354, ', '*&^'])(
    '쉼표와 문자열이 아닌 다른 문자가 포함될 경우 예외가 발생',
    (CARNAMES) => {
      expect(() => validateCarNames(CARNAMES)).toThrow('[ERROR]');
    },
  );

  test.each(['', 'pobi,'])('자동차 이름이 1글자 미만일 경우 예외가 발생', (CARNAMES) => {
    expect(() => validateCarNames(CARNAMES)).toThrow('[ERROR]');
  });

  test('자동차 이름이 중복될 경우 예외가 발생', () => {
    const CARNAMES = 'pobi,woni,pobi';

    expect(() => validateCarNames(CARNAMES)).toThrow('[ERROR]');
  });
});
