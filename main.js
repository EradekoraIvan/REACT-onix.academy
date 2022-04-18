//like//
const like = document.getElementsByClassName("like");

Array.from(like).forEach(item => {
    item.addEventListener('click', ()=>{
        item.classList.toggle('like_active')
    })
});
//like//