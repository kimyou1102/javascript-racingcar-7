import { createError } from './helper';
import { ERROR_MESSAGE } from '../constant/constant';

export const validateCarNames = (carNamesInput) => {
  validateSpecialSymbol(carNamesInput);
  const carNames = carNamesInput.split(',');
  validateNameLength(carNames);
  validateDuplication(carNames);
};

export const validateTryCount = (tryCountInput) => {
  const tryCount = Number(tryCountInput);

  if (isNaN(tryCount)) {
    createError(ERROR_MESSAGE.TRY_COUNT.NOT_A_NUMBER);
  }
  if (tryCount < 1) {
    createError(ERROR_MESSAGE.TRY_COUNT.INVALID_RANGE);
  }
};

const validateSpecialSymbol = (carNamesInput) => {
  const regex = /[^,ㄱ-ㅎ가-힣a-zA-Z]/;
  console.log('dddd::', carNamesInput, regex.test(carNamesInput));
  if (regex.test(carNamesInput)) {
    createError(ERROR_MESSAGE.CAR_NAMES.SPECIAL_SYMBOL);
  }
};

const validateNameLength = (carNames) => {
  for (let i = 0; i < carNames.length; i++) {
    if (carNames[i].length < 1) {
      createError(ERROR_MESSAGE.CAR_NAMES.NAME_LENGTH);
    }
  }
};

const validateDuplication = (carNames) => {
  const unique = new Set(carNames);
  if (unique.size !== carNames.length) {
    createError(ERROR_MESSAGE.CAR_NAMES.DUPLICATION);
  }
};
