$(function() {

    /*SCROLL*/
    
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockOfset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        setTimeout (function() {
            $("#nav").removeClass("show");
        }, 500);
        

        $("html, body").animate({
            scrollTop: blockOfset
        }, 500);
    })

})
;

$(function() {

    // burger

    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    });
 

});

$(function() {

    // FILTER

    let filter = $("[data-filter]");

    filter.on("click", function(event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if(cat == 'all') {
            $('[data-cat]').removeClass("hide");
        } else {
            $("[data-cat]").each(function(){
                let workCat = $(this).data('cat');
                
                if(workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            })
        }
    });

});

$(function() {

    // modal

    let modalCall = $("[data-modal]");
    let modalClose = $("[data-close]");

    modalCall.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
            transform: "rotateX(0deg)"
            });
        }, 200);

        $('#worksSlider').slick('setPosition');

    });

    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modals');

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });


    $(".modals").on("click", function(event) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
        transform: "rotateX(90deg)"
        });

        setTimeout(function(){
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
    
});

// https://kenwheeler.github.io/slick/

$('[data-slider = "slick"]').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true,
  });

  $(".slickPrev").on("click", function(event) {
      event.preventDefault;

      let currentSlider = 
      $(this).parents(".modals").find('[data-slider = "slick"]');

      currentSlider.slick("slickPrev");
  })

  $(".slickNext").on("click", function(event) {
    event.preventDefault;

    let currentSlider = 
    $(this).parents(".modals").find('[data-slider = "slick"]');

    currentSlider.slick("slickNext");
});

