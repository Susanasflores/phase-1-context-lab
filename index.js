/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function createEmployeeRecord(employeeArray) {
    const employeeRecord = {};
  
    const [firstName, familyName, title, payPerHour] = employeeArray;
  
    employeeRecord.firstName = firstName;
    employeeRecord.familyName = familyName;
    employeeRecord.title = title;
    employeeRecord.payPerHour = payPerHour;
    employeeRecord.timeInEvents = [];
    employeeRecord.timeOutEvents = [];
    return employeeRecord;
  }
  
  function createEmployeeRecords(employeeData) {
    const employeeRecord = [];
  
    employeeData.forEach((employeeArray) => {
      const employee = createEmployeeRecord(employeeArray); // Call the function and pass the current employeeArray
      employeeRecord.push(employee); // Push the created employee record into the employeeRecord array
    });
  
    return employeeRecord; // Return the accumulated array outside the loop
  }
  
  function createTimeInEvent(dateTimeString) {
    const [date, time] = dateTimeString.split(" ");
    console.log(dateTimeString)
    const [year, month, day] = date.split("-");
    const fullDate = `${year}-${month}-${day}`;
    const [hours, minutes] = time.match(/\d{2}/g);
    const timeInEventObj = {
      type: "TimeIn",
      date: date,
      hour: parseInt(time),
    };
    if (!this.timeInEvents) {
      this.timeInEvents = [];
    }
    this.timeInEvents.push(timeInEventObj);
    return this;
  }

    function createTimeOutEvent(dateTimeString) {
      const [date, time] = dateTimeString.split(" ");
      const [year, month, day] = date.split("-");
      const fullDate = `${year}-${month}-${day}`;
      const timeOutObj = {
        type: "TimeOut",
        date: date,
        hour: parseInt(time),
      };
      if (!this.timeOutEvents) {
        this.timeOutEvents = [];
      }
      this.timeOutEvents.push(timeOutObj);
      return this;
    }
   
    function hoursWorkedOnDate(dateMatched) {    
      const timeInEvent = this.timeInEvents.find(event => event.date === dateMatched);
      const timeOutEvent = this.timeOutEvents.find(event => event.date === dateMatched);
      const elapsedMilliseconds = timeOutEvent.hour - timeInEvent.hour;
      const elapsedHours = elapsedMilliseconds / 100;
      return elapsedHours;
    }
    // const boundFunction = hoursWorkedOnDate(record);
    // const dateMatched = "2022-01-01";
    // boundFunction(dateMatched)
  
    function wagesEarnedOnDate(dateMatched) {
      const [date] = dateMatched.split(" ");
      const hoursWorked = hoursWorkedOnDate.bind(this)(dateMatched);
      const hourlyRate = parseInt(this.payPerHour, 10);
      const wagesEarned = hoursWorked * hourlyRate;
      return wagesEarned;
    }
  
//    function allWagesFor(record) {
//       const dates = record.timeOutEvents.map(function(object){
//           return object.date
//       });
//       let totalWages = 0;
//       dates.forEach(function(date) {
//           const wages = wagesEarnedOnDate.bind(this)(record, date);
//           totalWages += wages;
//       });
//       return totalWages;
//     }
function findEmployeeByFirstName(srcArray, firstName) {
    for (let i = 0; i < srcArray.length; i++) {
      if (srcArray[i].firstName === firstName) {
        return srcArray[i];
      }
    }
    return undefined;
  }
   
  function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce(function(memo, rec){
   return memo+  allWagesFor.call(rec)
    }, 0);
  }
  

  
  
  
      
      

