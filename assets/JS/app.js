$(function() {
    var header = $("#header"),
        introH=$("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    /*Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId=$this.data('scroll'), 
            blockOffset= $(blockId).offset().top; 

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
});