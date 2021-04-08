const adding = document.querySelector('.container');
const mainpage = document.querySelector('.main-page');
const searching = document.querySelector('.searching');

document.querySelector('.add').addEventListener('click', (e) => {
    adding.classList.remove('hidden');
    searching.classList.add('hidden');
    mainpage.classList.add('hidden');
})

document.querySelector('.search').addEventListener('click', (e) => {
    searching.classList.remove('hidden');
    adding.classList.add('hidden');
    mainpage.classList.add('hidden');
})

document.querySelector('.back1').addEventListener('click', ()=>{
    searching.classList.add('hidden');
    adding.classList.add('hidden');
    mainpage.classList.remove('hidden');
})

document.querySelector('.back2').addEventListener('click', ()=>{
    searching.classList.add('hidden');
    adding.classList.add('hidden');
    mainpage.classList.remove('hidden');
})