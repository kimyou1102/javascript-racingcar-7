export class Car {
  #name;
  #step;

  constructor(name) {
    this.#name = name;
    this.#step = 0;
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
