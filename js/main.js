class MenuToggle {
  constructor(element) {
    this.element = element;
    this.toggle = this.element.querySelector('.menuToggle');
    this.closeMenu = this.element.querySelector('.close');
    this.navMenu = this.element.querySelector('.navMenu');
    this.toggle.addEventListener('click', () => this.popUp());
    this.closeMenu.addEventListener('click', () => this.close());
  }
  popUp() {
    this.navMenu.classList.toggle('menuReveal')
    this.toggle.style.display = 'none';
  }
  close() {
    this.navMenu.classList.toggle('menuReveal');
    this.toggle.style.display = 'flex';
  }
}



const menu = document.querySelector('#nav');
new MenuToggle(menu);


document.addEventListener('scroll', e => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector('h1').classList.add('headerReveal')
    document.querySelector('#header').classList.add('headerBgReveal')
  } else {
    document.querySelector('h1').classList.remove('headerReveal')
    document.querySelector('#header').classList.remove('headerBgReveal')
  }
});
