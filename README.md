# Smith-Corporation-s-Team-Profile
 return inquirer.prompt([
        promptUser().then(answers => {
            console.log(answers)
          const pageHTML = generatePage(answers);
        }),