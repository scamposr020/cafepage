function initMap(){
    const loc = {lat: 9.9368737, lng: -84.068685};
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 18, center: loc });
    const marker = new google.maps.Marker({ position: loc, map: map});
}

//Sticky menu background
  window.addEventListener('scroll', function() {
    if(window.scrollY > 150){
        document.querySelector('#navbar').style.opacity =0.8;
        
    } else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){

    if(this.hash != ''){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }

});