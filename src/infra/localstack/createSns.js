const { exec } = require("child_process");

exec(
  "aws --endpoint-url=http://localhost:4566 sns create-topic --name onexlab-sns",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);

module.exports = {
  execute: exec,
};
