const inquirer = require("inquirer");
const fs = require("fs");
const Employees = [];
const pictureSelector = (icon) => {
  if (icon == "Manager") {
    return `("iconify" data-icon="logos:coffeescript" data-inline="false")`;
  } else if (icon == "Engineer") {
    return `("iconify" data-icon="bi:eyeglasses" data-inline="false")`;
  } else if (icon == "Intern") {
    return `("iconify" data-icon="bi:eyeglasses" data-inline="false")`;
  }
};
const employeeTitle = (position) => {
  if (position == "Manager") {
    return `("Manager")`;
  } else if (position == "Engineer") {
    return `("Engineer")`;
  } else if (position == "Intern") {
    return `("Intern")`;
  }
};
const projectName = (githubUrl) => {
  if (githubUrl == "Bachelors Software Engineer") {
    return "[![githubUrl: Bachelors Software Engineer](https://patrena94.github.io/Multi-City-Weather-Dashboard/)]";
  } else if (githubUrl == "Master Software Engineer") {
    return "[![githubUrl: Master Software Engineer](https://patrena94.github.io/Smith-Corporation-Work-Scheduler/)]";
  }
};

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
            <title> ${projectTitle} </title>
            <span class ="oi oi-task d-inline d-lg-none"></span>${obj.projectTitle}</h1>
    </head>  
    <body>    
                <div class="Manager">
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
                <form>
  <div class="form-group">
    <label from="exampleFormControlInput1">From</label>
    <input type="email" class="form-control" id="${obj.EmailLink}" placeholder="name@example.com">
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Example select</label>
    <input type="email" class="form-control"  id="exampleFormControlInput1" placeholder="name@example.com">
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>
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
                <div class="Engineer">
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
                <div class="Engineer">
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
            <div class="Engineer">
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
                <div class="Intern"
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
  inquirer
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
        type: "input",
        name: "managerName",
        message: "Who is the Manager?(required)",
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("Please enter the manager name?");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Emaillink",
        message: "enter your email address",
        validate: (EmailLinkInput) => {
          if (EmailLinkInput) {
            return true;
          } else {
            console.log("please enter email address");
          }
        },
      },
      {
        type: "checkbox",
        name: "educationLevel",
        message: "What position does this employee occupy?",
        choices: [
          "Intern",
          "Bachelors Software Engineer",
          "Master Software Engineer",
        ],
      },

      {
        type: "input",
        name: "University",
        message: "What university did the employee?",
        validate: (UniversityInput) => {
          if (UniversityInput) {
            return true;
          } else {
            console.log("Is the employee an Intern!");
          }
        },
      },
      {
        type: "checkbox",
        name: "position",
        message: "What position does this employee occupy?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "ID",
        message: "Please provide an ID for the employee!",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("please provide an ID for the employee!");
            return false;
          }
        },
      },

      {
        type: "input",
        name: "link",
        message: "Enter the GitHub link to your project. (Required)",
        validate: (linkInput) => {
          if (linkInput) {
            return true;
          } else {
            console.log("You need to enter a project GitHub link!");
            return false;
          }
        },
      },

      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Would you like to enter another Employee?",
        default: false,
      },
    ])
    .then((answers) => {
      if (answers.confirmAddEmployee) {
        Employees.push(answers);
        promptUser();
      } else {
        Employees.push(answers);
        //   loop in employees
        console.log(Employees);
        return Employees;
      }
      console.log(answers);
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error);
      }
    });
};
const pageHTML = generatePage(Employees);
  
      fs.writeFile('./index.html', pageHTML, err => {
        if (err) throw new Error(err);
  
        console.log('Page created! Check out index.html in this directory to see it!');
      });
promptUser();

