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
  
  // Example usage:
  const presence = isPresent();
  console.log(`Employee is ${presence}`);
  
  if (presence === "Present") {
    const workType = getWorkType();
    const hours = getWorkHours(workType);
    const dailyWage = getDailyWage(hours);
    console.log(`Employee worked for ${hours} hours.`);
    console.log(`Daily wage: $${dailyWage}`);
  } else {
    console.log("No work done as the employee is absent.");
  }
  