// Constructor function for Employee
function Employee(ID, Full_Name, Department, level, img_url, Salary) {
    this.ID = ID;
    this.Full_Name = Full_Name;
    this.Department = Department;
    this.level = level;
    this.img_url = img_url;
    this.Salary = Salary;
}

// Prototype method to calculate salary and net salary
Employee.prototype.get_Salary = function () {
    let salary = 0;
    if (this.level.toLowerCase() === 'senior') {
        salary = Math.floor(Math.random() * (2000 - 1200 + 1)) + 1200;
    } else if (this.level.toLowerCase() === 'mid-senior') {
        salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    } else if (this.level.toLowerCase() === 'junior') {
        salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }
    let net_salary = salary - (salary * (7.5 / 100));
    return { salary, net_salary };
};

// Prototype method to render employee information in a table
Employee.prototype.render = function () {
    let salaryInfo = this.get_Salary();
    /*let tableRow = `
        <tr>
            <td>${this.ID}</td>
            <td>${this.Full_Name}</td>
            <td>${this.Department}</td>
            <td>${this.level}</td>
            <td>${salaryInfo.salary}</td>
            <td>${salaryInfo.net_salary}</td>
        </tr>`;
    document.write(tableRow);*/
    document.write(`Employee ID : ${this.ID} <br>Full Name : ${this.Full_Name}<br>Department : 
    ${this.Department}<br>Level : ${this.level}<br> Salary : ${salaryInfo.salary} <br>
      Net-Salary : ${salaryInfo.net_salary}<br><hr>`);
};

/*let employees = [
    new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior'),
    new Employee(1001, 'Lana Ali', 'Finance', 'Senior'),
    new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior'),
    new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior'),
    new Employee(1004, 'Omar Zaid', 'Development', 'Senior'),
    new Employee(1005, 'Rana Saleh', 'Development', 'Junior'),
    new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior')
];*/


  let first  =new Employee(1000, 'Ghazi Samer', 'Administration', 'Senior');
  let second  =new Employee(1001, 'Lana Ali', 'Finance', 'Senior');
  let third  =new Employee(1002, 'Tamara Ayoub', 'Marketing', 'Senior');
  let fourth  =new Employee(1003, 'Safi Walid', 'Administration', 'Mid-Senior');
  let fifth  =new Employee(1004, 'Omar Zaid', 'Development', 'Senior');
  let sixth  =new Employee(1005, 'Rana Saleh', 'Development', 'Junior');
  let seventh  =new Employee(1006, 'Hadi Ahmad', 'Finance', 'Mid-Senior');

//document.write('<table border="1">');
//document.write('<tr><th>ID</th><th>Full Name</th><th>Department</th><th>Level</th><th>Salary</th><th>Net Salary</th></tr>');

/*employees.forEach(function (employee) {
    employee.render();
});

document.write('</table>');*/
first.render();
second.render();
third.render();
fourth.render();
fifth.render();
sixth.render();
seventh.render();
