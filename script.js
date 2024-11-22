const burger = document.getElementById('burger');
const close = document.getElementById('close');
const flyoutMenu = document.getElementById('nav1');

burger.addEventListener('click', function () {
    flyoutMenu.style.right = 0;
})

close.addEventListener('click', function () {
    flyoutMenu.style.right = "-200px";
})