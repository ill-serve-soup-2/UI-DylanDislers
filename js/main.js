class MenuToggle {
  constructor(element) {
    this.element = element;
    this.toggle = this.element.querySelector('.menuToggle')
    this.navMenu = this.element.querySelector('.navMenu')
    this.toggle.addEventListener('click', () => this.popUp())
  }
  popUp() {
    this.navMenu.classList.toggle('reveal')
  }
}



const menu = document.querySelector('#nav');

new MenuToggle(menu);