//VALUES CHECK
import { ValueBoolean } from "./base.predicate";

export const EQ = (value: number): ValueBoolean => {
  return (val: number) => val === value;
};

export const NOT_EQ = (value: number): ValueBoolean => {
  return (val: number) => val !== value;
};

export const GT = (value: number): ValueBoolean => {
  return (val: number) => val > value;
};

export const GTE = (value: number): ValueBoolean => {
  return (val: number) => val >= value;
};

export const LT = (value: number): ValueBoolean => {
  return (val: number) => val < value;
};

export const LTE = (value: number): ValueBoolean => {
  return (val: number) => val <= value;
};
