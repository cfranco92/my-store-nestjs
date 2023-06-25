const myName = 'Cristian';
const myAge = 30;
const addition = (a: number, b: number) => {
  return a + b;
};

addition(1, 2);

class Person {
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name} and I'm ${this.age}`;
  }
}

const cristian = new Person(30, 'Cristian');
cristian.getSummary();
