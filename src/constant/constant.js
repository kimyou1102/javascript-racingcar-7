export const ERROR_PREFIX = '[ERROR]';

export const INPUT_MESSAGE = {
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?\n',
  INPUT_ERROR: '입력 중 오류가 발생했습니다.',
};

export const OUTPUT_MESSAGE = {
  WINNERS: '최종 우승자 : ',
  STEP_SYMBOL: '-',
};

export const ERROR_MESSAGE = {
  CAR_NAMES: {
    SPECIAL_SYMBOL: '쉼표와 문자를 제외한 것은 입력할 수 없습니다.',
    NAME_LENGTH: '자동차의 이름은 1글자 이상이어 합니다.',
    DUPLICATION: '중복된 자동차 이름은 입력할 수 없습니다.',
  },
  TRY_COUNT: {
    NOT_A_NUMBER: '숫자가 아닌 것을 입력할 수 없습니다.',
    INVALID_RANGE: '시도할 횟수는 1회 이상으로 입력해야 합니다.',
  },
};
