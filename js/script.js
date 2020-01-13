$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false
});


let img = document.querySelector('#imgHover');
img.addEventListener('mouseover', function() {
    mysetint(40, "play icon2.png",1);
    // img.setAttribute('src','play icon2.png') ;   
})
img.addEventListener('mouseout', function () {
    // img.setAttribute('src', 'play icon.png');
    mysetint(40, 'play icon.png', 0,);
})
img.addEventListener('click', function () {
    alert('Видео не доступно! и так жирно))0)');
})

function mysetint(a,b,i) {
    let timer = setTimeout(() => {
        if(img.getAttribute('src')===b) return false;
        i-=0.2;
        img.style.opacity = `${i}`;
        
        if(i <= 0) {
            clearTimeout(timer);
            img.setAttribute('src', b);
            img.style.opacity = 1;
        }
        else mysetint(a, b, i);
    }, a); 
}
