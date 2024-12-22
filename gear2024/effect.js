var listWidth;

$(function(){

    if(window.innerWidth<=1000){
        listWidth = '100%';
    }
    else listWidth = '70%';
  
    $('#dialog1').hide(0);

    $('#imgP1').attr({src: 'image/DONE/iphone.png'});
    $('#imgP2').attr({src: 'image/DONE/PS5.png'});
    $('#imgP3').attr({src: 'image/DONE/switch.png'});
    $('#imgP4').attr({src: 'image/DONE/SUPERLIGHT.png'});
    $('#imgP5').attr({src: 'image/DONE/LIGHTSPEED.png'});
    $('#imgP6').attr({src: 'image/DONE/TKL.png'});
    $('#imgP7').attr({src: 'image/DONE/penguin.png'});
    $('#imgP8').attr({src: 'image/DONE/yasuo.png'});
    $('#imgP9').attr({src: 'image/DONE/Tshirt.png'});
    $('#imgP10').attr({src: 'image/DONE/hat.png'});
    $('#imgP11').attr({src: 'image/DONE/keyholder.png'});
    $('#imgP12').attr({src: 'image/DONE/gearpillow.png'});

    $('#listBox').dialog({
        autoOpen:false,
        show: {
            effect: 'fade',
            duration: 300
        },
        hide: {
            effect: 'fade',
            duration: 300
        },
        width:listWidth,
        modal:true,
        draggable:false,
        resizable:false
    });

    $('#rst1').dialog({
        autoOpen:false,
        show: {
            effect: 'fade',
            duration: 300
        },
        hide: {
            effect: 'fade',
            duration: 300
        },
        width:'40%',
        modal:true,
        draggable:false,
        resizable:false
    });

    $('#rstBox').dialog({
        autoOpen:false,
        show: {
            effect: 'fade',
            duration: 300
        },
        hide: {
            effect: 'fade',
            duration: 300
        },
        width:listWidth,
        modal:true,
        draggable:false,
        resizable:false
    });
});

    var playop = document.getElementById('openingvideo');
    var opening = document.getElementById('opening');

    function playopening(){
    var wid = window.innerWidth;
    opening.style.display = 'block';
    playop.setAttribute('width',wid);
    playop.setAttribute('src','image/opening.mp4');
    playop.setAttribute('autoplay','true');
    }

    function Offop(){
    opening.style.display = 'none';
    playop.removeAttribute('src','image/opening.mp4');
    playop.removeAttribute('width');
    playop.removeAttribute('autoplay','true');
    }
    playopening();
    window.setTimeout('Offop()',4200);

    

//gear移動 0------------------------------------------------------------
//隨機樣式
var giftype = Math.floor(10*Math.random());
if(giftype<2) $('#gear0').attr({src: 'image/gif02.gif'});
else $('#gear0').attr({src: 'image/gif01.gif'});
//隨機大小
var scale = Math.floor(20*Math.random()+10);
scale = scale +'%';
//隨機高度
var gearY = Math.floor(80*Math.random()) + '%';
//隨機速度
var gearSpeed = Math.floor(20*Math.random());
var gearX;
var gearXC = -9;

$('#gear0').css('width', scale);
$('#gear0').css('top', gearY);

function gearCCC(){
    gearX = gearXC + '%';
    $('#gear0').css('right', gearX);
    if(gearXC>95){
        gearXC = -9;

        giftype = Math.floor(10*Math.random());
        if(giftype<2) $('#gear0').attr({src: 'image/gif02.gif'});
        else $('#gear0').attr({src: 'image/gif01.gif'});

        scale = Math.floor(20*Math.random()+10);
        scale = scale +'%';

        gearY = Math.floor(80*Math.random()) + '%';

        gearSpeed = Math.floor(20*Math.random());
        $('#gear0').css('width', scale);
        $('#gear0').css('top', gearY);
    }
    gearXC = gearXC + 0.1;
    window.setTimeout('gearCCC()', gearSpeed);
}

var gearmove = window.setTimeout('gearCCC()', gearSpeed);

//gear移動 1-------------------------------------------------------------
//隨機樣式
var giftype1 = Math.floor(10*Math.random());
if(giftype1<2) $('#gear1').attr({src: 'image/gif02.gif'});
else $('#gear1').attr({src: 'image/gif01.gif'});
//隨機大小
var scale1 = Math.floor(20*Math.random()+10);
scale1 = scale1 +'%';
//隨機高度
var gearY1 = Math.floor(80*Math.random()) + '%';
//隨機速度
var gearSpeed1 = Math.floor(20*Math.random());
var gearX1;
var gearXC1 = -9;

$('#gear1').css('width', scale1);
$('#gear1').css('top', gearY1);

function gearCCC1(){
    gearX1 = gearXC1 + '%';
    $('#gear1').css('right', gearX1);
    if(gearXC1>95){
        gearXC1 = -9;

        giftype1 = Math.floor(10*Math.random());
        if(giftype1<2) $('#gear1').attr({src: 'image/gif02.gif'});
        else $('#gear1').attr({src: 'image/gif01.gif'});

        scale1 = Math.floor(20*Math.random()+10);
        scale1 = scale1 +'%';

        gearY1 = Math.floor(80*Math.random()) + '%';

        gearSpeed1 = Math.floor(20*Math.random());
        $('#gear1').css('width', scale1);
        $('#gear1').css('top', gearY1);
    }
    gearXC1 = gearXC1 + 0.1;
    window.setTimeout('gearCCC1()', gearSpeed1);
}

var gearmove1 = window.setTimeout('gearCCC1()', gearSpeed1);


//gear移動 2-------------------------------------------------------------
//隨機樣式
var giftype2 = Math.floor(10*Math.random());
if(giftype2<2) $('#gear2').attr({src: 'image/gif02.gif'});
else $('#gear2').attr({src: 'image/gif01.gif'});
//隨機大小
var scale2 = Math.floor(20*Math.random()+10);
scale2 = scale2 +'%';
//隨機高度
var gearY2 = Math.floor(80*Math.random()) + '%';
//隨機速度
var gearSpeed2 = Math.floor(20*Math.random());
var gearX2;
var gearXC2 = -9;

$('#gear2').css('width', scale2);
$('#gear2').css('top', gearY2);

function gearCCC2(){
    gearX2 = gearXC2 + '%';
    $('#gear2').css('right', gearX2);
    if(gearXC2>95){
        gearXC2 = -9;

        giftype2 = Math.floor(10*Math.random());
        if(giftype2<2) $('#gear2').attr({src: 'image/gif02.gif'});
        else $('#gear2').attr({src: 'image/gif01.gif'});

        scale2 = Math.floor(20*Math.random()+10);
        scale2 = scale2 +'%';

        gearY2 = Math.floor(80*Math.random()) + '%';

        gearSpeed2 = Math.floor(20*Math.random());
        $('#gear2').css('width', scale2);
        $('#gear2').css('top', gearY2);
    }
    gearXC2 = gearXC2 + 0.1;
    window.setTimeout('gearCCC2()', gearSpeed2);
}

var gearmove2 = window.setTimeout('gearCCC2()', gearSpeed2);

//gear移動 3-------------------------------------------------------------
var giftype3 = Math.floor(10*Math.random());
if(giftype3<2) $('#gear3').attr({src: 'image/gif02.gif'});
else $('#gear3').attr({src: 'image/gif01.gif'});
//隨機大小
var scale3 = Math.floor(20*Math.random()+10);
scale3 = scale3 +'%';
//隨機高度
var gearY3 = Math.floor(80*Math.random()) + '%';
//隨機速度
var gearSpeed3 = Math.floor(20*Math.random());
var gearX3;
var gearXC3 = -9;

$('#gear3').css('width', scale3);
$('#gear3').css('top', gearY3);

function gearCCC3(){
    gearX3 = gearXC3 + '%';
    $('#gear3').css('right', gearX3);
    if(gearXC3>95){
        gearXC3 = -9;

        giftype3 = Math.floor(10*Math.random());
        if(giftype3<2) $('#gear3').attr({src: 'image/gif02.gif'});
        else $('#gear3').attr({src: 'image/gif01.gif'});

        scale3 = Math.floor(20*Math.random()+10);
        scale3 = scale3 +'%';

        gearY3 = Math.floor(80*Math.random()) + '%';

        gearSpeed3 = Math.floor(20*Math.random());
        $('#gear3').css('width', scale3);
        $('#gear3').css('top', gearY3);
    }
    gearXC3 = gearXC3 + 0.1;
    window.setTimeout('gearCCC3()', gearSpeed3);
}

var gearmove3 = window.setTimeout('gearCCC3()', gearSpeed3);

//gear移動 4-------------------------------------------------------------
var giftype4 = Math.floor(10*Math.random());
if(giftype4<2) $('#gear4').attr({src: 'image/gif02.gif'});
else $('#gear4').attr({src: 'image/gif01.gif'});
//隨機大小
var scale4 = Math.floor(20*Math.random()+10);
scale4 = scale4 +'%';
//隨機高度
var gearY4 = Math.floor(80*Math.random()) + '%';
//隨機速度
var gearSpeed4 = Math.floor(20*Math.random());
var gearX4;
var gearXC4 = -9;

$('#gear4').css('width', scale4);
$('#gear4').css('top', gearY4);

function gearCCC4(){
    gearX4 = gearXC4 + '%';
    $('#gear4').css('right', gearX4);
    if(gearXC4>95){
        gearXC4 = -9;

        giftype4 = Math.floor(10*Math.random());
        if(giftype4<2) $('#gear4').attr({src: 'image/gif02.gif'});
        else $('#gear4').attr({src: 'image/gif01.gif'});

        scale4 = Math.floor(20*Math.random()+10);
        scale4 = scale4 +'%';

        gearY4 = Math.floor(80*Math.random()) + '%';

        gearSpeed4 = Math.floor(20*Math.random());
        $('#gear4').css('width', scale4);
        $('#gear4').css('top', gearY4);
    }
    gearXC4 = gearXC4 + 0.1;
    window.setTimeout('gearCCC4()', gearSpeed4);
}

var gearmove4 = window.setTimeout('gearCCC4()', gearSpeed4);

//2020買俗頭
$('#shop2020').on('mouseover', function(){
    $('#dialog1').show(300);
});

$('#shop2020').on('mouseout', function(){
    $('#dialog1').hide(300);
});





//獎品清單
$('#prizeList').on('click', function(){
    $('#listBox').dialog('open');
});


//抽獎結果
var playVideo = document.getElementById('drawVideo');
var videoBox = document.getElementById('videoBox');

function playVdo(){
    var wid = window.innerWidth;
    videoBox.style.display = 'block';
    videoBox.style.backgroundColor = 'black';
    videoBox.style.width = '100vw';
    videoBox.style.height = '100vh';
    playVideo.setAttribute('width',wid);
    playVideo.setAttribute('src','image/gachaVideo.mp4');
    playVideo.setAttribute('autoplay','true');
}

function OffVdo(){
    videoBox.style.display = 'none';
    playVideo.removeAttribute('src','image/gachaVideo.mp4');
    playVideo.removeAttribute('width');
    playVideo.removeAttribute('autoplay','true');

}






$('#gacha1').on('click', function(){
    var drawNum = Math.floor(100*Math.random());
    var rstName = document.getElementById('rstName');
    console.log(drawNum);


    playVdo();
    window.setTimeout('OffVdo()',6100);



    if(drawNum==20){
        rstName.textContent ='可愛2020';
        $('#rstImg').attr({src:'image/2020.png'});
    }
    else if(drawNum<2){
        rstName.textContent ='iPhone 16 Pro Max 256GB';
        $('#rstImg').attr({src:'image/DONE/iphone.png'});
    }
    else if(drawNum<4){
        rstName.textContent ='PlayStation 5 Slim數位版';
        $('#rstImg').attr({src:'image/DONE/PS5.png'});
    }
    else if(drawNum<7){
        rstName.textContent ='Nintendo Switch OLED';
        $('#rstImg').attr({src:'image/DONE/switch.png'});
    }
    else if(drawNum<11){
        rstName.textContent ='Logitech G Pro X SUPERLIGHT 白';
        $('#rstImg').attr({src:'image/DONE/SUPERLIGHT.png'});
    }
    else if(drawNum<15){
        rstName.textContent ='Logitech G G502 LIGHTSPEED 粉';
        $('#rstImg').attr({src:'image/DONE/LIGHTSPEED.png'});
    }
    else if(drawNum<28){
        rstName.textContent ='Logitech G G515 有線鍵盤 TKL 黑';
        $('#rstImg').attr({src:'image/DONE/TKL.png'});
    }
    else if(drawNum<40){
        rstName.textContent ='《聯盟戰棋》鵝鵝騎士 絨毛公仔';
        $('#rstImg').attr({src:'image/DONE/penguin.png'});
    }
    else if(drawNum<52){
        rstName.textContent ='《聯盟戰棋》我是犽宿！鵝鵝騎士 絨毛公仔';
        $('#rstImg').attr({src:'image/DONE/yasuo.png'});
    }
    else if(drawNum<64){
        rstName.textContent ='《聯盟戰棋》澳門公開賽主題T恤';
        $('#rstImg').attr({src:'image/DONE/Tshirt.png'});
    }
    else if(drawNum<76){
        rstName.textContent ='《聯盟戰棋》鵝鵝騎士 絨毛帽子';
        $('#rstImg').attr({src:'image/DONE/hat.png'});
    }
    else if(drawNum<88){
        rstName.textContent ='《聯盟戰棋》鑰匙扣 (星使貓、怒角羊)';
        $('#rstImg').attr({src:'image/DONE/keyholder.png'});
    }
    else{
        rstName.textContent ='花輪抱枕';
        $('#rstImg').attr({src:'image/DONE/gearpillow.png'});
    }

    window.setTimeout('showRst()',6100);

    //$('#rst1').dialog('open');
});

function showRst(){
    $('#rst1').dialog('open');
}

$('#gacha10').on('click', function(){
    var drawNum = Math.floor(100*Math.random());
    var rstNameArray = document.getElementsByClassName('rstName2');
    var rstImg2 = document.getElementsByClassName('rstImg2');

    playVdo();
    window.setTimeout('OffVdo()',6100);

    for(var i=0;i<10;i++){
        var drawNum = Math.floor(100*Math.random());
        console.log(drawNum);

        if(drawNum==20){
            rstNameArray.item(i).textContent ='可愛2020';
            rstImg2.item(i).src ='image/2020.png'
        }
        else if(drawNum<2){
            rstNameArray.item(i).textContent ='iPhone 16 Pro Max 256GB';
            rstImg2.item(i).src = 'image/DONE/iphone.png';
        }
        else if(drawNum<4){
            rstNameArray.item(i).textContent ='PlayStation 5 Slim數位版';
            rstImg2.item(i).src = 'image/DONE/PS5.png';
        }
        else if(drawNum<7){
            rstNameArray.item(i).textContent ='Nintendo Switch OLED';
            rstImg2.item(i).src = 'image/DONE/switch.png';
        }
        else if(drawNum<11){
            rstNameArray.item(i).textContent ='Logitech G Pro X SUPERLIGHT 白';
            rstImg2.item(i).src = 'image/DONE/SUPERLIGHT.png';
        }
        else if(drawNum<15){
            rstNameArray.item(i).textContent ='Logitech G G502 LIGHTSPEED 粉';
            rstImg2.item(i).src= 'image/DONE/LIGHTSPEED.png';
        }
        else if(drawNum<28){
            rstNameArray.item(i).textContent ='Logitech G G515 有線鍵盤 TKL 黑';
            rstImg2.item(i).src = 'image/DONE/TKL.png';
        }
        else if(drawNum<40){
            rstNameArray.item(i).textContent ='《聯盟戰棋》鵝鵝騎士 絨毛公仔';
            rstImg2.item(i).src = 'image/DONE/penguin.png';
        }
        else if(drawNum<52){
            rstNameArray.item(i).textContent ='《聯盟戰棋》我是犽宿！鵝鵝騎士 絨毛公仔';
            rstImg2.item(i).src = 'image/DONE/yasuo.png';
        }
        else if(drawNum<64){
            rstNameArray.item(i).textContent ='《聯盟戰棋》澳門公開賽主題T恤';
            rstImg2.item(i).src = 'image/DONE/Tshirt.png';
        }
        else if(drawNum<76){
            rstNameArray.item(i).textContent ='《聯盟戰棋》鵝鵝騎士 絨毛帽子';
            rstImg2.item(i).src = 'image/DONE/hat.png';
        }
        else if(drawNum<88){
            rstNameArray.item(i).textContent ='《聯盟戰棋》鑰匙扣 (星使貓、怒角羊)';
            rstImg2.item(i).src = 'image/DONE/keyholder.png';
        }
        else{
            rstNameArray.item(i).textContent ='花輪抱枕';
            rstImg2.item(i).src = 'image/DONE/gearpillow.png';
        }

    }

    window.setTimeout('showRst2()',6100);
    //$('#rstBox').dialog('open');
});

function showRst2(){
    $('#rstBox').dialog('open');
}
