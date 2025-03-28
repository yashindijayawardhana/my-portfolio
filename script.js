document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
});
function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value;
    
    if (message.trim() === "") return;

    let chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    
    // Simple bot response
    let botResponse = "I'm still learning. Ask me something simple!";
    if (message.toLowerCase().includes("hello")) {
        botResponse = "Hello! How can I help you?";
    }
    
    setTimeout(() => {
        chatbox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;
    }, 1000);

    inputField.value = ""; 
}
