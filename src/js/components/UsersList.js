export default class UsersList {
  constructor(parentEl, sessionUserName) {
    this.element = parentEl;
    this.refreshData = this.refreshData.bind(this);
    this.addItem = this.addItem.bind(this);
    this.sessionUserName = sessionUserName;
  }

  static get markup() {
    return '<ul class="items"></ul>';
  }

  bindToDOM() {
    this.element.innerHTML = UsersList.markup;
    this.items = this.element.querySelector('.items');
  }

  addItem(prm) {
    const item = document.createElement('li');
    item.classList.add('items-item');

    const ava = document.createElement('div');
    ava.classList.add('item-ava');

    const userblock = document.createElement('div');
    userblock.classList.add('item-userblock');

    const userName = document.createElement('p');
    userName.classList.add('item-username');

    if (prm.name === this.sessionUserName) {
      userName.classList.add('session-user');
      userName.textContent = 'You';
    } else {
      userName.textContent = prm.name;
    }

    item.appendChild(ava);
    item.appendChild(userblock);
    userblock.appendChild(userName);
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
