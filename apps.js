//constructor 
function Employee(img_path, full_name, id, department, level, salary) {
    this.img_path = img_path;
    this.full_name = full_name;
    this.id = id;
    this.department = department;
    this.level = level;
    this.salary = salary;
}



//calculate salary
Employee.prototype.getSalary = function(level) {
    let salary = 0;
    level=this.level
    if (this.level.toLowerCase() === 'senior') {
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    } else if (this.level.toLowerCase() === 'mid-senior') {
        salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    } else if (this.level.toLowerCase() === 'junior') {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    }
    let net_salary = salary - (salary * 7.5 / 100);
    return { salary, net_salary };
}



//ID
Employee.prototype.getID = function() {
    let id = '';
    for (let i = 0; i < 4; i++) {
        id += Math.floor(Math.random() * 10);
    }
    return id;
}



//display information
Employee.prototype.display = function() {
    let main = document.getElementById('main');
    let departmentDiv = document.getElementById(this.department.toLowerCase() + '-div');
    // Create department div if it doesn't exist
    if (!departmentDiv) {
        departmentDiv = document.createElement('div');
        departmentDiv.id = this.department.toLowerCase() + '-div';
        departmentDiv.classList.add('department');
        main.appendChild(departmentDiv);
        // Create department header
        let departmentHeader = document.createElement('h2');
        departmentHeader.textContent = this.department;
        departmentDiv.appendChild(departmentHeader);
    }
 
    let cardContainer = document.createElement('div');
    cardContainer.classList.add('employee-card');
  


    let img = document.createElement('img');
    img.src = this.img_path;
    img.width = "50";
    img.height = "50";
  


    let name = document.createElement('p');
    name.textContent = `Name: ${this.full_name}`;
  


    let departmentInfo = document.createElement('p');
    departmentInfo.textContent = `Department: ${this.department}`;


    let level = document.createElement('p');
    level.textContent = `Level: ${this.level}`;


    let salary = document.createElement('p');
    let salaries = this.getSalary(level).net_salary;
    //console.log(salaries);
    salary.textContent = `Net Salary: ${salaries}`;

    let id = document.createElement('p');
    id.textContent = `ID: ${this.getID()}`;


    cardContainer.append(img, name, departmentInfo, level, salary, id);


    departmentDiv.appendChild(cardContainer);
}

//...............................................................................
//................................Submiting.............................................................................

let arr=[];

let form = document.getElementById('form');
form.addEventListener('submit', addNewCardHandler);

function addNewCardHandler(event) {
    event.preventDefault();
    let img = event.target.img.value;
    let name = event.target.fullname.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let id=Employee.prototype.getID();
   

    let obj = new Employee(img, name,id, department, level);


    let salaryData = obj.getSalary(obj.level);
    let salary = salaryData.net_salary;
     obj.salary=salary
    let newObj = new Employee(img, name, id, department, level, salary);
    newObj.display();

    
    // arr.push(newObj);
    localStorage.setItem(`${newObj.id}`, JSON.stringify(newObj));
}



//var arr=[];
// Dynamically add styles
(function addStyles() {
    let styles = `
    body {
        font-family: 'Roboto', sans-serif;
        background-color: #f0f0f0;
        color: #333;
        margin: 0;
        padding: 0;
    }
    header {
        background-color: #3498db;
        color: white;
        text-align: center;
        padding: 20px 0;
    }
    footer {
        background-color: rgb(52,73,94);
        color: white;
        text-align: center;
        padding: 10px 0;
        position: static;
        bottom: 0;
        width: 100%;
        margin-top: 100px;
        margin-bottom:0px; 
    }
    /* Change the background color of the form */
    form {
       background-color:rgba(52, 73, 94, 0.22);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .flex-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .department {
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    .employee-card {
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 10px;
        margin-top: 10px;
        width: 300px;
        
    }
    .employee-card img {
        border-radius: 50%;
        margin-right: 10px;
    }
    .employee-card p {
        margin: 5px 0;
    }
    h2 {
        font-size: 24px;
        margin-top: 0;
        margin-bottom: 10px;
    }
    p {
        font-size: 16px;
    }
    `;

    // Create <style> element and append to <head>
    // Create <style> element and append to head
    let styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
})();





/* #administration-div {
        background-color: rgba(144, 238, 144, 0.3); 
    }
    
    #marketing-div {
        background-color: rgba(173, 216, 230, 0.3); 
    }
    #finance-div {
        background-color: rgba(255, 182, 193, 0.3); 
    }
    #development-div {
        background-color: rgba(255, 204, 153, 0.3); 
    } */