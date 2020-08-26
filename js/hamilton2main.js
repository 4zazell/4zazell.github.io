$(function(){
    $('h2:eq(1)').css('color', '#0058a9');
    $('h2:eq(1)').css('font-size', '20px');
    $('h2:eq(1)').css('margin-top', '30px');
    



    let scrollPos = $(window).scrollTop();
    let introID = $("#introID");
    let feedbackID = $('#feedbackID');
    let numbersID = $('#numbersID');
    let introH = introID.innerHeight();
    let introW = introID.width();
    let fbOffsetTop = $('#feedbackID').offset().top;
    let numberOffset = $('#numbersID').offset().top;
    console.log(fbOffsetTop);

    //Carts
    let cartID = $('div#cartID');

    //carts();
/*    
    function carts() {
        let cart1 = (introW - 40)/5;
        let cart2 = 5;

        for (let i = 0; i <=4; i++) {
            x = introW - cart1 * cart2;
            cartID.eq(i).css('opacity', '' + 1/(i+1) + '');
            cartID.eq(i).css('z-index', '-' + i + '').css('transform', 'translate3d(' + x + 'px, 0px, -' + i * 40 + 'px)');
            cart2--;
        }
    }*/

    $('[data-focus]').mouseover(function(){
        let c = $(this).data('focus');

        cartID.eq(c).css('opacity','1').css('z-index','-1').css('transform','translateZ(0px)');

        let f1 = 1,
            f2 = 1;

        for (let i = c - 1; i >= 0; i--) {
            f1++;
            cartID.eq(i).css('opacity', '' + 1/(f1+1) + '');
            cartID.eq(i).css('z-index', '-' + f1 + '').css('transform', 'translateZ(-' + f1 * 40 + 'px)');
        }

        for (let i = c + 1; i < 5; i++) {
            f2++;
            cartID.eq(i).css('opacity', '' + 1/(f2+1) + '');
            cartID.eq(i).css('z-index', '-' + f2 + '').css('transform', 'translateZ(-' + f2 * 40 + 'px)');
        }
    });



    //FeedBack

    feedbackPosition();

    function feedbackPosition() {

        $('div.feedback__images:eq(1)').css('transform', 'scaleX(-1)');
        let a = 2;
        let b = 4;
        const positionArray = [ 0, 0.25, 0.75, 1, 0.5, 0, 1, 0.5];
        let posY;

        for (let i = 0; i < positionArray.length; i++) {

            posY = positionArray[i];
            b++;
            a++; 
            
            let x = i * b * 2;
            let y = posY * 200 + 50;
            s = a / 10;
            
            //console.log("x = " + x + "\t y = " + y + "\t s = " + s + "\t a = " + a + "\t scaleSum = " + s);
            $('div#btnFeedbackImg:eq(' + i + ')').css('transform',' translate(' + x + 'px, ' + y + 'px) scale(' + s + '');
            $('div#btnFeedbackImg2:eq(' + i + ')').css('transform',' translate(' + x + 'px, ' + y + 'px) scale(' + s + '');
        }
            
    }

    slick();
    $('#slickBtnF').css('opacity','0');

    function slick() {

        $('div#feedbackItemID:not(div#feedbackItemID:eq(0))').addClass('feedback__right');
        let i = 0;
        
        $('#slickBtnF').on('click', function() {
            i--;
            $('div#feedbackItemID:eq('+ i + ')').removeClass('feedback__left');
            $('div#feedbackItemID:eq('+ i + ')').addClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i + 1) + ')').removeClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i + 1) + ')').addClass('feedback__right');

            btnOpacity();
        });

        $('#slickBtnS').on('click', function() {
            i++;
            $('div#feedbackItemID:eq('+ i + ')').removeClass('feedback__right');
            $('div#feedbackItemID:eq('+ i + ')').addClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i - 1) + ')').removeClass('feedback__middle');
            $('div#feedbackItemID:eq('+ (i - 1) + ')').addClass('feedback__left');

            btnOpacity();
        });

        $('[data-slick]').on('click', function(){
            let elementSlick = $(this).data('slick');

            if (i >= elementSlick) {
                for (i; i >= elementSlick; i--) {
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__left');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__right');
                    console.log(i);
                }

                $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__left');
                $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                console.log(i);

            } else if (i < elementSlick) {
                elementSlick = elementSlick - 2;

                for (i; i <= elementSlick; i++) {
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__right');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__middle');
                    $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__left');
                }

                $('div#feedbackItemID:eq(' + i + ')').removeClass('feedback__right');
                $('div#feedbackItemID:eq(' + i + ')').addClass('feedback__middle');
            }

            btnOpacity();
        });

        function btnOpacity() {
            if (i == 7) {
                $('#slickBtnS').css('opacity', '0');
                $('#slickBtnF').css('opacity', '1');
            } else if ( i == 0) {
                $('#slickBtnF').css('opacity', '0');
                $('#slickBtnS').css('opacity', '1');
            } else {
                $('#slickBtnS').css('opacity', '1');
                $('#slickBtnF').css('opacity', '1');
            }
        }

    }

    //Canv create

    let canv = document.createElement('canvas');
    canv.className = 'wave__canvas';
    canv.id = 'waveID';
    let ctx = canv.getContext('2d');

    canv.width = introW;
    canv.height = introH;

    let a = 1,
        b = window.innerHeight / 2,
        c = 0,
        d = 250;

    $(window).on('load', function(){
        scrollPos = $(this).scrollTop()
        console.log(scrollPos + " " + numberOffset + " " + fbOffsetTop + " " + introH);
        if(scrollPos < numberOffset) {
            introID.append(canv);
        } else if (scrollPos >= numberOffset && scrollPos < fbOffsetTop) {
            numbersID.append(canv);
        } else if (scrollPos >= fbOffsetTop) {
            feedbackID.append(canv);
        }
    });


    //Scroll

    let canvOffsetTop;

    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        navigation(scrollPos);
        if (scrollPos >= stepsOffset) {
            stepShow();
        }
        canvOffsetTop = $('#waveID').offset().top;
        appendCanv(scrollPos, canvOffsetTop);
    });

    function navigation(scrollPos) {
        let nav = $("#navigationID");

        if (scrollPos >= introH) {
            nav.css('right', '1em')
        } else {
            nav.css('right', '-6em')
        }

        if (scrollPos >= 0 && scrollPos < introH) {
            $('div#navBtn:eq(0)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(0))').removeClass("nav__active");
        } else if (scrollPos >= introH && scrollPos < introH * 2) {
            $('div#navBtn:eq(1)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(1))').removeClass("nav__active");
        } else if (scrollPos >= introH * 2 && scrollPos < introH * 3) {
            $('div#navBtn:eq(2)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(2))').removeClass("nav__active");
        } else if (scrollPos >= introH * 3 && scrollPos < introH * 4) {
            $('div#navBtn:eq(3)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(3))').removeClass("nav__active");
        } else if (scrollPos >= introH * 4 && scrollPos < introH * 5) {
            $('div#navBtn:eq(4)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(4))').removeClass("nav__active");
        } else if (scrollPos >= introH * 5 && scrollPos < introH * 6) {
            $('div#navBtn:eq(5)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(5))').removeClass("nav__active");
        } else if (scrollPos >= introH * 6 && scrollPos < introH * 7) {
            $('div#navBtn:eq(6)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(6))').removeClass("nav__active");
        } else if (scrollPos >= introH * 7 + 30 && scrollPos < introH * 8) {
            $('div#navBtn:eq(7)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(7))').removeClass("nav__active");
        } else if (scrollPos >= introH * 8) {
            $('div#navBtn:eq(8)').addClass("nav__active");
            $('div#navBtn:not(div#navBtn:eq(8))').removeClass("nav__active");
        }


    }

    $("[data-scroll]").on('click', function(){

        let elementID = $(this).data('scroll');
        let elementOffset = $(elementID).offset().top;

        console.log(elementOffset);

        $('html, body').animate({scrollTop: elementOffset + 10}, 700);
            
    });

    $('#scrollToLogin').on('click', function(){
        let registrationOffset = $("#registrationID").offset().top;

        $('html, body').animate({scrollTop: registrationOffset + 10}, 700);

        $('#inputName').focus();

    });


    //Registration

    let inputName = $('#inputName');
    let inputEmail = $('#inputEmail');
    let inputPassword = $('#inputPassword');
    let inputCheckbox = $('input:checkbox');

    inputName.on('keyup change', function(){
        if(event.keyCode == 13) {
            $('#inputEmail').focus();
        }

        if (inputName.val().length > 0) {
            inputName.css('border', '3px solid #dbdbdb');
        }
    });
    
    $('#inputEmail').on('keyup change', function(){
        if(event.keyCode == 13) {
            $('#inputPassword').focus();
        }

        if (inputEmail.val().length > 0) {
            inputEmail.css('border', '3px solid #dbdbdb');
        }
    });

    $('#inputPassword').on('keyup change', function(){
        if (inputPassword.val().length > 0) {
            inputPassword.css('border', '3px solid #dbdbdb');
        }
    });

    $('#inputLogin').on('click', function() {
        if(inputName.val().length < 1) {
            inputName.css('border', '3px solid red');
        } if (inputEmail.val().length < 1) {
            inputEmail.css('border', '3px solid red');
        } if (inputPassword.val().length < 1) {
            inputPassword.css('border', '3px solid red');
        }
        if (!inputCheckbox.cheked) {
            inputCheckbox.css('border', '2px solid red');
        }
    });
    

    //Steps

    stepsY();

    function stepsY() {
        let posY = [170, 180, 75, -40, -10, -85];
        let elementStep = $('div#subStepID');
        let y;

        for(let i = 0; i < posY.length; i++) {
            y = posY[i];
            elementStep.eq(i).css('transform','translateY(' + y + 'px)');
        }
    }

    let stepsOffset = $('#stepsID').offset().top;

    function stepShow() {
        let elementStep = $('div#subStepID');
        let i = 0;
        
        for (i; i < 6; i++){
            elementStep.eq(i).animate({
                'opacity': '1'
            },((i + 1) * 2) * 2000);
            
        }
        
    }


    //Numbers

    numbersDisplay();
    function numbersDisplay() {
        
        let subNumber = $('div#subNumberID');
        
        let y;

        let numberPosY = [186, 19, 168, 117, 47]

        for (let i = 0; i < numberPosY.length; i++) {
            y = numberPosY[i];
            subNumber.eq(i).css('transform','translateY(' + y + 'px)');
        }

        subNumber.eq(5).css('transform','translate(-40px, 206px)');
    }


    let n1 = 0,
        n2 = 0,
        n3 = 0,
        n4 = 0,
        n5 = 0,
        n6 = 0;
    function numberPlus() {

        

        let numberSumDiv = $('div#numberSum');
        numberSumDiv.css('font-size', '1.75em').css('color','#ffffff').css('font-family','Akrobat_Black').css('text-align','center');
        let numberSumSpan = $('span#numberSum');
        numberSumSpan.css('color','#ffffff');

        if (n1!=210) {
            n1++;
            numberSumDiv.eq(0).text(n1);
            numberSumSpan.eq(0).text(n1) ;       
        } 
        if (n2<=103932) {
            n2 = n2 + 111;
            numberSumDiv.eq(1).text(n2);
            numberSumSpan.eq(1).text(n2);  
        }
        if (n3!=340) {
            n3++;
            numberSumDiv.eq(2).text(n3);
            numberSumSpan.eq(2).text(n3);  
        }
        if (n4!=450) {
            n4++;
            numberSumDiv.eq(3).text(n4);
            numberSumSpan.eq(3).text(n4);  
        }
        if (n5!=842) {
            n5++;
            numberSumDiv.eq(4).text(n5);
            numberSumSpan.eq(4).text(n5);  
        }
        if (n6!=230) {
            n6++;
            numberSumDiv.eq(5).text(n6);
            numberSumSpan.eq(5).text(n6);  
        }
            
    }

    let fortraiderOffset = $('#forTraidersID').offset().top;
    console.log(numberOffset + ' = numOFF ' + fortraiderOffset + ' = fortrOFF');

    function abc() {
        scrollPos = scrollPos;
        console.log(scrollPos);
    }

    if(scrollPos >= numberOffset && scrollPos < fortraiderOffset) {
        animate(abc);
    }

    if(scrollPos < introH) {
        animate(abc);
    }

    if(scrollPos >= fbOffsetTop && scrollPos < fbOffsetTop + introH) {
        animate(abc);
    }



    //Canvas

    function draw() {
        a++;
        b--;
        d = d - 0.25;
        c = c + 0.03;

        let x = a * 3,
            y = d - Math.cos(c) * 100 + 100,
            z = b - Math.sin(c + 0.1) * 100 + 100;
            
        ctx.fillStyle = '#f9fcff';
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#eef6fd';
        ctx.beginPath();
        ctx.arc(x, z, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        }

    function secondDraw() {
        a++;
        c = c + 0.03;

        
        let x = a * 3,
            y = b + Math.cos(c) * 100 + 100,
            z = d + Math.sin(c + 0.1) * 100 + 100;

        ctx.fillStyle = 'rgba(189, 233, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(x, y-10, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#ecf5fd';
        ctx.beginPath();
        ctx.arc(x, z, 3, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        
        ctx.fillStyle = 'rgba(189, 233, 255, 0.1)';
        ctx.beginPath();
        ctx.arc(x+20, y+50, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

    }

    function clear() {
        ctx.clearRect(0, 0, canv.width, canv.height);
    }
    
    function appendCanv(scrollPos, canvOffsetTop) {
        
        if (scrollPos >= fbOffsetTop) {
            if (canvOffsetTop < fbOffsetTop) {
                feedbackID.append(canv);
                clear();
                a = 1;
                b = 400;
                c = 0;
                d = 250;
                
            }
        } else if (scrollPos >= numberOffset && scrollPos < fortraiderOffset) {
            if (canvOffsetTop < numberOffset || canvOffsetTop > numberOffset + 500) {
                numbersID.append(canv);
                clear();
                a = 1;
                b = 200;
                c = 0;
                d = 250;
                
            }
        } else if (scrollPos < introH) {
            if (canvOffsetTop > introH) {
                introID.append(canv);
                clear();
                a = 1;
                b = 400;
                c = 0;
                d = 250;
                
            }
        }
    }    

    appendCanv();


    //ReqestAnitationFrame

    if ( !window.requestAnimationFrame ) {

        window.requestAnimationFrame = ( function() {
      
          return window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element ) {
      
            window.setTimeout( callback );
      
          };
      
        })();
    }

    function animate() {
        requestAnimationFrame(animate);

        if(scrollPos >= numberOffset && scrollPos < fortraiderOffset){
            if (n2 < 100000) {
                numberPlus();
            }

            if(a < 600) {
               secondDraw(); 
            }
            
            
        }

        if (scrollPos >= fbOffsetTop && scrollPos < fbOffsetTop + introH){
        
            if(a < 600) {
                secondDraw();
            }
            
        
        }

        if (scrollPos < introH) {
            if(a < 600) {
                draw();
            }
        }

    }

    animate();

    console.log(introW);

});