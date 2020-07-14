const USER_NAME = "nomeDoUsuario";
const USER_ID = "ID_Do_Usuario";
const BOT_ID = "id";
const BOT_NAME = "Bot";

function getStatusChat(status, message) {
    var element = document.getElementById("id-chat-status");

    element.style.backgroundColor = status;
    element.title = message;
}

module.exports = {

    USER_NAME,
    USER_ID,
    BOT_ID,
    BOT_NAME,
    getStatusChat

}