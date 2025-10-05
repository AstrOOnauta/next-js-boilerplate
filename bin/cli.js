#!/usr/bin/env node
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2] || "my-app";
const gitCheckoutCommand = `git clone --depth 1 https://github.com/AstrOOnauta/next-js-boilerplate.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install --legacy-peer-deps`;

console.log(`Cloning the repository with name ${repoName}`);

const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(code - 1);

console.log(`Installing dependencies for ${repoName}`);

const installDeps = runCommand(installDepsCommand);

if (!installDeps) process.exit(code - 1);

console.log("Gratz! You're ready. Follow the following commands to start:");
console.log(`cd ${repoName} && npm run dev`);
