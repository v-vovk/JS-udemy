'use strict';

let menu = document.getElementsByClassName("menu")[0],
    adv = document.querySelector('.adv'),
    title = document.querySelector('.title'),
    promptforApple = document.querySelector("#prompt"),
    newMenuItem = document.createElement('li'),
    menuItem = document.getElementsByClassName('menu-item');

    // 1
    menu.insertBefore(menuItem[2], menuItem[1]);
    newMenuItem.classList.add("menu-item");
    newMenuItem.textContent = "Пятый элемент";
    menu.appendChild(newMenuItem);

    // 2
    document.body.style.background = 'url("./img/apple_true.jpg")';

    // 3
    title.textContent = "Мы продаем только подлинную технику Apple";

    // 4
    adv.remove();

    // 5 
    let opinionForApple = prompt('Ваше отношение к епл?', '');
    promptforApple.textContent = opinionForApple;
