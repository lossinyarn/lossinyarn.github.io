// Функция для отправки сообщения
function sendMessage() {
    const messageText = document.querySelector('.chat-input-field').value;
    if (messageText.trim()) {
        addMessageToChat('Вы', messageText, 'outgoing');
        // Здесь вы можете добавить логику для отправки сообщения на сервер или чат-бот (например, с помощью AJAX)

        // Очистить поле ввода
        document.querySelector('.chat-input-field').value = '';

        // Сгенерировать ответ чат-бота (пример)
        const botResponse = generateBotResponse(messageText);
        setTimeout(() => addMessageToChat('Бот Gemini', botResponse, 'incoming'), 1000);
    }
}

// Функция для добавления сообщения в чат
function addMessageToChat(author, message, type) {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', `chat-message-${type}`);

    const authorElement = document.createElement('div');
    authorElement.classList.add('chat-message-author');
    authorElement.textContent = author;

    const textElement = document.createElement('div');
    textElement.classList.add('chat-message-text');
    textElement.textContent = message;

    messageElement.appendChild(authorElement);
    messageElement.appendChild(textElement);
    chatMessages.appendChild(messageElement);

    // Прокрутить чат к последнему сообщению
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Пример функции для генерации ответа чат-бота (вы можете заменить ее своим чат-ботом)
function generateBotResponse(messageText) {
    switch (messageText.toLowerCase()) {
        case 'привет':
            return 'Привет! Чем я могу тебе помочь?';
        case 'как дела?':
            return 'У меня всё хорошо, спасибо! А как у тебя?';
        case 'что ты умеешь?':
            return 'Я могу отвечать на вопросы, генерировать текст, переводить языки и многое другое. Чем я могу тебе помочь?';
        default:
            return 'Извини, я не совсем понимаю, что ты имеешь в виду. Пожалуйста, перефразируй свой вопрос.';
    }
}

// Обработчик события нажатия кнопки отправки
const sendButton = document.querySelector('.chat-input-button');
sendButton.addEventListener('click', sendMessage);

// Обработчик события нажатия клавиши Enter в поле ввода
const inputField = document.querySelector('.chat-input-field');
inputField.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
