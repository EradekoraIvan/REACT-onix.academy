const tabs = document.getElementById("tabs"),
      content = document.querySelectorAll(".content");


    const chengeClass = el => {
        for(let i = 0; i < tabs.children.length; i++) {
            tabs.children[i].classList.remove('active');
            
        }
        el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    chengeClass(e.target);
    for(let i=0; i < content.length; i++) {
        content[i].classList.remove('active');
        if(content[i].dataset.content === currTab) {
            content[i].classList.add('active');
        }
    }
})

