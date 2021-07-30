const inquirer = require("inquirer");
const fs = require('fs');
// const generatePage = require('./page-template.js');
// const pageHTML = generatePage(userName, github);
const pictureSelector =(icon) =>{
if(icon=='Manager') {
    return `![icon:'Manager']("iconify" data-icon="logos:coffeescript" data-inline="false")`
} else if(icon=='Engineer'){
    return `![icon:'Engineer']("iconify" data-icon="bi:eyeglasses" data-inline="false")`
} else if(icon=='Intern'){
    return `![icon: 'intern']("iconify" data-icon="bi:eyeglasses" data-inline="false")`
}
}
const employeeTitle =(position) =>{
    if(position=='Manager') {
        return `("Manager")`
    } else if(position=='Engineer'){
        return `("Engineer")`
    } else if(position=='Intern'){
        return `("Intern")`
    }
    }
const generatePage = (userName, githubName) => { 
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Staatliches&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <link rel="stylesheet" href="./assets/style.css" />
    <h1 class ="text-center">
        <title>${obj.projectTitle}</title>
        <span class ="oi oi-task d-inline d-lg-none"></span>${obj.projectTitle}</h1>
</head>

<body>       
            <section class="container-fluid" id="5DayContainer">
                <h2> 5-Day forecast:</h2>
                <div class="row">
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">${obj.employeeName}</h5>
            <p class="card-text"><span class=${obj.icon}></span>${obj.position}</p>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${obj.ID}</li>
              <li class="list-group-item">Email: ${obj.EmailLink}</li>
              <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
              <li class="list-group-item">Education: ${obj.University}</li>
            </ul>
            <div class="card-body">
        <a href="#" class="card-link">${obj.projectName}</a>
        <a href="#" class="card-link">${obj.githubUrl}</a>
          </div>
                </div>
            </div>
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">${obj.mangerName}</h5>
            <p class="card-text"><span class=${obj.icon}></span>${obj.position}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.ID}</li>
          <li class="list-group-item">Email: ${obj.EmailLink}</li>
          <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
          <li class="list-group-item">Education: ${obj.University}</li>
        </ul>
        <div class="card-body">
    <a href="#" class="card-link">${obj.projectName}</a>
    <a href="#" class="card-link">${obj.githubUrl}</a>
          </div>
                    </div>
            </div>
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">${obj.engineerName}</h5>
            <p class="card-text"><span class=${obj.icon}></span>${obj.position}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.ID}</li>
          <li class="list-group-item">Email: ${obj.EmailLink}</li>
          <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
          <li class="list-group-item">Education: ${obj.University}</li>
        </ul>
        <div class="card-body">
    <a href="#" class="card-link">${obj.projectName}</a>
    <a href="#" class="card-link">${obj.githubUrl}</a>
          </div>
        
            </div>
            <section class="2ndContainer" id="2Container">
            <div class="row">
        <div class="col-sm-4">
        <div class="card" style="width: 18rem;">
        <h5 class="card-title">${obj.engineerName}</h5>
            <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj.position}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.ID}</li>
          <li class="list-group-item">Email: ${obj.EmailLink}</li>
          <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
          <li class="list-group-item">Education: ${obj.University}</li>
        </ul>
        <div class="card-body">
    <a href="#" class="card-link">${obj.projectName}</a>
    <a href="#" class="card-link">${obj.githubUrl}</a>
      </div>
            </div>
        </div>
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">${obj.engineerName}</h5>
            <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj.position}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${obj.ID}</li>
              <li class="list-group-item">Email: ${obj.EmailLink}</li>
              <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
              <li class="list-group-item">Education: ${obj.University}</li>
            </ul>
            <div class="card-body">
        <a href="#" class="card-link">${obj.projectName}</a>
        <a href="#" class="card-link">${obj.githubUrl}</a>
          </div>
            </div>
            <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
            <h5 class="card-title">${obj.internName}</h5>
            <p class="card-text"><span class="iconify" data-icon="ph:student-duotone" data-inline="false"></span>${obj.position}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${obj.ID}</li>
          <li class="list-group-item">Email: ${obj.EmailLink}</li>
          <li class="list-group-item">Phone Number: ${obj.officeNumber}</li>
          <li class="list-group-item">Education: ${obj.University}</li>
        </ul>
        <div class="card-body">
    <a href="#" class="card-link">${obj.projectName}</a>
    <a href="#" class="card-link">${obj.githubUrl}</a>
          </div>
                </div>
            </div>
        </div>
            </section>
            </div>
        </content>
        </div>
        </main>
           <script src="./assets/script.js"></script>
        </body>
        </html>`
}
const promptUser = () => {
     inquirer.prompt([
    {
        type:'input',
        name:'managerName',
        message: "Who is the Manager?(required)",
        validate: managerNameInput=> {
          if (managerNameInput) {
            return true;
          } else {
            console.log('Please enter the manager name?');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'position',
        message: 'What position does this employee occupy?',
        choices: ['Manager', 'Engineer', 'Intern'],
      }
    ]);
  };
  
  const promptEmployee = EmployeeData => {
    console.log(`
  =================
  Add a New Employee
  =================
  `);
  
    // If there's no 'employee' array property, create one
    if (!portfolioData.projects) {
      portfolioData.projects = [];
    }
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'projectTitle',
          message: 'What is the name of your project? (Required)',
          validate: projectTitleInput => {
            if (projectTitleInput) {
              return true;
            } else {
              console.log('You need to enter a project title!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'ID',
          message: 'Please provide an ID for the employee!',
          validate: IDInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('please provide an ID for the employee!');
              return false;
            }
          }
        },
        {
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'feature',
          message: 'Would you like to feature this project?',
          default: false
        },
        {
          type: 'confirm',
          name: 'confirmAddProject',
          message: 'Would you like to enter another project?',
          default: false
        }
      ])
      .then(employeeData => {
        employeeData.projects.push(employeeData);
        if (employeeData.confirmAddemployee) {
          return promptProject(employeeData);
        } else {
          return employeeData;
        }
      });
  };
  promptUser()
   . then(answer => {
        console.log(answers)
      const pageHTML = generatePage(answers);
  
      fs.writeFile('./index.html', pageHTML, err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out index.html in this directory to see it!');
      });
    });
    