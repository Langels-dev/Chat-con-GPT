const socket = io();

const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const messagesList = document.getElementById('messages');

const nombre = prompt('Tu nombre');

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = chatInput.value;
  socket.emit('message', {
    message,
    nombre
  });
  chatInput.value = '';
});

socket.on('user message', ({message, nombre}) => {
    const li = document.createElement('li');
    li.textContent = `${nombre}: ` + message;
    messagesList.appendChild(li);
});