//DROPDOWN MENU EVENT
//Passing #nav element into constructor for new MenuToggle

class MenuToggle {
  constructor(element) {
    this.element = element;
    this.toggle = this.element.querySelector('.menuToggle'); 
    this.closeMenu = this.element.querySelector('.close');
    this.navMenu = this.element.querySelector('.navMenu');
    //Click event on menutoggle fires popUp method
    this.toggle.addEventListener('click', () => this.popUp());
    //Click event on close element fires close method
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

// Grabbing #nav element and passing intp constructor of MenuToggle Class
const menu = document.querySelector('#nav');
new MenuToggle(menu);


// SCROLL EVENT
// When scrolling down 300 from top of page h1 and navbar get classes added on that reveal them
document.addEventListener('scroll', () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.querySelector('h1').classList.add('headerReveal')
    document.querySelector('#header').classList.add('headerBgReveal')
  } else {
    document.querySelector('h1').classList.remove('headerReveal')
    document.querySelector('#header').classList.remove('headerBgReveal')
  }
});

//P ELEMENT ANIMATION
const pTags = document.querySelectorAll('p');
const pTagsArray = Array.from(pTags);


pTagsArray.map( p => {
  p.addEventListener('mouseover', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1.1, ease:Bounce.easeOut})
  })
})

pTagsArray.map( p => {
  p.addEventListener('mouseout', p => {
    TweenMax.to(p.currentTarget, 1, {scale: 1, ease:Bounce.easeOut})
  })
})
