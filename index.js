const inquirer = require("inquirer");
const fs = require("fs");
const { array } = require("yargs");
const Employees = [];

const promptUser = () => {
  inquirer
    .prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
              if (projectNameInput) {
                return true;
              } else {
                console.log('You need to enter a project title!');
                return false;
              }
            }
          },
      {
        type: 'input',
        name: 'employeeName',
        message: 'Who is the employee?(required)',
        validate: employeeNameInput => {
          if (employeeNameInput) {
            return true;
          } else {
            console.log("Please enter the employee's name?");
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
        type: "link",
        name: "Email",
        message: "enter your email address",
        validate: (EmailLink) => {
          if (EmailLink) {
            return true;
          } else {
            console.log("please enter email address");
          }
        },
      },
      {
        type: "number",
        name: "phone",
        message: "What is the employees phone number?",
        validate:(phoneNumber)=> {
        if (phoneNumber){
            return true;
        // } else {
        //     console.log("what is the employee's phone number!")
        }
    }
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

    //   {
    //     type: "input",
    //     name: "link",
    //     message: "Enter the GitHub link to your project. (Required)",
    //     validate: (linkInput) => {
    //       if (linkInput) {
    //         return true;
    //       } else {
    //         console.log("You need to enter a project GitHub link!");
    //         return false;
    //       }
    //     },
    //   },

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
        console.log(answers);
      const pageHTML = generatePage(Employees);
        console.log(Employees);
        fs.writeFile('./index.html',pageHTML, err => {
            if (err) throw new Error(err);
        
            console.log('Page created! Check out index.html in this directory to see it!');
          });
        return Employees;
      }
//       console.log(answers);
//       const pageHTML = generatePage(Employees);
//   console.log(Employees)


    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        console.log(error);
      }
    });
};
promptUser()
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
  
  const generatePage = obj => { 
      // obj = obj[0];
      console.log(obj);
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
          <script src="https://code.iconify.design/1/1.0.7/iconify.min.js"></script>
      
          <h1 class ="text-center">
              <title>Smith Corporation Team Profile</title>
              <span class ="oi oi-task d-inline d-lg-none"></span>Smith Corporation Team Profile</h1>
      </head>  
      <body>    
                  <div class = "container">
                      <div class="row justify-content-start">
                  <div class="col-sm-4">
                  <div class="Manager">
                  <div class="card-deck">
                  <div class="Managercard" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${obj[0].employeeName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="logos:coffeescript" data-inline="false"></span>${obj[0].position}</p>
                </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${obj[0].ID}</li>
                    <li class="list-group-item">< type="Email">Email: ${obj[0].Email}</li>
                    <li class="list-group-item"><Phone Number: ${obj[0].phone}</li>
                    <li class="list-group-item">Education: ${obj[0].University}</li>
                    </ul>
                    <class="card-footer">
                    <a href="#" class="card-link">Project: https://${obj[0].github}github.io/${obj[0].projectName}</a><br>
                    <a href="#" class="card-link">Github: https://github.com/${obj[0].github}</a></li>
                </div>
                      </div>
                  </div>
                  <div class="col-sm-4">
                  <div class="Engineer">
                  <div class="card-deck">
                  <div class="Engineercard" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${obj[1].employeeName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj[1].position}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj[1].ID}</li>
                <li class="list-group-item">Email: ${obj[1].Email}@smiths.com</li>
                <li class="list-group-item">Phone Number:${obj[1].phone}</li>
                <li class="list-group-item">Education: ${obj[1].University}</li>
                </ul>
                <class="card-footer">
             <a href="#" class="card-link">Project: https://${obj[1].github}github.io/${obj[1].projectName}</a><br>
             <a href="#" class="card-link">Github: https://github.com/${obj[1].github}</a>
                </div>
                         </div>
                  </div>
                  <div class="col-sm-4">
                  <div class="Engineer">
                  <div class="card-deck">
                  <div class="Engineer1card" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${obj[2].engineerName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj[2].position}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj[2].ID}</li>
                <li class="list-group-item">Email: ${obj[2].Email}@smiths.com</li>
                <li class="list-group-item">Phone Number: ${obj[2].phone}</li>
                <li class="list-group-item">Education: ${obj[2].University}</li>
                </ul>
                <class="card-footer">
                <a href="#" class="card-link">Project: https://${obj[2].github}github.io/${obj[2].projectName}</a><br>
                <a href="#" class="card-link">Github: https://github.com/${obj[2].github}</a>
              </ul>
                </div>
                  </div> 
                  <div class="row-justify-content-end">
              <div class="col-sm-3">
              <div class="Engineer">
              <div class="card-deck">
              <div class="Engineer2card" style="width: 18rem;">
              <div class ="card-body">
              <h5 class="card-title">${obj[3].engineerName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj[3].position}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj[3].ID}</li>
                <li class="list-group-item">Email: ${obj[3].Email}</li>
                <li class="list-group-item">Phone Number: ${obj[3].phoneNumber}</li>
                <li class="list-group-item">Education: ${obj[3].University}</li>
                </ul>
                <class="card-footer">
                <a href="#" class="card-link">Project: https://${obj[3].github}github.io/${obj[3].projectName}</a><br>
                <a href="#" class="card-link">Github: https://github.com/${obj[3].github}</a>
              
                  </div>
              </div>
              <div class="Engineer">
                  <div class="col-sm-3">
                  <div class="card-deck">
                  <div class="Engineer3card" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${obj[4].engineerName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="bi:eyeglasses" data-inline="false"></span>${obj[4].position}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${obj[4].ID}</li>
                    <li class="list-group-item">Email: ${obj[4].Email}</li>
                    <li class="list-group-item">Phone Number: ${obj[4].phone}</li>
                    <li class="list-group-item">Education: ${obj[4].University}</li>
                    </ul>
                    <class="card-footer">
                   <a href="#" class="card-link">Project: https://${obj[4].github}github.io/${obj[4].projectName}</a><br>
                   <a href="#" class="card-link">Github: https://github.com/${obj[4].github}</a>
                </div>
                  </div>
                  </div>
                  <div class="Intern">
                  <div class="col-sm-3">
                  <div class="card-deck">
                  <div class="Interncard" style="width: 18rem;">
                  <div class="card-body">
                  <h5 class="card-title">${obj[5].internName}</h5>
                  <p class="card-text"><span class="iconify" data-icon="ph:student-duotone" data-inline="false"></span>${obj[5].position}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${obj[5].ID}</li>
                <li class="list-group-item">Email: ${obj[5].Email}</li>
                <li class="list-group-item">Phone Number: ${obj[5].phone}</li>
                <li class="list-group-item">Education: ${obj[5].University}</li>
                </ul>
                <a href="#" class="card-link">Project: https://${obj[5].github}github.io/${obj[5].projectName}</a><br>
                <a href="#" class="card-link">Github: https://github.com/${obj[5].github}</a>
                </div>
                      </div>
                      </div>
                      </div>
                      <form>
                      <div class="form-group">
                        <label from="exampleFormControlInput1">From</label>
                        <input type="email" class="form-control" id="${obj.Email}" placeholder="name@example.com">
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