
    // var inDiv=$(".innerDiv");
    // inDiv.mouseenter(function () {
    //     inDiv.append("<img id='play' src='img/play.png' style='width: 64px;margin:140px auto'>");
    //     // inDiv.append("nnn");
    // });
    // inDiv.mouseleave(function () {
    //     // inDiv.remove("<img src='img/play.png' style='width: 64px;margin:140px auto'>");
    //     // inDiv.append("remove!")
    //     $("#play").remove();
    // })

  /*  $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        // console.log(scroll);
        $("header").css({
            opacity: 0.5 + (scroll/200)
        });
    });*/
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      // console.log(scroll);
        $(".text").css('opacity',0.9-scroll/200);
        // $(".kexieintro").css('background-position','center '+'-'+scroll*0.2+'px');
  });
  function gogo() {
      var scroll = $(window).scrollTop();
      scroll=100+'vh';
  }

  /* 创意+1部分*/
   $(document).ready(function () {
        $('.text').animate({'opacity':'0.9'},'slow');
        // $(".bg").click(function (e) {
        //     e=e||window.event;
        //     var x=e.clientX;
        //     var y=e.clientY;
        //     console.log(x);
        //     $(".txt").addClass(".aftxt");
        //     $(".aftxt").css({top:x+'px',width:y+'px',visibility:'visible'});
        // });
        var bg=$(".mainContent");
        var bgg=$(".bgg");
        var cont=$('.content');
        var num=1;

        bg.click(function (e) {
            var x=e.pageX;
            var y=e.pageY;
            var cyT;

            switch (num){
                case 1:cyT="创意力+1";break;
                case 2:cyT="生命力+1";break;
                case 3:cyT="勇敢力+1";break;
                case 4:cyT="判断力+1";break;
                case 5:cyT="男友力+1";break;
            }
            num++;
            if (num==6){
                num=1;
            }


            bgg.append("<div class='text-center cy_txt'>"+cyT+"</div>");

            // console.log(x);
            var txt=$(".cy_txt");
            // $(".bgg").css()
            txt.css({'visibility':'visible','top':y+'px','left':x-20+'px'});
            txt.animate({'top':y-50+'px',"opacity":0});
            setTimeout(function () {
                bgg.find(".cy_txt").remove();
            },1000)
        });

        /*    pic  show */


       var index=1;
       var mod=$('.show1');
       var picNum1=4;

       $('.close').click(function () {
           mod.css("display","none");
           mod2.css("display","none");
           mod3.css("display","none");
           mod4.css("display","none");
           mod5.css("display","none");
           mod6.css("display","none");
           mod7.css("display","none");
       });
       $('.switch1').click(function () {
           mod.css("display","block");
           showPic(index);
           // bigImg.style.border='1px solid #ff0000';
           // [0].css('border','1px solid #ff0000');
           // bigImg[index-1].css('display','block');
       });
       // showPic(1);

       $('.next').click(function () {

           index+=1;
           showPic(index);

           if(index==picNum1)index=0;

       });
       $('.prev').click(function () {
           index-=1;
           if(index==0)index=picNum1;
           showPic(index);

       });


       $('.bi1').click(function () {
           showPic(1);
       });

       $('.bi2').click(function () {
           showPic(2);
       });

       $('.bi3').click(function () {
           showPic(3);
       });

       $('.bi4').click(function () {
           showPic(4);
       });

       function showPic(n) {
           var a=1;
           // alert(bigImg);
           // alert(bigImg[n-1]+"sasa");
           // alert(bigImg.length);

           for(a;a<=picNum1;a++){

               if(a!=n){
                   $('.im'+a).css('display','none');
                   $('.bi'+a).css('opacity',0.6);
               }else {
                   $('.im'+a).css('display','block');
                   $('.bi'+a).css('opacity',1);
               }


           }

       }

       var mod2=$('.show2');
       // var picNum2=4;


       $('.switch2').click(function () {
           mod2.css("display","block");
		   index=1;
           showPic(index);
           // bigImg.style.border='1px solid #ff0000';
           // [0].css('border','1px solid #ff0000');
           // bigImg[index-1].css('display','block');
       });

       var mod3=$('.show3');
       // var picNum2=4;


       $('.switch3').click(function () {
           mod3.css("display","block");
		   index=1;
           showPic(index);
           // bigImg.style.border='1px solid #ff0000';
           // [0].css('border','1px solid #ff0000');
           // bigImg[index-1].css('display','block');
       });
        var mod4=$('.show4');
        // var picNum2=4;
       
       
        $('.switch4').click(function () {
            mod4.css("display","block");
			index=1;
            showPic(index);
            // bigImg.style.border='1px solid #ff0000';
            // [0].css('border','1px solid #ff0000');
            // bigImg[index-1].css('display','block');
        });
	   var mod5=$('.show5');
        // var picNum2=4;
       
       
        $('.switch5').click(function () {
            mod5.css("display","block");
            showPic(index);
            // bigImg.style.border='1px solid #ff0000';
            // [0].css('border','1px solid #ff0000');
            // bigImg[index-1].css('display','block');
        });
	   var mod6=$('.show6');
        // var picNum2=4;
       
       
        $('.switch6').click(function () {
            mod6.css("display","block");
			index=1;
            showPic(index);
            // bigImg.style.border='1px solid #ff0000';
            // [0].css('border','1px solid #ff0000');
            // bigImg[index-1].css('display','block');
        });
	   var mod7=$('.show7');
        // var picNum2=4;
       
       
        $('.switch7').click(function () {
            mod7.css("display","block");
			index=1;
            showPic(index);
            // bigImg.style.border='1px solid #ff0000';
            // [0].css('border','1px solid #ff0000');
            // bigImg[index-1].css('display','block');
        });
       // showPic(1);


















        });/*ready end*/







       $(window).scroll(function () {
           var scrollh=$(window).scrollTop();
            if(scrollh>600){
                $(".navv").css({'opacity':'1','position':'fixed','background-color': 'rgba(73, 137, 222, 1)'});
            }else {
                $(".navv").css({'opacity':'0.8','position':'absolute','background-color': 'rgba(73, 137, 222, 0.5)'});

            }
       });

       function aa() {
           scrollTo('#maincon',1000)
       }

    function scrollTo(ele, speed){
        if(!speed) speed = 300;
        if(!ele){
            $("html,body").animate({scrollTop:0},speed);
        }else{
            if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
        }
        return false;
    }





