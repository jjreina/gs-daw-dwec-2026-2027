const courseData = {
  id: 101,
  title: "Desarrollo Web con JavaScript",
  category: "Programación",
  duration: 60,
  price: 129.99,
  active: true,
  instructor: {
    id: 10,
    name: "Laura García",
    specialty: "Desarrollo Frontend",
  },
  students: [
    {
      id: 1,
      name: "Carlos Ruiz",
      age: 22,
      grade: 8.5,
      completed: true,
    },
    {
      id: 2,
      name: "Ana López",
      age: 19,
      grade: 9.2,
      completed: true,
    },
    {
      id: 3,
      name: "Pedro Martín",
      age: 25,
      grade: 4.3,
      completed: false,
    },
    {
      id: 4,
      name: "Lucía Fernández",
      age: 21,
      grade: 7.8,
      completed: true,
    },
    {
      id: 5,
      name: "David Sánchez",
      age: 23,
      grade: 3.5,
      completed: false,
    },
    {
      id: 6,
      name: "María Torres",
      age: 20,
      grade: 6.7,
      completed: true,
    },
  ],
};

class Course {
  id;
  title;
  category;
  duration;
  price;
  active;
  instructor;
  students;

  constructor(course) {
    this.id = course.id;
    this.title = course.title;
    this.category = course.category;
    this.duration = course.duration;
    this.price = course.price;
    this.active = course.active;
    this.instructor = course.instructor;
    this.students = course.students;
  }

  getInfo() {
    return `Title: ${this.title}, Category: ${this.category}, Duration: ${this.duration}, Price: ${this.price}`;
  }

  getStudentById(id) {
    return this.students.find((student) => student.id === id);
  }

  getPassedStudents() {
    return this.students.filter((student) => student.grade >= 5);
  }

  getFailedStudents() {
    return this.students.filter((student) => student.grade < 5);
  }

  getCompletedStudents() {
    return this.students.filter((student) => student.completed === true);
  }

  getStudentNames() {
    return this.students.map((student) => student.name);
  }

  getStudentSummary() {
    return this.students.map((student) => {
      return {
        name: student.name,
        grade: student.grade,
        completed: student.completed,
      };
    });
  }

  getStudentsAboveGrade(minGrade) {
    return this.students.filter((studient) => studient.grade > minGrade);
  }

  getAverageGrade() {
    if (this.students.length === 0) {
      return 0;
    }
    return (
      this.students.reduce((acc, student) => {
        return acc + student.grade;
      }, 0) / this.students.length
    );
  }

  removeStudent(id) {
    return this.students.filter((student) => student.id !== id);
  }
}

let course = new Course(courseData);

console.log(course.getInfo());
console.log(course.getStudentById(3));
console.log("Passed students:");
course.getPassedStudents().forEach((student) => {
  console.log("Student: " + student.name + ", Grade: " + student.grade);
});
console.log("Failed students:");
course.getFailedStudents().forEach((student) => {
  console.log("Student: " + student.name + ", Grade: " + student.grade);
});
console.log("Completed students:");
course.getCompletedStudents().forEach((student) => {
  console.log("Student: " + student.name + ", Completed: " + student.completed);
});
console.log("Student names:");
course.getStudentNames().forEach((name) => {
  console.log("Student name: " + name);
});
console.log("Student summary:");
course.getStudentSummary().forEach((student) => {
  console.log(
    "Student: " +
      student.name +
      ", Grade: " +
      student.grade +
      ", Completed: " +
      student.completed,
  );
});
console.log("Students with grade above 7:");
course.getStudentsAboveGrade(7).forEach((student) => {
  console.log("Student: " + student.name + ", Grade: " + student.grade);
});

console.log("Average grade: " + course.getAverageGrade());

console.log("Removing student with ID 2...");
course.removeStudent(2).forEach((student) => {
  console.log("Student: " + student.name + ", ID: " + student.id);
});
