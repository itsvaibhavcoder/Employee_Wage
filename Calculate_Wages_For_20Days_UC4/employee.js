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
  
  // Function to calculate the monthly wage
  function calculateMonthlyWage() {
    const WORKING_DAYS = 20;
    let totalWage = 0;
  
    for (let day = 1; day <= WORKING_DAYS; day++) {
      const presence = isPresent();
      if (presence === "Present") {
        const workType = getWorkType();
        const hours = getWorkHours(workType);
        const dailyWage = getDailyWage(hours);
        totalWage += dailyWage;
      }
    }
  
    return totalWage;
  }
  
  // Example usage:
  const monthlyWage = calculateMonthlyWage();
  console.log(`Total monthly wage: $${monthlyWage}`);
  