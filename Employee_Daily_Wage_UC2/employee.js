class Employee {
    constructor(name) {
      this.name = name;
    }
  
    isPresent() {
      return Math.random() < 0.5 ? "Absent" : "Present";
    }
  
    getDailyWage() {
      const workType = Math.floor(Math.random() * 3); // 0: No Time, 1: Part Time, 2: Full Time
      let hours = 0;
  
      switch (workType) {
        case 0:
          hours = 0;
          break;
        case 1:
          hours = 4;
          break;
        case 2:
          hours = 8;
          break;
      }
  
      const wage = hours * 20;
      return wage;
    }
  }
  
  // Example usage:
  const employee = new Employee("Vaibhav Sukale");
  console.log(`Employee ${employee.name} is ${employee.isPresent()}`);
  console.log(`Daily wage: $${employee.getDailyWage()}`);
  