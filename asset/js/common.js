$(function(){
    ScrollTrigger.matchMedia({
        // pc
        "(min-width: 992px)": function() {
        /**
         * intro
         */
            const introAni2 = gsap.timeline({
            paused:true
            })
            introAni2.addLabel('a')
            .from('.sc-visual .sc-title .tit-msg',{opacity:0, yPercent:103, stagger:0.2,duration:0.6},'a')
            .from('.sc-visual .thumb-area',{top:"-70%",duration:1},'a') // top컨트롤
            .from('.header',{opacity:0,duration:1.2},'a')
        
            gsap.set('.loading .loading-thumb',{xPercent:1000})
            const introAni = gsap.timeline({
                onComplete:function(){
                    introAni2.play();
                }
            })
            introAni.addLabel('a')
            .to('.loading .loading-thumb',{xPercent:-10,duration:3},'a')
            .from('.loading .loading-txt',{opacity:0,duration:1,delay:3},'a')
            .to('.loading',{opacity:0,delay:5,duration:1,display:'none'},'a')
        
        },
          // laptop
        "(max-width: 991px)": function() {
        /**
         * intro
         */
            const introAni2 = gsap.timeline({
                paused:true
            })
            introAni2.addLabel('a')
            .from('.sc-visual .thumb-area',{transform:"translateY(-120%)",duration:1},'a') // top컨트롤
            .from('.header',{opacity:0,duration:1.2},'a')

            gsap.set('.loading .loading-thumb',{xPercent:1000})
            const introAni = gsap.timeline({
                onComplete:function(){
                    introAni2.play();
                }
            })
            introAni.addLabel('a')
            .to('.loading .loading-thumb',{xPercent:-10,duration:3},'a')
            .from('.loading .loading-txt',{opacity:0,duration:1,delay:3},'a')
            .to('.loading',{opacity:0,delay:5,duration:1,display:'none'},'a') 
          
        },
        // all
        "all": function() {

        }
    });
})