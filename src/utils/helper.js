import { Random } from '@woowacourse/mission-utils';
import { ERROR_PREFIX } from '../constant/constant';

export const getRandomNumber = () => {
  return Random.pickNumberInRange(0, 9);
};

export const createError = (message) => {
  throw new Error(`${ERROR_PREFIX} ${message}`);
};
