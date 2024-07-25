// Function to determine if the employee is present
function isPresent() {
    return Math.random() < 0.5 ? "Absent" : "Present";
}
  
  // Function to determine the work type (no time, part-time, full-time)
  function getWorkType() {
    return Math.floor(Math.random() * 3); // 0: No Time, 1: Part Time, 2: Full Time
  }
  
  // Function to calculate work hours based on work type
  function getWorkHours(workType) {
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
  
    return hours;
  }
  
  // Function to calculate the daily wage based on work hours
  function getDailyWage(hours) {
    return hours * 20;
  }
  
  // Function to calculate the monthly wage with conditions
  function calculateWageWithConditions() {
    const MAX_WORKING_DAYS = 20;
    const MAX_WORKING_HOURS = 160;
    let totalWage = 0;
    let totalHours = 0;
    let totalDays = 0;
  
    while (totalDays < MAX_WORKING_DAYS && totalHours < MAX_WORKING_HOURS) {
      totalDays++;
      const presence = isPresent();
      if (presence === "Present") {
        const workType = getWorkType();
        const hours = getWorkHours(workType);
        totalHours += hours;
        const dailyWage = getDailyWage(hours);
        totalWage += dailyWage;
  
        if (totalHours >= MAX_WORKING_HOURS) {
          break;
        }
      }
    }
  
    return {
      totalWage,
      totalHours,
      totalDays
    };
  }
  
  // Example usage:
  const result = calculateWageWithConditions();
  console.log(`Total days worked: ${result.totalDays}`);
  console.log(`Total hours worked: ${result.totalHours}`);
  console.log(`Total monthly wage: $${result.totalWage}`);
  
