// Write your solution in this file!

function cloneObject(obj) {
    return { ...obj };
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = cloneObject(employee);
    newEmployee[key] = value;
    return newEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = cloneObject(employee);
    delete newEmployee[key];
    return newEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  const employee = {
    name: 'Sam',
  };
  
 
  