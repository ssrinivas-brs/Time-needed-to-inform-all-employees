function calculateTime() {
    const n = parseInt(document.getElementById('employeeCount').value);
    const headID = parseInt(document.getElementById('headID').value);
    const manager = document.getElementById('manager').value.split(',').map(Number);
    const informTime = document.getElementById('informTime').value.split(',').map(Number);
  
    // Your algorithm for calculating the time here
    const totalTime = informTime[headID] + calculateSubordinateTime(headID, manager, informTime);
  
    document.getElementById('result').innerText = `Total time needed: ${totalTime} minutes`;
  }
  
  function calculateSubordinateTime(employeeID, manager, informTime) {
    let time = 0;
    for (let i = 0; i < manager.length; i++) {
      if (manager[i] === employeeID) {
        time = Math.max(time, informTime[i] + calculateSubordinateTime(i, manager, informTime));
      }
    }
    return time;
  }
  