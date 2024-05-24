class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.late = 0;
    this.scores = []; //after this, it can be called anything. its just a placeholder, it will always refer to year regardless
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.late += 1;
    if (this.late >= 1) {
      return `You are expelled.`;
    }
    return `You have been marked late ${this.firstName} ${this.lastName} a number of ${this.late} times`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Colt", "Steele", 3);
let secondStudent = new Student("Blue", "Steele", 4);

console.log(firstStudent.late);
console.log(firstStudent.markLate()); //Your full name is Colt Steele
console.log(firstStudent.late);
