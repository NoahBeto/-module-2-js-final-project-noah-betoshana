const readline = require('readline');

function magic8Ball() {
  const responses = [
    "It is certain.",
    "Without a doubt.",
    "Outlook good.",
    "Reply hazy, try again later.",
    "Ask again later.",
    "Cannot predict now.",
    "My sources say no.",
    "Very doubtful."
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function askQuestion() {
    rl.question("Do you want to ask the Magic 8 Ball a yes/no question? (y/n): ", (userInput) => {
      if (userInput.toLowerCase() === 'n') {
        console.log("Goodbye!");
        rl.close();
      } else if (userInput.toLowerCase() === 'y') {
        rl.question("Ask the Magic 8 Ball a yes/no question: ", (userInput) => {
          const randomIndex = Math.floor(Math.random() * responses.length);
          const answer = responses[randomIndex];
          console.log(`Magic 8 Ball says: ` + answer);
          askQuestion();
        });
      } else {
        console.log("Invalid input. Please enter 'y' or 'n'.");
        askQuestion();
      }
    });
  }
  
  askQuestion();

}

magic8Ball();