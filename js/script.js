// 3.0
// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//task 1.0
const mainEl = document.querySelector('main');
//task1.1
mainEl.style.backgroundColor = 'var(--main-bg)';
//task1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
//task1.3
mainEl.classList.add('flex-ctr');
// 2.0
const topMenuEl = document.getElementById('top-menu');
// 2.1
topMenuEl.style.height = "100%";
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//2.3
topMenuEl.classList.add('flex-around');

//3.1
for (let link of menuLinks){
  const linkTag = document.createElement('a');
  linkTag.seetAttribute('href', link.href);
  linkTag.innerHTML = link.text;
  topMenuEl.append(linkTag);
  console.log(LinkTag)
}
