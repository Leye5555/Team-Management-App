const Employee = require('../lib/Employee.js');
const initial = new Employee({ name: 'test name', email: 'test@gmail' });
function renderEmployeeCards(employee = initial) {
  switch (employee.getRole()) {
    case 'Manager':
      return ` <div class="col-4 mt-1">
         <div class="card">
             <div class="bg-primary card-header text-dark">
             <h1>
             ${employee.getName()?.trim().split(' ')[0]}
             </h1>
            <h2>
                 <i style="color : white;" class="fa-solid fa-user-tie mr-4"></i>
             &nbsp;Manager
            </h2>
             </div>
             <div class="p-2 bg-secondary">
                 <ul class="list-group list-group-flush card my-2">
                     <li class="list-group-item">
                     ID: ${employee.getId()}
                     </li>
                     <li class="list-group-item">
                     Email:
                     <a href="mailto:${employee.getEmail()}">
                     ${employee.getEmail()}
                     </a>
                     </li>
                     <li class="list-group-item">
                     Office number: ${employee.getOfficeNumber()}
                     </li>
                 </ul>
             </div>
         </div>
     </div>`;
    case 'Engineer':
      return `
         <div class="col-4 mt-1">
         <div class="card">
             <div class="bg-primary card-header text-dark">
             <h1>
             ${employee.getName()?.trim().split(' ')[0]}
             </h1>
                 <h2>
                 <i style="color : white;" class="fa-solid fa-user-gear mr-4"></i>
             &nbsp;Engineer
                 </h2>
             </div>
             <div class="p-2 bg-secondary">
                 <ul class="list-group list-group-flush card my-2">
                     <li class="list-group-item">
                     ID: ${employee.getId()}
                     </li>
                     <li class="list-group-item">
                     Email:
                     <a href="mailto:${employee.getEmail()}">
                      ${employee.getEmail()}
                     </a>
                     </li>
                     <li class="list-group-item">
                     GitHub:
                     <a href="https://github.com/${employee.getGithub()}" target="_blank">
                     ${employee.getGithub()}
                     </a>
                     </li>
                 </ul>
             </div>
         </div>
     </div>
         `;
    case 'Intern':
      return `
          <div class="col-4 mt-1">
          <div class="card">
              <div class="bg-primary card-header text-dark">
              <h1>
              ${employee.getName()?.trim().split(' ')[0]}
              </h1>
              <h2>
              <i style="color : white;" class="fa-solid fa-school mr-4"></i>
              Intern
              </h2>
              </div>
              <div class="p-2 bg-secondary">
                  <ul class="list-group list-group-flush card my-2">
                      <li class="list-group-item">
                      ID: ${employee.getId()}
                      </li>
                      <li class="list-group-item">
                      Email:
                      <a href="mailto:${employee.getEmail()}">
                      ${employee.getEmail()}</a>
                      </li>
                      <li class="list-group-item">
                      School: ${employee.getSchool()}
                      </li>
                  </ul>
              </div>
          </div>
      </div>
          `;
    default:
      return '';
  }
}

module.exports = renderEmployeeCards;
