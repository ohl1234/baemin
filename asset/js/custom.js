$(function(){
    ScrollTrigger.matchMedia({
        // pc
        "(min-width: 992px)": function() {
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
             * sc-visual
             */
                gsap.to('.sc-visual .thumb-area',{
                scrollTrigger:{
                    trigger:".sc-visual",
                    start:"top top",
                    end:"bottom top",
                    scrub:1,
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
                    trigger:'.sc-visual .txt1',
                    start:'top bottom',
                    end:'150% -100%',
                    scrub:1
                }
            })
            textMotion.addLabel('a')
            .to('.sc-visual .txt1',{xPercent:50, duration:2, scrub:1},'a')
            .to('.sc-visual .txt2',{ xPercent:-100, duration:2, scrub:1},'a')
            .to('.sc-visual .txt3',{ xPercent:50, duration:2, scrub:1},'a')
            //line 추가
            .from('.sc-visual .line-ani1 .guage',{width:"0%",duration:2},'a-=0.1')
            .from('.sc-visual .line-ani2 .guage',{width:"0%",duration:2},'a+=0.3')
            .from('.sc-visual .line-ani3 .guage',{width:"0%",duration:2},'a+=0.5')
            .from('.sc-visual .line-ani4 .guage',{width:"0%",duration:2},'a+=0.7')
            .from('.sc-visual .line-ani5 .guage',{width:"0%",duration:2},'a+=0.9')

            /**
             * sc-introduce
             */
            gsap.set('.sc-introduce .sc-title',{yPercent:150})
            gsap.to('.sc-introduce .sc-title',{
                scrollTrigger:{
                    trigger:".sc-introduce",
                    start:'top bottom',
                    end:'bottom top',
                    scrub:1
                },
                yPercent:-150,
                duration:3,
            })

            lineMotion = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-introduce .group-flex1',
                    start:'top top',
                    end:'150% -50%',
                    scrub:1
                }
            })
            lineMotion.addLabel('a')
            .from('.sc-introduce .line-ani1 .guage',{width:"0%",duration:1},'a-=0.1')
            .from('.sc-introduce .line-ani2 .guage',{width:"0%",duration:1},'a+=0.2')
            .from('.sc-introduce .line-ani3 .guage',{width:"0%",duration:1},'a+=0.3')
            .from('.sc-introduce .line-ani4 .guage',{width:"0%",duration:1},'a+=0.4')
            .from('.sc-introduce .line-ani5 .guage',{width:"0%",duration:1},'a+=0.5')

            /**
             * sc-paragraph
             */
            gsap.set('.sc-paragraph .vt-line',{height:0})
            gsap.to('.paragraph-wrap1 .top .vt-line',{
                scrollTrigger:{
                    trigger:'.paragraph-wrap1',
                    start:'top 90%',
                    end:'bottom top',
                    scrub:0,
                    ease:'none',
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
                        scrub:1,
                        ease:'none'
                    },
                    width:'97%'
                })
            })
        }
    });
})