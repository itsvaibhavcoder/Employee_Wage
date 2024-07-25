class Employee {
    constructor(name) {
      this.name = name;
    }
  
    isPresent() {
      // Math.random() generates a number between 0 and 1
      // If the number is less than 0.5, the employee is absent, otherwise present
      return Math.random() < 0.5 ? "Absent" : "Present";
    }
  }
  
  // Example usage:
  const employee = new Employee("Vaibhav Sukale");
  console.log(`Employee ${employee.name} is ${employee.isPresent()}`);