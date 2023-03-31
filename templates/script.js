// JavaScript for Sign Language Detection Website

// Get the canvas element
const canvas = document.getElementById("canvas");

// Get the context of the canvas
const ctx = canvas.getContext("2d");

// Set the canvas width and height
canvas.width = window.innerWidth * 0.8;
canvas.height = 500;

// Set the line style for the context
ctx.lineWidth = 5;
ctx.lineCap = "round";
ctx.strokeStyle = "#000";

// Variable to keep track of whether the user is drawing
let isDrawing = false;

// Add event listeners to the canvas
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);

// Function to start drawing
function startDrawing(event) {
isDrawing = true;
draw(event);
}

// Function to draw on the canvas
function draw(event) {
if (!isDrawing) return;
ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
}

// Function to stop drawing
function stopDrawing() {
isDrawing = false;
ctx.beginPath();
}

// Add event listener to the test button
const testButton = document.getElementById("test-btn");
testButton.addEventListener("click", test);

// Function to run the test
function test() {
console.log("Running test...");
}

// Add event listener to the train button
const trainButton = document.getElementById("train-btn");
trainButton.addEventListener("click", train);

// Function to run the training
function train() {
console.log("Training model...");
}

// Add event listener to the run button
const runButton = document.getElementById("run-btn");
runButton.addEventListener("click", run);

// Function to run the model
function run() {
console.log("Running model...");