let title = document.querySelector('.brand-card');

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