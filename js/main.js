$(document).ready(function(){
    $("body").backstretch($("#intro").data('imgbg'));

    $('#getting-started').countdown('2016/09/10', function(event) {
        var $this = $(this).html(event.strftime(''
        + '<div class="timelement"><span class="timer">%D</span> <span>jours</span></div> '
        + '<div class="timelement"><span class="timer">%H</span> <span>hr</span></div> '
        + '<div class="timelement"><span class="timer">%M</span> <span>min</span></div> '
        + '<div class="timelement"><span class="timer">%S</span> <span>sec</span></div>'));
    });
});