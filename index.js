// Task Scheduler and Logger

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'task_log.txt');



// Simulated tasks
const tasks = [
    'Database Backup',
    'Send Email Report',
    'Clean Temporary Files',
    'Check Server Status',
    'Generate Analytics Report'
];

// Function to log task execution
function logTaskExecution(task, status) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${task}: ${status}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Function to get a random task status
function getRandomStatus() {
    const statuses = ['Success', 'Failure', 'Pending', 'In Progress', 'Completed'];
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to execute and log a random task
function executeTask() {
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    const status = getRandomStatus();
    logTaskExecution(task, status);
    console.log(`Task Executed - ${task}: ${status}`);
}

// Schedule task execution
setInterval(executeTask, 4000); // Every 4 seconds

// Initial log message
logTaskExecution('SYSTEM', 'Task Scheduler started.');
console.log('Task Scheduler started.');

// Stop after 1 minute
setTimeout(() => {
    logTaskExecution('SYSTEM', 'Task Scheduler stopped.');
    console.log('Task Scheduler stopped.');
    process.exit(0);
}, 60000);
