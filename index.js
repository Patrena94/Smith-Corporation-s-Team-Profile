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

const promptUser = () => {
  inquirer
    .prompt([
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

promptUser();
