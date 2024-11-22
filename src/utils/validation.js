export const validateCarNames = (carNamesInput) => {
  validateSpecialSymbol(carNamesInput);
  const carNames = carNamesInput.split(',');
  validateNameLength(carNames);
  validateDuplication(carNames);
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
