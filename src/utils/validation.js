export const validateCarNames = (carNamesInput) => {
  validateSpecialSymbol(carNamesInput);
  const carNames = carNamesInput.split(',');
  validateNameLength(carNames);
  validateDuplication(carNames);
};

export const validateTryCount = (tryCountInput) => {
  const tryCount = Number(tryCountInput);

  if (isNaN(tryCount)) {
    throw new Error('[ERROR] 숫자가 아닌 것을 입력할 수 없습니다.');
  }
  if (tryCount < 1) {
    throw new Error('[ERROR] 시도할 횟수는 1회 이상으로 입력해야 합니다.');
  }
};

const validateSpecialSymbol = (carNamesInput) => {
  const regex = /[^,ㄱ-ㅎ가-힣a-zA-Z]/;
  console.log('dddd::', carNamesInput, regex.test(carNamesInput));
  if (regex.test(carNamesInput)) {
    throw new Error('[ERROR] 쉼표와 문자를 제외한 것은 입력할 수 없습니다.');
  }
};

const validateNameLength = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length < 1) {
      throw new Error('[ERROR] 자동차의 이름은 1글자 이상이어 합니다.');
    }
  }
};

const validateDuplication = (carNames) => {
  const unique = new Set(carNames);
  if (unique.size !== carNames.length) {
    throw new Error('[ERROR] 중복된 자동차 이름은 입력할 수 없습니다.');
  }
};
