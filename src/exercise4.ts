class Person {
  name: string;
  age: number;
  private socialSecurityNumber: number;

  constructor(name: string, age: number, socialSecurityNumber: number) {
    this.name = name;
    this.age = age;
    this.socialSecurityNumber = socialSecurityNumber;
  }

  public firsrName(): string {
    return this.name;
  }
}
const person = new Person("Tumi", 23, 1204);
person.name = "Tumi";
person.age = 23;
