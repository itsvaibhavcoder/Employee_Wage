function isPresent() {
    return Math.random() < 0.5 ? "Absent" : "Present";
}
  
  function getWorkType() {
    return Math.floor(Math.random() * 3); 
  }
  

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
  

  function getDailyWage(hours) {
    return hours * 20;
  }
  
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
  
  const result = calculateWageWithConditions();
  console.log(`Total days worked: ${result.totalDays}`);
  console.log(`Total hours worked: ${result.totalHours}`);
  console.log(`Total monthly wage: $${result.totalWage}`);
  