let title = document.querySelector('.brand-card');
let album = document.querySelectorAll('.album');

const observer = new IntersectionObserver(entry => {
    entry.forEach(entri =>{
        if(entri.isIntersecting){
            entri.target.classList.add('visibleTexto');
        }else{
            entri.target.classList.remove('visibleTexto');
            
        }
    });    
});
observer.observe(title);

const observer2 = new IntersectionObserver(entry => {
    entry.forEach(entri =>{
        if(entri.isIntersecting){
            entri.target.classList.add('visibleAlbum');
        }else{
            entri.target.classList.remove('visibleAlbum');
            
        }
    });    
});
album.forEach(anim =>{
    observer2.observe(anim);
})

