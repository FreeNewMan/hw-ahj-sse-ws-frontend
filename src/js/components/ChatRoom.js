import UsersList from './UsersList';
import ChatMessages from './ChatMessages';

export default class ChatRoom {
  constructor(parentEl, sessionUserName, sendToServer) {
    this.element = parentEl;
    this.sessionUserName = sessionUserName;
    this.refrehUsers = this.refrehUsers.bind(this);
    this.refrehChat = this.refrehChat.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.sendToServer = sendToServer;
  }

  static get markup() {
    return `<div class="chat-room">
      <div class="users-col">
        <div class="users-list"></div>
      </div>
      <div class="chat-col">
        <div class="chat"></div>
        <div class="send-message">
        <form class="message-form">             
           <div class="form-group">
             <input type="text" name="message-content" class="message-content" placeholder="Type your message here" autocomplete="off">
           </div>
        </form>
        </div>
      </div>
    </div>`;
  }

  static get chatSelector() {
    return '.chat';
  }

  static get usersSelector() {
    return '.users-list';
  }

  static get messageFormSelector() {
    return '.message-form';
  }

  static get messageInptSelector() {
    return '.message-content';
  }

  bindToDOM() {
    this.element.innerHTML = ChatRoom.markup;
    this.users = this.element.querySelector(ChatRoom.usersSelector);
    this.chat = this.element.querySelector(ChatRoom.chatSelector);
    this.messageForm = this.element.querySelector(ChatRoom.messageFormSelector);
    this.messageInpt = this.messageForm.querySelector(ChatRoom.messageInptSelector);

    this.userlist = new UsersList(this.users, this.sessionUserName);
    this.userlist.bindToDOM();

    this.chatMessages = new ChatMessages(this.chat, this.sessionUserName);
    this.chatMessages.bindToDOM();

    this.messageForm.addEventListener('submit', (e) => {
      this.sendMessage(e);
    });
  }

  sendMessage(e) {
    e.preventDefault();
    const textMessage = this.messageForm.elements[0].value;
    if (textMessage) {
      this.sendToServer(textMessage);
      this.messageInpt.value = '';
    }
  }

  refrehUsers(data) {
    this.userlist.refreshData(data);
  }

  refrehChat(data) {
    // console.log(data);
    this.chatMessages.refreshData(data);
  }
}
