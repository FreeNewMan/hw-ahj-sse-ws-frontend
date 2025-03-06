import RegForm from './components/RegForm';
import ChatRoom from './components/ChatRoom';

const container = document.querySelector('.container');
const regFormBlock = document.querySelector('.form-block');
const chatBlock = () => document.querySelector('.chat');

let sessionUserName;
let regForm;
let chatRoom;

const ws = new WebSocket('ws://localhost:3000/ws');

const loginUser = (prm) => {
  const messageForSend = { type: 'login', user: prm };
  ws.send(JSON.stringify(messageForSend));
};

const sendToServer = (prm) => {
  const messageForSend = { type: 'chatMessage', user: sessionUserName, content: prm };
  ws.send(JSON.stringify(messageForSend));
};

// ws.addEventListener('open', (e) => {
//   console.log(e);
//   console.log('ws open');
// });

// ws.addEventListener('close', (e) => {
//   console.log(e);
//   console.log('ws close');
// });

// ws.addEventListener('error', (e) => {
//   console.log(e);
//   console.log('ws error');
// });

ws.addEventListener('message', (e) => {
  const inMessage = JSON.parse(e.data);

  // console.log(inMessage);

  if (inMessage.type === 'login' && inMessage.status === 0) {
    sessionUserName = inMessage.name;
    // console.log(sessionUserName);
    chatRoom = new ChatRoom(container, sessionUserName, (prm) => sendToServer(prm));
    chatRoom.bindToDOM();
    regForm.formRemove(e);
  }

  if (inMessage.type === 'login' && inMessage.status === -1) {
    // console.log(inMessage.message);
    regForm.onError(inMessage.message);
  }

  if (inMessage.type === 'userlist') {
    if (chatRoom) {
      chatRoom.refrehUsers(inMessage.users);
    }
  }

  if (inMessage.type === 'chat') {
    // console.log(inMessage.chat);
    if (chatRoom) {
      chatRoom.refrehChat(inMessage.chat);
      chatBlock().scrollTop = chatBlock().scrollHeight;
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  regForm = new RegForm(regFormBlock, (prm) => loginUser(prm));
  regForm.bindToDOM();
});

window.addEventListener('beforeunload', () => {
  if (sessionUserName) {
    const messageForSend = { type: 'logout', user: sessionUserName };
    ws.send(JSON.stringify(messageForSend));
  }
});
