// const firstBtn = document.getElementById('btn');

// const hyouji = document.getElementById('text');

// firstBtn.addEventListener('click',()=>{
//     hyouji.textContent = 'ボタンをクリックしました';
// })
const pushBtn = document.getElementById('btn');
const textClick = document.getElementById('text');


pushBtn.addEventListener('click', () => {
    setTimeout(() => {

    textClick.textContent = 'ボタンをクリックしました';

}, 2000);
});
