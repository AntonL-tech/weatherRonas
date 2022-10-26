import { Format } from '../store/models/Format';

export const convertToF = (value: number): number => {
  return value * 1.8 + 32;
};

export const getTemp = (temp: string, format: Format) => {
  if (format === 0) {
    return Math.ceil(Number(temp));
  }
  return Math.ceil(convertToF(Number(temp)));
};
