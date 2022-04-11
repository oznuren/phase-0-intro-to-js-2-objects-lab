// Write your solution in this file!
let employee = {
  name: "Sam",
  streetAddress: "Theme street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  let updateEmployeeWithKeyAndValueNew = { ...employee };
  updateEmployeeWithKeyAndValueNew.streetAddress = "11 Broadway";
  return updateEmployeeWithKeyAndValueNew;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee.streetAddress = "12 Broadway";
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  let newDeletedList = { ...employee };
  delete newDeletedList.name;
  return newDeletedList;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee.name;
  return employee;
}
