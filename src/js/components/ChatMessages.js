export default class ChatMessages {
  constructor(parentEl, sessionUserName) {
    this.element = parentEl;
    this.refreshData = this.refreshData.bind(this);
    this.addItem = this.addItem.bind(this);
    this.sessionUserName = sessionUserName;
  }

  static get markup() {
    return '<ul class="chat-messages"></ul>';
  }

  bindToDOM() {
    this.element.innerHTML = ChatMessages.markup;
    this.items = this.element.querySelector('.chat-messages');
  }

  addItem(prm) {
    const item = document.createElement('li');
    item.classList.add('message-item');

    const messageHeader = document.createElement('div');
    messageHeader.classList.add('message-header');
    let curUser;
    if (prm.user === this.sessionUserName) {
      curUser = 'You';
      item.classList.add('right');
    } else {
      curUser = prm.user;
    }
    messageHeader.textContent = `${curUser}, ${prm.dateTime}`;

    const messageBody = document.createElement('div');
    messageBody.classList.add('message-body');
    messageBody.textContent = prm.content;

    item.appendChild(messageHeader);
    item.appendChild(messageBody);
    this.items.appendChild(item);
  }

  refreshData(data) {
    if (data) {
      this.items.innerHTML = '';

      data.forEach((element) => {
        this.addItem(element);
      });
    }
  }
}
