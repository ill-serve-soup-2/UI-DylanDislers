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


class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    this.tabItem = new TabItem(this.itemElement);
    element.addEventListener( 'click', () => this.select());
  };

  select() {
    const links = document.querySelectorAll('.tabs-link');
    links.forEach( link => link.classList.remove('tabs-link-selected'));
    this.element.classList.add('tabs-link-selected');
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll('.tabs-item');
    items.forEach( item => item.classList.remove('tabs-item-selected'));
    this.element.classList.add('tabs-item-selected')
  }
}

const links = document.querySelectorAll('.tabs-link');

links.forEach( link => new TabLink(link))