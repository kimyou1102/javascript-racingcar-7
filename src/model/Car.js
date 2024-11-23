export class Car {
  #name;
  #step;

  constructor(name, step) {
    this.#name = name;
    this.#step = step;
  }

  getName() {
    return this.#name;
  }

  getStep() {
    return this.#step;
  }

  move() {
    this.#step += 1;
  }
}
