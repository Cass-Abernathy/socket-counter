//STEP 1: CONNECT TO THE SERVER
const socket = io();

//STEP 2: GRAB THE PAGE ELEMENTS
const addBtn = document.getElementById("add-btn");
const countE1 = document.getElementById("count");

//STEP 3: TELL THE SERVER WHEN THE BUTTON IS CLICKED
addBtn.addEventListener("click", function () {
    socket.emit("add");
});

//STEP 4: SHOW THE NUMBER THE SERVER SENDS
socket.on("count", function (newCount) {
    countE1.textContent = newCount;
});