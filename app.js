//variables
const head = document.getElementById('head');
const head1 = document.getElementById('head1');
const head2 = document.getElementById('head2');
const head3 = document.getElementById('head3');
const head4 = document.getElementById('head4');
const head5 = document.getElementById('head5');
const head6 = document.getElementById('head6');

const paragraph = document.querySelector('#paragraph');
const paragraph1 = document.getElementById('paragraph1');
const paragraph2 = document.querySelector('#paragraph2');
const paragraph3 = document.getElementById('paragraph3');
const paragraph4 = document.getElementById('paragraph4');
const paragraph5 = document.getElementById('paragraph5');

const options1 = document.querySelector('.options1');
const options2 = document.querySelector('.options2');
const options3 = document.querySelector('.options3');
const options4 = document.querySelector('.options4');
const options5 = document.querySelector('.options5');
const options6 = document.querySelector('.options6');
const options7 = document.querySelector('.options7');

const menuBtn = document.getElementById('menu-responsive');
const menuSlide = document.querySelector('.menu-slide');
const exit = document.getElementById('exit');
const body = document.getElementById('body');

//sections: scroll fade effect
setInterval(() => {
    let sumHeight1 = document.getElementById('section1').clientHeight; 
    let sumHeight2 = sumHeight1 + document.getElementById('section2').clientHeight;
    let sumHeight3 = sumHeight2 + document.getElementById('section3').clientHeight;
    let sumHeight4 = sumHeight3 + document.getElementById('section4').clientHeight;
    let sumHeight5 = sumHeight4 +  document.getElementById('section5').clientHeight;
    let sumHeight6 = sumHeight5 + document.getElementById('section6').clientHeight;
    
    //for sections 2 to 6
    function sectionFading(heading, para, sumH) {
        let calibratedHeight = window.scrollY - sumH;
        function sectionFade() {
            if(calibratedHeight > 40 && calibratedHeight < 100) {
                heading.style.opacity = '0';
                para.style.opacity = '0.4';
            } else if(calibratedHeight > 100 && calibratedHeight < 135) {
                para.style.opacity = '0.2';
            }
            else if (calibratedHeight > 135) {
                para.style.opacity = '0';
            }
            
            else if (calibratedHeight < 40) {
                heading.style.opacity = '1';
                para.style.opacity = '1';
            } 

        }
        sectionFade();
    }
    sectionFading(head1, paragraph1, sumHeight1);
    sectionFading(head2, paragraph2, sumHeight2);
    sectionFading(head3, paragraph3, sumHeight3);
    sectionFading(head4, paragraph4, sumHeight4);
    sectionFading(head5, paragraph5, sumHeight5);


    //for section 1
    function forSection1() {
        let scroll = window.scrollY;
    if(scroll > 40 && scroll < 100) {
        head.style.opacity = '0';
        paragraph.style.opacity = '0.4';
    } else if(scroll > 100 && scroll < 135) {
        paragraph.style.opacity = '0.2';
    }
    else if (scroll > 135) {
        paragraph.style.opacity = '0';
    }
    
    else if (scroll < 40) {
        head.style.opacity = '1';
        paragraph.style.opacity = '1';
    } 
    }
    forSection1();

    // for section 7
    function forSection7(head6, sumH) {
        let calibratedHeight = window.scrollY - sumH;
        function section7Fade() {
            if(calibratedHeight > 45 && calibratedHeight < 100) {
                head6.style.opacity = '0';
            } 
            else if (calibratedHeight < 45) {
                head6.style.opacity = '1';
            } 
        }
        section7Fade();

    }
    forSection7(head6,sumHeight6);

}, 20)

//options: scroll fade effect
setInterval(() => {
    let height = window.innerHeight; 
    let calibratedHeight1 =  0;
    let calibratedHeight2 = document.getElementById('section1').clientHeight;
    let calibratedHeight3 = calibratedHeight2 + document.getElementById('section2').clientHeight;
    let calibratedHeight4 = calibratedHeight3 + document.getElementById('section3').clientHeight;  
    let calibratedHeight5 = calibratedHeight4  + document.getElementById('section4').clientHeight;  
    let calibratedHeight6 = calibratedHeight5  + document.getElementById('section5').clientHeight;

    if(height > 600) {

        //for options 1 to 6
            function optionsFading(calibHeight, opt) {
                let scroll = window.scrollY - calibHeight;
                opt.style.transition = '0.3s';

                function optionsFade() {

                        if(scroll > 330 && scroll < 390) {
                            opt.style.opacity = '0.5';
                        } else if(scroll > 390 && scroll < 420) {
                            opt.style.opacity = '0.3';
                        } else if (scroll > 420 && scroll < 430) {
                            opt.style.opacity = '0.1';
                        }else if(scroll > 430){
                            opt.style.opacity = '0';
                        }
                         else if(scroll<330) {
                            opt.style.opacity = '1';
                        }
                }
                optionsFade();
            } 
            optionsFading(calibratedHeight1, options1);
            optionsFading(calibratedHeight2, options2);
            optionsFading(calibratedHeight3, options3);
            optionsFading(calibratedHeight4, options4);
            optionsFading(calibratedHeight5, options5);
            optionsFading(calibratedHeight6, options6); 

            //for options 7
            function forOptions7(calibHeight, opt) {
     
                let scroll1 = window.scrollY  - calibHeight;
                let scroll = document.getElementById('section7').clientHeight - scroll1;
                opt.style.opacity = '0';
                opt.style.transition = '0.3s';
                function options7Fade() {
                    if (scroll > 80) {
                        opt.style.opacity = '0.5';
                    }
                    else if(scroll > -10000 && scroll < 80) {
                      opt.style.opacity = '1';
                    } 
                }
                options7Fade();
             }
            
            forOptions7(calibratedHeight6, options7);
    }
    else {

        //for options 1 to 6 on shorter screens
            function optionsFadingShort(calibHeight, opt) {

                let scroll = window.scrollY - calibHeight;
                opt.style.transition = '0.3s';

                function optionsFade() {

                        if(scroll > 130 && scroll < 190) {
                         opt.style.opacity = '0.5';
                         } else if(scroll > 190 && scroll < 220) {
                            opt.style.opacity = '0.3';
                        } else if (scroll > 220 && scroll < 230) {
                         opt.style.opacity = '0.1';
                        } else if(scroll > 230){
                         opt.style.opacity = '0';
                        } else if(scroll<130) {
                        opt.style.opacity = '1';
                        }
                }
                optionsFade();
            } 
            optionsFadingShort(calibratedHeight1, options1);
            optionsFadingShort(calibratedHeight2, options2);
            optionsFadingShort(calibratedHeight3, options3);
            optionsFadingShort(calibratedHeight4, options4);
            optionsFadingShort(calibratedHeight5, options5);
            optionsFadingShort(calibratedHeight6, options6); 

         //for options 7 on shorter screens
         function forOptions7Short(calibHeight, opt) {
     
            let scroll1 = window.scrollY  - calibHeight;
            let scroll = document.getElementById('section7').clientHeight - scroll1;
            opt.style.opacity = '0';
            opt.style.transition = '0.3s';
            function options7Fade() {
                if (scroll > 10) {
                    opt.style.opacity = '0.5';
                }
                else if(scroll > -10000 && scroll < 80) {
                  opt.style.opacity = '1';
                } 
            }
            options7Fade();
         }
        
        forOptions7Short(calibratedHeight6, options7);
    }

}, 20);

//menu on narrower screens
menuBtn.addEventListener('click', () => {
    menuSlide.classList.add('menu-slide-active');
})

exit.addEventListener('click', () => {
    menuSlide.classList.remove('menu-slide-active');
     body.style.overflowY = 'scroll';
})


