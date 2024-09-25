const core = require('@actions/core');

try {
  // Get the input from the workflow file
  const name = core.getInput('name');
  
  // Construct the greeting message
  const message = `Hello, ${name}! Welcome to your custom GitHub Action.`;

  // Log the message in the output
  console.log(message);

  // Set the output to the greeting message
  core.setOutput("greeting", message);
  
} catch (error) {
  core.setFailed(error.message);
}

