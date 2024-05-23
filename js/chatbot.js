const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input i");
const chatbox = document.querySelector(".chatbox");
let userMessage;
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<i class="fa-solid fa-robot"></i><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}
const HandleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if (!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    if (userMessage.includes("hel") || userMessage == "hi") {
        chatbox.appendChild(createChatLi("hello... how can I help you?", "iscoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    else if (userMessage.includes("bye") || userMessage == "goodbye") {
        chatbox.appendChild(createChatLi("Goodbye", "iscoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    else if (userMessage.includes("how are")) {
        chatbox.appendChild(createChatLi("I'm a bot, I have no feelings. so how can I help you?", "iscoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    else if (userMessage == "okay" || userMessage == "ok" || userMessage == "okey") {
        chatbox.appendChild(createChatLi("...", "iscoming"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
    }
    else {
        setTimeout(() => {
            chatbox.appendChild(createChatLi("I can't recognize it, try it another time...", "iscoming"));
            chatbox.scrollTo(0, chatbox.scrollHeight);
        }, 600);
    }
}
sendChatBtn.addEventListener("click", HandleChat);