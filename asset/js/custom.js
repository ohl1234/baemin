$(function(){

    ScrollTrigger.saveStyles('.sc-visual,.sc-visual .gradient-txt2,.sc-you .thumb-box,.sc-you .group-flex1,.sc-app,.paragraph-wrap1,.paragraph-wrap2,.sc-feature .bar-center,.sc-together .group-flex3')

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
            /**
             * sc-visual
             */
            gsap.to('.sc-visual .thumb-area',{
                scrollTrigger:{
                    trigger:".sc-visual",
                    start:"top top",
                    end:"bottom top",
                    scrub:0,
                    ease:'none'
                },
                yPercent:250,

            }) 

             /**
             * sc-app
             */
            appMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-app',
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1,
                    //markers:true
                }
            })
            appMotion.addLabel('a')
            .fromTo('.sc-app .device-item.item1',{yPercent:-100},{yPercent:100},'a') 
            .fromTo('.sc-app .device-item.item2',{yPercent:100},{yPercent:-100},'a') 
            .fromTo('.sc-app .device-item.item3',{yPercent:-100},{yPercent:100,
                scrollTrigger:{
                    trigger:'.sc-app',
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1,
                }
            },'a')

            $('[data-parallex]').each(function(i,el){
                parent = $(this).parents('.device-item');
                gsap.to(el,{
                    scrollTrigger:{
                        trigger:parent,
                        start:"top bottom", 
                        end:"bottom top",
                        scrub:1,
                        duration:3
                    },
                    yPercent:-8
                })
            })
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

                /**
                 * sc-visual
                 */
                gsap.to('.sc-visual .thumb-area',{
                    scrollTrigger:{
                        trigger:".sc-visual",
                        start:"top top",
                        end:"bottom top",
                        scrub:0,
                        ease:'none'
                    },
                    yPercent:-70,

                }) 


             /**
             * sc-app
             */
            appMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-app',
                    start:"top bottom",
                    end:"bottom top",
                    scrub:1,
                    //markers:true
                }
            })
            appMotion.addLabel('a')
            .fromTo('.sc-app .device-item.item1',{yPercent:-2},{yPercent:2},'a') // -100 -> 100
            .fromTo('.sc-app .device-item.item2',{yPercent:-3},{yPercent:3},'a') // 100 -> -100
            .fromTo('.sc-app .device-item.item3',{yPercent:-4},{yPercent:4,
                scrollTrigger:{
                    trigger:'.sc-app',
                    start:"top bottom",
                    end:"bottom top",
                    scrub:3,
                }
            },'a') // -100 -> 100

            $('[data-parallex]').each(function(i,el){
                parent = $(this).parents('.device-item');
                gsap.to(el,{
                    scrollTrigger:{
                        trigger:parent,
                        start:"top bottom", 
                        end:"bottom top",
                        scrub:1,
                        duration:3
                    },
                    yPercent:-8
                })
            })
        },
        // all
        "all": function() {
            /**
             * sc-visual
             */
            textMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-visual .gradient-txt2',
                    start:'top 80%',
                    end:'150% -100%',
                    scrub:1
                }
            })
            textMotion.addLabel('a')
            .to('.sc-visual .gradient-txt2',{xPercent:50, duration:2, scrub:1},'a')
            .to('.sc-visual .gradient-txt3',{ xPercent:-100, duration:2, scrub:1},'a')
            .to('.sc-visual .gradient-txt4',{ xPercent:50, duration:2, scrub:1},'a')
            //line 추가
            .from('.sc-visual .gradient-line6 .guage',{width:"0%",duration:2},'a-=0.1')
            .from('.sc-visual .gradient-line1 .guage',{width:"0%",duration:2},'a+=0.3')
            .from('.sc-visual .gradient-line2 .guage',{width:"0%",duration:2},'a+=0.5')
            .from('.sc-visual .gradient-line3 .guage',{width:"0%",duration:2},'a+=0.7')
            .from('.sc-visual .gradient-line4 .guage',{width:"0%",duration:2},'a+=0.9')

            /**
             * sc-you
             */
            gsap.set('.sc-you .sc-title',{yPercent:150})
            gsap.to('.sc-you .sc-title',{
                scrollTrigger:{
                    trigger:".sc-you .thumb-box",
                    start:'top 60%',
                    end:'bottom top',
                    //markers:true,
                    scrub:1
                },
                yPercent:-150,
                duration:3,
            })

            lineMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-you .group-flex1',
                    start:'top bottom',
                    end:'150% -50%',
                    scrub:1
                }
            })
            lineMotion.addLabel('a')
            .from('.sc-you .gradient-line2 .guage',{width:"0%",duration:1},'a-=0.1')
            .from('.sc-you .gradient-line1 .guage',{width:"0%",duration:1},'a+=0.2')
            .from('.sc-you .gradient-line3 .guage',{width:"0%",duration:1},'a+=0.3')
            .from('.sc-you .gradient-line5 .guage',{width:"0%",duration:1},'a+=0.4')
            .from('.sc-you .gradient-line4 .guage',{width:"0%",duration:1},'a+=0.5')

            /**
             * sc-paragraph
             */
            gsap.set('.sc-paragraph .vt-line',{height:0})
            // $('.sc-paragraph').find('div').each(function(i,el){
            //     child = $(this).find('.vt-line')
            //     gsap.to(child,{
            //         scrollTrigger:{
            //             trigger:el,
            //             start:'top 80%',
            //             end:'bottom top',
            //             scrub:0,
            //             ease:'none',
            //             //markers:true,
            //             stagger:0.2
            //         },
            //         height:"100%"
            //     })
            // })
            gsap.to('.paragraph-wrap1 .top .vt-line',{
                scrollTrigger:{
                    trigger:'.paragraph-wrap1',
                    start:'top 90%',
                    end:'bottom top',
                    scrub:0,
                    ease:'none',
                    //markers:true,
                    stagger:0.2
                },
                height:'100%',
                delay:0.1
            })
            gsap.to('.paragraph-wrap1 .bottom .vt-line',{
                scrollTrigger:{
                    trigger:'.paragraph-wrap1',
                    start:'bottom bottom',
                    end:'30% top',
                    scrub:0,
                    ease:'none',
                    //markers:true,
                    stagger:0.2
                },
                height:'100%',
                delay:0.2
            })
            gsap.to('.paragraph-wrap2 .top .vt-line',{
                scrollTrigger:{
                    trigger:'.paragraph-wrap2',
                    start:'15% bottom',
                    end:'20% top',
                    scrub:0,
                    ease:'none',
                    //markers:true,
                    stagger:0.2
                },
                height:'100%',
                delay:0.3
            })
            gsap.to('.paragraph-wrap2 .bottom .vt-line',{
                scrollTrigger:{
                    trigger:'.paragraph-wrap2',
                    start:'bottom bottom',
                    end:'bottom top',
                    scrub:0,
                    ease:'none',
                    //markers:true,
                    stagger:0.2
                },
                height:'100%',
                delay:0.4
            })
            /**
             * sc-feature
             */
            gsap.set('.sc-feature .bar',{width:'0%'})
            $('.sc-feature .bar-center').each(function(i,el){
                child = $(this).find('.bar')
                
                gsap.to(child,{
                    scrollTrigger:{
                        trigger:el,
                        start: 'top 100%',
                        end: 'bottom top',
                        scrub:0,
                        ease:'none'
                    },
                    width:'97%'
                })
            })

            // lineMotion3 = gsap.timeline({
            //     scrollTrigger:{
            //         trigger:'.sc-together .group-flex3',
            //         start:'top bottom',
            //         end:'150% -50%',
            //         scrub:1
            //     }
            // })
            // lineMotion3.addLabel('a')
            // .from('.sc-together .gradient-line2 .guage',{width:'0%',duration:1},'a-=0.1')
            // .from('.sc-together .gradient-line1 .guage',{width:'0%',duration:1},'a+=0.2')
            // .from('.sc-together .gradient-line3 .guage',{width:'0%',duration:1},'a+=0.3')
            // .from('.sc-together .gradient-line5 .guage',{width:'0%',duration:1},'a+=0.4')
            // .from('.sc-together .gradient-line4 .guage',{width:'0%',duration:1},'a+=0.5')
        }
    });
})