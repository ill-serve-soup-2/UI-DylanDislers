class MenuToggle {
  constructor(element) {
    this.element = element;
    this.toggle = this.element.querySelector('.menuToggle')
    this.closeMenu = this.element.querySelector('.close')
    this.navMenu = this.element.querySelector('.navMenu')
    this.toggle.addEventListener('click', () => this.popUp())
    this.closeMenu.addEventListener('click', () => this.close())
  }
  popUp() {
    this.navMenu.classList.toggle('reveal')
    this.toggle.style.display = 'none';
  }
  close() {
    this.navMenu.classList.toggle('reveal')
    this.toggle.style.display = 'flex';
  }
}



const menu = document.querySelector('#nav');

new MenuToggle(menu);