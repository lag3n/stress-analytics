const expandBtn = document.getElementById('expandBtn');
const form = document.querySelector('.form');

expandBtn.addEventListener('click', () => {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});