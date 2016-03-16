$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$(document).ready(function(){

    $('#map').hide();
    $('.tabs-style-flip nav li').on('click', function(){
        $('#map').hide();
        $('.content-wrap section.content-current').animateCss('fadeIn');
    })

    $('#mapContainer').on('click', function(){
        $('#map').show();
        new Maplace({
            locations: mapPoints,
            map_div: '#gmap-tabs',
            controls_div: '#controls-tabs',
            controls_type: 'list',
            controls_on_map: false,
            show_infowindow: false,
            view_all_text: 'Voir tous',
            start: 1,
            afterShow: function(index, location, marker) {
                $('#info').html(location.html);
            }
        }).Load();
        if( typeof(map) != 'undefined'){
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        }
    })
});



(function() {
    [].slice.call( document.querySelectorAll( '.tabs' ) ).forEach( function( el ) {
        new CBPFWTabs( el );
    });
})();