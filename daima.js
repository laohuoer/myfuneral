

document.onreadystatechange = function () {//即在加载的过程中执行下面的代码
    if(document.readyState=="uninitialized"){
        $('.loading').show();
    }

    if(document.readyState=="loading"){
        $('.loading').show();
    }

	if(document.readyState=="complete"){//complete加载完成
        $('.loading').hide()
        $('.first').show()
        $(".main").hide()
        $(".change").hide()
        $(".music").hide()
        $(".map").hide()
        $(".book").hide()
        $("#book-pre").hide()
        $(".jin-1").hide()
        $(".mu-1").hide()
        $(".shui-1").hide()
        $(".huo-1").hide()
        $(".tu-1").hide()
        $(".jinback").hide()
        $(".muback").hide()
        $(".shuiback").hide()
        $(".huoback").hide()
        $(".tuback").hide()
        $("#story1").hide()
        $("#judge1").hide()
        $("#judge2").hide()
        $("#judge3").hide()
        $("#judge4").hide()
        $("#judge5").hide()
        $("#judge6").hide()
        $("#judge7").hide()
        $("#judge8").hide()
        $("#story1-1-next").hide();
        $("#story1-1").hide();
        $("#story1-2-next").hide();
        $("#story1-2").hide();
        $("#story1-3-next").hide();
        $("#story1-3").hide();
        $("#story1-4-next").hide();
        $("#story1-4").hide();
        $("#story1-5-next").hide();
        $("#story1-5").hide();
        $("#story1-6-next").hide();
        $("#story1-6").hide();
        $("#story1-7-next").hide();
        $("#story1-7").hide();
        $("#story1-8-next").hide();
        $("#story1-8").hide();
        $("#story1-9-next").hide();
        $("#story1-9").hide();
        $("#story1-10-next").hide();
        $("#story1-10").hide();
        $("#story1-11-next").hide();
        $("#story1-11").hide();
        $("#story1-12-next").hide();
        $("#story1-12").hide();
        $("#story1-13-next").hide();
        $("#story1-13").hide();
        $("#story1-14-next").hide();
        $("#story1-14").hide();
        $("#story1-15-next").hide();
        $("#story1-15").hide();
        $("#story1-16-next").hide();
        $("#story1-16").hide();
        $("#story1-17-next").hide();
        $("#story1-17").hide();
        $("#story5").hide();
        $("#story5-1-next").hide();
        $("#story5-1").hide();
        $("#story5-2-next").hide();
        $("#story5-2").hide();
        $("#story5-3-next").hide();
        $("#story5-3").hide();
        $("#story5-4-next").hide();
        $("#story5-4").hide();
        $("#story5-5-next").hide();
        $("#story5-5").hide();
        $("#story5-6-next").hide();
        $("#story5-6").hide();
        $("#story5-7-next").hide();
        $("#story5-7").hide();
        $("#story5-8-next").hide();
        $("#story5-8").hide();
        $("#story5-9-next").hide();
        $("#story5-9").hide();
        $("#story5-10-next").hide();
        $("#story5-10").hide();
        $("#story5-11-next").hide();
        $("#story5-11").hide();
        $("#story5-12-next").hide();
        $("#story5-12").hide();
        $("#story5-13-next").hide();
        $("#story5-13").hide();
        $("#story5-14-next").hide();
        $("#story5-14").hide();
        $("#story5-15-next").hide();
        $("#story5-15").hide();
        $("#story5-16-next").hide();
        $("#story5-16").hide();
        $("#story5-17-next").hide();
        $("#story5-17").hide();
        $("#story5-18-next").hide();
        $("#story5-18").hide();
        $("#story5-19-next").hide();
        $("#story5-19").hide();
        $("#story5-20-next").hide();
        $("#story5-20").hide();
        }
    }

/*
let app = new PIXI.Application({ 
    width: 1051.65,      // default: 800
    height: 701.1,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
    
  }
);
app.renderer.backgroundColor = 0x061639
document.body.appendChild(app.view);
*/

var a,b,c;
a = 0;
b = 0;
c = 0;
  var clickthen = new Howl({
    src: ['./clickthen.mp3'],
    autoplay: false,
loop: false,
volume: 0.5,

  });


  var clickitem = new Howl({
    src: ['./clickitem.mp3'],
    autoplay: false,
loop: false,
volume: 0.5,

  });


  var dong = new Howl({
    src: ['./dong.mp3'],
    autoplay: false,
loop: false,
volume: 0.5,

  });

  $("#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8").mouseover(function(){
    dong.play();
},);

/////////////////////////////////



function go1(){
    clickitem.play();
    clickthen.play();
    $('.music').show()
    $("#tag-qingbaozhan").hide()
    $("#shouji").hide()
    $('.change').show()
    setTimeout(function(){$(".first").hide(); $('.main').show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});
TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});


}

/////////////////////////////////

function back1(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$(".main").hide(),
    $('.first').show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});
TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

var bgm = new Howl({
src: [
'bg1.mp3'
],
autoplay: true,
loop: true,
volume: 0.2,
});

/////////////////////////////////

function jingyin(){
bgm.volume(0)
$(".musicon").hide()
$(".musicoff").show()
}

function kaishengyin(){
bgm.volume(0.2)
$(".musicon").show()
$(".musicoff").hide()
}

/////////////////////////////////

function tag1on() {
    $("#tag-qingbaozhan").show()
    $(".chazi1").show()
}

function tag1off() {
    $("#tag-qingbaozhan").hide()
    $(".chazi1").hide()
}

/////////////////////////////////

function taniphonix(){
    $("#shouji").show()
}

function guaniphonix1(){
    $("#shouji").hide()
    $(".iphonix-in2").animate({height:'701.1px'});
    $(".center-xy").css("display","");
    $(".fenghuang").fadeIn(200)
 

}
////////////////////////////////////////////////////////////////////////////////
var inputRange = document.getElementsByClassName('pullee')[0],
    minValue = 0,
    maxValue = 50,
    currValue, rafID;

// set min/max value
inputRange.min = minValue;
inputRange.max = maxValue;

// listen for unlock
inputRange.addEventListener('mouseup', function() {

    currValue = +this.value;

    if (currValue >= maxValue) {
        successHandler();
        rafID = window.requestAnimationFrame(animateHandler);
    } else {
        rafID = window.requestAnimationFrame(animateHandler);
    }
}, false);

// clear raf if trying again
inputRange.addEventListener('mousedown', function() {
    window.cancelAnimationFrame(rafID);
    currValue = +this.value;
}, false);

// handle range animation
function animateHandler() {

    // update input range
    inputRange.value = currValue;

    // decrement value
    currValue--;

    // determine if we need to continue
    if (currValue > -1) {
        window.requestAnimationFrame(animateHandler);
    }
}

// handle successful unlock
function successHandler(){
    $(".iphonix-in2").animate({height:'0px'},"");
    $(".center-xy").css("display","none");
    $(".fenghuang").fadeOut(200)
}

/////////////////////////////////

function tanxunfangtu(){
    $("#huode").hide();
    $("#wancheng").hide();
    clickitem.play();
    clickthen.play();
    $(".music").hide()
    $('.change').show()
    setTimeout(function(){ $('.main').hide()
    $('.map').show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});
    TweenMax.to('.rightchange', 0.5, {
        right:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
    });
   
}

/////////////////////////////////

var drawn = new Howl({
    src: [
    'drawn.wav'
    ],
    autoplay: false,
    loop: false,
    volume: 0.5,
    });
    
    /////////////////////////////////

function a1(){
    a = a + 3;
    document.getElementById("renwushu").innerHTML = a;
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
  
    setTimeout(function(){ $("#a1w").show()},);
    setTimeout(function(){$("#a1w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main1").show()},);
    setTimeout(function(){$("#choice-main1").animate({height:"300px",opacity:"1.0"},200)},);
}

function a2(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
  
    setTimeout(function(){$("#a2w").show()},);
    setTimeout(function(){$("#a2w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main2").show()},);
    setTimeout(function(){$("#choice-main2").animate({height:"300px",opacity:"1.0"},200)},);
}

function a3(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
    setTimeout(function(){$("#a3w").show()},);
    setTimeout(function(){$("#a3w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main3").show()},);
    setTimeout(function(){$("#choice-main3").animate({height:"300px",opacity:"1.0"},200)},);
}

function a4(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
  
    setTimeout(function(){$("#a4w").show()},);
    setTimeout(function(){$("#a4w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main4").show()},);
    setTimeout(function(){$("#choice-main4").animate({height:"300px",opacity:"1.0"},200)},);
}

function a5(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
  
    setTimeout(function(){$("#a5w").show()},);
    setTimeout(function(){$("#a5w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main5").show()},);
    setTimeout(function(){$("#choice-main5").animate({height:"300px",opacity:"1.0"},200)},);
}

function a6(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();
  
    setTimeout(function(){$("#a6w").show()},);
    setTimeout(function(){$("#a6w").animate({height:"312px",opacity:"1.0"})},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main6").show()},);
    setTimeout(function(){$("#choice-main6").animate({height:"300px",opacity:"1.0"},200)},);
}

function a7(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();

    setTimeout(function(){$("#a7w").show()},);
    setTimeout(function(){$("#a7w").animate({height:"312px",opacity:"1.0"},200)},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main7").show()},);
    setTimeout(function(){$("#choice-main7").animate({height:"300px",opacity:"1.0"},200)},);
}

function a8(){
    clickitem.play();
    drawn.play();

    $(".icon-word").animate({height:"0",opacity:"0"},1);
    $(".icon-word").hide();

    setTimeout(function(){$("#a8w").show()},);
    setTimeout(function(){$("#a8w").animate({height:"312px",opacity:"1.0"},200)},);

    $(".choice-main").animate({height:"0",opacity:"0"},1);
    $(".choice-main").hide();

    setTimeout(function(){$("#choice-main8").show()},);
    setTimeout(function(){$("#choice-main8").animate({height:"300px",opacity:"1.0"},200)},);
}

/////////////////////////////////

function a1start(){
    $("#judge1").show()
}
function a2start(){
    $("#judge2").show()
}
function a3start(){
    $("#judge3").show()
}
function a4start(){
    $("#judge4").show()
}
function a5start(){
    $("#judge5").show()
}
function a6start(){
    $("#judge6").show()
}
function a7start(){
    $("#judge7").show()
}
function a8start(){
    $("#judge8").show()
}

/////////////////////////////////

function closejudge1(){
    $("#judge1").hide()
}
function closejudge2(){
    $("#judge2").hide()
}
function closejudge3(){
    $("#judge3").hide()
}
function closejudge4(){
    $("#judge4").hide()
}
function closejudge5(){
    $("#judge5").hide()
}
function closejudge6(){
    $("#judge6").hide()
}
function closejudge7(){
    $("#judge7").hide()
}
function closejudge8(){
    $("#judge8").hide()
}


/////////////////////////////////

function story1go(){
    $("#judge1").hide()
    $(".map").animate({opacity:"0"},1000);
    setTimeout(function(){$(".map").hide()},1000);
    setTimeout(function(){$("#story1").show(),$("#story1-1-next").show(), $("#story1-1").show()},200);
    setTimeout(function(){$("#story1").animate({opacity:1},1000)},1000);
}

function story5go(){
    $("#judge5").hide()
    $(".map").animate({opacity:"0"},1000);
    setTimeout(function(){$(".map").hide()},1000);
    setTimeout(function(){$("#story5").show(),$("#story5-5-next").show(), $("#story5-5").show()},200);
    setTimeout(function(){$("#story5").animate({opacity:1},1000)},1000);
}

/////////////////////////////////////

    function story1next1(){ $("#story1-1-next").hide();$("#story1-1").hide()
    $("#story1-2-next").show();    $("#story1-3").show()
    }function story1next2(){ $("#story1-2-next").hide();$("#story1-2").hide()
    $("#story1-3-next").show();    $("#story1-4").show()
    }function story1next3(){ $("#story1-3-next").hide();$("#story1-3").hide()
    $("#story1-4-next").show();    $("#story1-5").show()
    }function story1next4(){ $("#story1-4-next").hide();$("#story1-4").hide()
    $("#story1-5-next").show();    $("#story1-6").show()
    }function story1next5(){ $("#story1-5-next").hide();$("#story1-5").hide()
    $("#story1-6-next").show();    $("#story1-7").show()
    }function story1next6(){ $("#story1-6-next").hide();$("#story1-6").hide()
    $("#story1-7-next").show();    $("#story1-8").show()
    }function story1next7(){ $("#story1-7-next").hide();$("#story1-7").hide()
    $("#story1-8-next").show();    $("#story1-9").show()
    }function story1next8(){ $("#story1-8-next").hide();$("#story1-8").hide()
    $("#story1-9-next").show();    $("#story1-10").show()
    }function story1next9(){ $("#story1-9-next").hide();$("#story1-9").hide()
    $("#story1-10-next").show();    $("#story1-11").show()
    }function story1next10(){ $("#story1-10-next").hide();$("#story1-10").hide()
    $("#story1-11-next").show();    $("#story1-12").show()
    }function story1next11(){ $("#story1-11-next").hide();$("#story1-11").hide()
    $("#story1-12-next").show();    $("#story1-13").show()
    }function story1next12(){ $("#story1-12-next").hide();$("#story1-12").hide()
    $("#story1-13-next").show();    $("#story1-14").show()
    }function story1next13(){ $("#story1-13-next").hide();$("#story1-13").hide()
    $("#story1-14-next").show();    $("#story1-15").show()
    }function story1next14(){ $("#story1-14-next").hide();$("#story1-14").hide()
    $("#story1-15-next").show();    $("#story1-16").show()
    }function story1next15(){ $("#story1-15-next").hide();$("#story1-15").hide()
    $("#story1-16-next").show();    $("#story1-17").show()
    }function story1next16(){ $("#story1-16-next").hide();$("#story1-16").hide()
    $("#story1-17-next").show();    $("#story1-").show()
    }function story1next17(){ $("#story1-17-next").hide();$("#story1-17").hide()
    $("#story1--next").show();    $("#story1-").show()
    }

    function story5next1(){ $("#story5-1-next").hide();$("#story5-1").hide()
    $("#story5-2-next").show();    $("#story5-2").show()
    }function story5next2(){ $("#story5-2-next").hide();$("#story5-2").hide()
    $("#story5-3-next").show();    $("#story5-3").show()
    }function story5next3(){ $("#story5-3-next").hide();$("#story5-3").hide()
    $("#story5-4-next").show();    $("#story5-4").show()
    }function story5next4(){ $("#story5-4-next").hide();$("#story5-4").hide()
    $("#story5-5-next").show();    $("#story5-5").show()
    }function story5next5(){ $("#story5-5-next").hide();$("#story5-5").hide()
    $("#story5-6-next").show();    $("#story5-6").show()
    }function story5next6(){ $("#story5-6-next").hide();$("#story5-6").hide()
    $("#story5-7-next").show();    $("#story5-7").show()
    }function story5next7(){ $("#story5-7-next").hide();$("#story5-7").hide()
    $("#story5-8-next").show();    $("#story5-8").show()
    }function story5next8(){ $("#story5-8-next").hide();$("#story5-8").hide()
    $("#story5-9-next").show();    $("#story5-9").show()
    }function story5next9(){ $("#story5-9-next").hide();$("#story5-9").hide()
    $("#story5-10-next").show();    $("#story5-10").show()
    }function story5next10(){ $("#story5-10-next").hide();$("#story5-10").hide()
    $("#story5-11-next").show();    $("#story5-11").show()
    }function story5next11(){ $("#story5-11-next").hide();$("#story5-11").hide()
    $("#story5-12-next").show();    $("#story5-12").show()
    }function story5next12(){ $("#story5-12-next").hide();$("#story5-12").hide()
    $("#story5-13-next").show();    $("#story5-13").show()
    }function story5next13(){ $("#story5-13-next").hide();$("#story5-13").hide()
    $("#story5-14-next").show();    $("#story5-14").show()
    }function story5next14(){ $("#story5-14-next").hide();$("#story5-14").hide()
    $("#story5-15-next").show();    $("#story5-15").show()
    }function story5next15(){ $("#story5-15-next").hide();$("#story5-15").hide()
    $("#story5-16-next").show();    $("#story5-16").show()
    }function story5next16(){ $("#story5-16-next").hide();$("#story5-16").hide()
    $("#story5-17-next").show();    $("#story5-17").show()
    }function story5next17(){ $("#story5-17-next").hide();$("#story5-17").hide()
    $("#story5--next").show();    $("#story5-").show()
    }
    
    function songzhong(){
        $("#story5-5").hide()
        $("#story5-7").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-6").show()
    }

    function baosang(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").show()
    }

    function zhaohun(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").show()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }

    function diaoyan(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").show()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }

    function rulian(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").show()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }

    function qiling(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").show()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }
    
    function songsang(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").show()
        $("#story5-13").hide()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }

    function xiazang(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").show()
        $("#story5-14").hide()
        $("#story5-7").hide()
    }

    function zuoqi(){
        $("#story5-5").hide()
        $("#story5-6").hide()
        $("#story5-8").hide()
        $("#story5-9").hide()
        $("#story5-10").hide()
        $("#story5-11").hide()
        $("#story5-12").hide()
        $("#story5-13").hide()
        $("#story5-14").show()
        $("#story5-7").hide()
    }
    
    
///////////////////////////////////

function tanjiuwenlu(){
    clickitem.play(); 
    clickthen.play();
    $('.change').show()
    setTimeout(function(){ $('.main').hide()
    $('.book').show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});
   
}

/////////////////////////////////

function tanback2(){
    $(".music").show()
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){  $('.main').show()
    $('.map').hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});
TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});
    $(".book").hide()
    $(".shouji").hide()
    $(".tag-qingbaozhan").hide()
    $(".iphonix-in2").animate({height:'701.1px'});
    $(".center-xy").css("display","");
}

/////////////////////////////////

function tanback3(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$('.main').show()
    $('.book').hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});
TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

    $(".map").hide()
    $(".shouji").hide()
    $(".tag-qingbaozhan").hide()
    $(".iphonix-in2").animate({height:'701.1px'});
    $(".center-xy").css("display","");
}

/////////////////////////////////

TweenLite.fromTo('#stage',1.5, {opacity:0}, {opacity:1})

/////////////////////////////////

function jin(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").show(),$(".jin-1").show(),$(".book").hide(),$(".jinback").show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function jinback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").hide(),$(".jin-1").hide(),$(".book").show(),$(".jinback").hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////


function mu(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").show(),$(".mu-1").show(),$(".book").hide(),$(".muback").show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function muback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").hide(),$(".mu-1").hide(),$(".book").show(),$(".muback").hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function shui(){

    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").show(),$(".shui-1").show(),$(".book").hide(),$(".shuiback").show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function shuiback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").hide(),$(".shui-1").hide(),$(".book").show(),$(".shuiback").hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function huo(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").show(),$(".huo-1").show(),$(".book").hide(),$(".huoback").show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function huoback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").hide(),$(".huo-1").hide(),$(".book").show(),$(".huoback").hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function tu(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").show(),$(".tu-1").show(),$(".book").hide(),$(".tuback").show()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////

function tuback(){
    clickitem.play();
    clickthen.play();
    $('.change').show()
    setTimeout(function(){$("#book-pre").hide(),$(".tu-1").hide(),$(".book").show(),$(".tuback").hide()},500);
    TweenMax.to('.leftchange', 0.5, {
        left:0, 
        repeat:1, 
        repeatDelay: 0.2,
        yoyo:true, 
        onComplete:function(){
           $(".change").hide();
    }
});

TweenMax.to('.rightchange', 0.5, {
    right:0, 
    repeat:1, 
    repeatDelay: 0.2,
    yoyo:true, 
});

}

/////////////////////////////////


/////////////////////////////////

document.getElementById("renwushu").innerHTML = a;
document.getElementById("yinyangling").innerHTML = b;
document.getElementById("shengmingyin").innerHTML = c;


