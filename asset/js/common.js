$(function(){
    // intro ani
    gsap.set('.loading .loading-thumb',{xPercent:1000})
    const introAni = gsap.timeline({})
    introAni.addLabel('a')
    .to('.loading .loading-thumb',{xPercent:-10,duration:3},'a')
    .from('.loading .loading-txt',{opacity:0,duration:1,delay:3},'a')
    .to('.loading',{opacity:0,delay:5,duration:1,display:'none'},'a')

    ScrollTrigger.matchMedia({
        // pc
        "(min-width: 992px)": function() {
        introAni.addLabel('b')
        .from('.sc-visual .sc-title .tit-msg',{opacity:0, yPercent:103, stagger:0.2,duration:0.6},'b-=0.4')
        .from('.sc-visual .thumb-area',{top:"-70%",duration:1},'b-=0.4') // top컨트롤
        .from('.header',{opacity:0,duration:1.2},'b-=0.4')
        },

          // laptop
        "(max-width: 991px)": function() {
        /**
         * intro
         */
        introAni.addLabel('b')
        .from('.sc-visual .thumb-area',{transform:"translateY(-120%)",duration:1},'b-=0.4') // top컨트롤
        .from('.header',{opacity:0,duration:1.2},'b-=0.4') 
        }
    });

    // header event
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        const footerHere = $('.footer').offset().top; 

        if(curr >= footerHere - 100){
            $('.header').css('opacity','0');
        }else{
            $('.header').css('opacity','1');
        }
    })

})