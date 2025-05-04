const core = require('@actions/core');

try {
  // Get the 'name' input from the workflow configuration
  const name = core.getInput('name');
  console.log(`Hello, ${name}!`);

  // You can set an output if needed, although this simple example doesn't require one
  // core.setOutput('greeting', `Hello, ${name}!`);

} catch (error) {
  core.setFailed(error.message);
}