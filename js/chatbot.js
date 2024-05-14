const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input i");
const chatbox = document.querySelector(".chatbox");
let userMessage;
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<i class="fa-solid fa-robot"></i><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
const HandleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if (!userMessage) return;
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    if (userMessage == "hello" || userMessage == "hi") {
        chatbox.appendChild(createChatLi("hello... how can I help you?", "iscoming"));
    }
    else if (userMessage == "bye" || userMessage == "goodbye" || userMessage == "bye bye") {
        chatbox.appendChild(createChatLi("Goodbye", "iscoming"));
    }
    else if (userMessage == "how are you?" || userMessage == "how are things going?" || userMessage == "how are you doing?") {
        chatbox.appendChild(createChatLi("I'm a bot, I have no feelings. so how can I help you?", "iscoming"));
    }
    else if (userMessage == "okay" || userMessage == "ok" || userMessage == "okey") {
        chatbox.appendChild(createChatLi("...", "iscoming"));
    }
    else {
        setTimeout(() => {
            chatbox.appendChild(createChatLi("I can't recognize it, try it another time...", "iscoming"));
        }, 600);
    }
}
sendChatBtn.addEventListener("click", HandleChat);