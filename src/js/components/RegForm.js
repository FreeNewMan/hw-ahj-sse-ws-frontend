export default class RegForm {
  constructor(parentEl, loginUser) {
    this.element = parentEl;
    this.loginUser = loginUser;

    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
    this.formRemove = this.formRemove.bind(this);
  }

  static get markup() {
    return `<form class="user-form">
              <div class="form-caption"><h3>Выберите псевдоним</h3></div>
              <div class="form-group">
                <input type="text" name="user-name" class="user-name" autocomplete="off">
               </div>
              <div class="buttons-list">
                <button class="submit">Продолжить</button>
              </div>
            </form>`;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get formSelector() {
    return '.user-form';
  }

  static get userInput() {
    return '.user-name';
  }

  static get errMsgSelector() {
    return '.error-message';
  }

  bindToDOM() {
    this.element.innerHTML = RegForm.markup;
    this.form = this.element.querySelector(RegForm.formSelector);
    this.userinput = this.element.querySelector(RegForm.userInput);

    this.form.addEventListener('submit', this.onSubmit);

    this.userinput.addEventListener('input', () => {
      const err = this.element.querySelector(RegForm.errMsgSelector);
      if (err) {
        err.remove();
      }
    });
  }

  formRemove(e) {
    e.preventDefault();
    this.form.removeEventListener('submit', this.onCancel);
    this.form.remove();
  }

  onError(msg) {
    const item = document.createElement('div');
    item.classList.add('error-message');
    item.textContent = msg;
    this.form.appendChild(item);
  }

  onSubmit(e) {
    e.preventDefault();
    const userName = this.form.elements[0].value;
    if (userName) {
      this.loginUser(userName);
    }
  }
}
