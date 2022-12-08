"use strict";

var conn = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();


//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;

conn.on("RecieveMessage", (user, message) => {

    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    li.textContent = `${user} says ${message}`

})


conn.start().then (() => {
    document.getElementById("sendButton").disabled = false;
}).catch((err) => {
    return console.error(err.toString());
});


// send from client when button is clicked
document.getElementById("sendButton").addEventListener("click", (e) => {
    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;

    conn.invoke("sendMessage", user, message).catch((err) => {
        return console.error(err.toString());
    })
    e.preventDefault();
})