
//index 0 holds the counter value
//index 1 holds the sum of the salary value
let admin=[0,0];
let market=[0,0];
let fin=[0,0];
let dev=[0,0];

let footer=document.getElementById('footer');
//looping through each employee data
for(let i=0;i<window.localStorage.length;i++){
    let parsedValue = JSON.parse(localStorage.getItem(localStorage.key(i)));
    //checking for aministration
    if(parsedValue.department==='Administration'){
       admin[0]++;
       admin[1]+=parsedValue.salary;
    }
    //checking for marketing
    else if(parsedValue.department==='Marketing'){
        market[0]++;
        market[1]+=parsedValue.salary;
     }

    //checking for Development
     else if(parsedValue.department==='Development'){
        dev[0]++;
        dev[1]+=parsedValue.salary;
     }

     //checking for Finance
     else if(parsedValue.department==='Finance'){
        fin[0]++;
        fin[1]+=parsedValue.salary;
     }


}

// Calculate average salary for each department
adminAverage = admin[0] > 0 ? admin[1] / admin[0] : 0;
marketAverage = market[0] > 0 ? market[1] / market[0] : 0;
devAverage = dev[0] > 0 ? dev[1] / dev[0] : 0;
finAverage = fin[0] > 0 ? fin[1] / fin[0] : 0;

//console.log(admin[1]);
//...........................................Rendering.............................................................................

var table = document.createElement("table");
table.id='table';
var headerRow = table.insertRow();
headerRow.innerHTML = "<th>Department</th><th>Number of employees</th><th>Total Salary</th><th>Average</th>";
// Add rows for each department
var departments = [
    { name: "Administration", data: admin },
    { name: "Marketing", data: market },
    { name: "Development", data: dev },
    { name: "Finance", data: fin }
];

departments.forEach(function(dept) {
    var rowCount = dept.data[0];
    var totalSalary = dept.data[1];
    var averageSalary = rowCount > 0 ? totalSalary / rowCount : 0;

    var row = table.insertRow();
    row.innerHTML = "<td>" + dept.name + "</td><td>" + rowCount + "</td><td>" + totalSalary + "</td><td>" + averageSalary + "</td>";
});

// Calculate totals
var totalEmployees = admin[0] + market[0] + dev[0] + fin[0];
var totalSalary = admin[1] + market[1] + dev[1] + fin[1];
var totalAverage = totalEmployees > 0 ? totalSalary / totalEmployees : 0;

// Create footer row
var footerRow = table.createTFoot().insertRow();
footerRow.innerHTML = "<td>Total</td><td>" + totalEmployees + "</td><td>" + totalSalary + "</td><td>" + totalAverage + "</td>";


// Append table to the main
let main=document.getElementById('main');
main.appendChild(table);

//............................................Style.........................................................................

(function addStyle() {
    var css = `
    #table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 70%;
        margin-top: 50px;
        text-align: center; 
        background-color: white;
        color: #333;
        border: 2px solid #ddd;
        margin-left:15%;
        margin-bottom: 70px;
    }

        #table td, #table th {
            border: 1px solid #ddd;
            padding: 8px;
        }

        #table tr:nth-child(even) {
            background-color: #f2f2f2;
            
        }

        #table tr:hover {
            background-color: #ddd;
        }

        #table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #3498db;
            color: white;
            
        }

        #footer {
        background-color: rgb(52,73,94);
        color: white;
        text-align: center;
        padding: 10px 0;
        position: static;
        bottom: 0;
        width: 100%;
        margin-top: 23px;
      
    }

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


    `;

    var styleElement = document.createElement('style');
    styleElement.textContent = css;
    document.head.appendChild(styleElement);
})();
