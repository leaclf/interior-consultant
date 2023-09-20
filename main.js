var button = document.getElementById('open');
var close = document.getElementById('close');
var modal = document.getElementById('nav');
button.addEventListener('click', function (event) {
    event.preventDefault();
    nav.style.display = 'block';
});
close.addEventListener('click', function (event) {
    event.preventDefault();
    nav.style.display = 'none';
});