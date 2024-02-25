var listWidth;

$(function(){

    if(window.innerWidth<=1000){
        listWidth = '100%';
    }
    else listWidth = '70%';

    $('#dialog1').hide(0);

    $('#imgP1').attr({src: 'image/DONE/chair.png'});
    $('#imgP2').attr({src: 'image/DONE/PS5.png'});
    $('#imgP3').attr({src: 'image/DONE/switch.png'});
    $('#imgP4').attr({src: 'image/DONE/screen.png'});
    $('#imgP5').attr({src: 'image/DONE/headphone.png'});
    $('#imgP6').attr({src: 'image/DONE/microphone.png'});
    $('#imgP7').attr({src: 'image/DONE/keyboard.png'});
    $('#imgP8').attr({src: 'image/DONE/mouse.png'});
    $('#imgP9').attr({src: 'image/DONE/mousepad.png'});
    $('#imgP10').attr({src: 'image/DONE/ChargePlay.png'});
    $('#imgP11').attr({src: 'image/DONE/MyCard.png'});
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
    var wid = 0.993*window.innerWidth;
    videoBox.style.display = 'block';
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
        rstName.textContent ='Razer Iskur V2電競椅 (綠)';
        $('#rstImg').attr({src:'image/DONE/chair.png'});
    }
    else if(drawNum<4){
        rstName.textContent ='SONY PS5';
        $('#rstImg').attr({src:'image/DONE/PS5.png'});
    }
    else if(drawNum<7){
        rstName.textContent ='Nintendo Switch';
        $('#rstImg').attr({src:'image/DONE/switch.png'});
    }
    else if(drawNum<11){
        rstName.textContent ='ViewSonic VX2728-2K';
        $('#rstImg').attr({src:'image/DONE/screen.png'});
    }
    else if(drawNum<15){
        rstName.textContent ='HyperX Cloud III Wireless';
        $('#rstImg').attr({src:'image/DONE/headphone.png'});
    }
    else if(drawNum<28){
        rstName.textContent ='HyperX QuadCast S';
        $('#rstImg').attr({src:'image/DONE/microphone.png'});
    }
    else if(drawNum<40){
        rstName.textContent ='HyperX Alloy Origins';
        $('#rstImg').attr({src:'image/DONE/keyboard.png'});
    }
    else if(drawNum<52){
        rstName.textContent ='HyperX Pulsefire Haste 2';
        $('#rstImg').attr({src:'image/DONE/mouse.png'});
    }
    else if(drawNum<64){
        rstName.textContent ='HyperX Pulsefire Mat';
        $('#rstImg').attr({src:'image/DONE/mousepad.png'});
    }
    else if(drawNum<76){
        rstName.textContent ='HyperX ChargePlay Duo PS5控制器充電座';
        $('#rstImg').attr({src:'image/DONE/ChargePlay.png'});
    }
    else if(drawNum<88){
        rstName.textContent ='MyCard 2000點';
        $('#rstImg').attr({src:'image/DONE/MyCard.png'});
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
            rstNameArray.item(i).textContent ='Razer Iskur V2 (綠)';
            rstImg2.item(i).src = 'image/DONE/chair.png';
        }
        else if(drawNum<4){
            rstNameArray.item(i).textContent ='SONY PS5';
            rstImg2.item(i).src = 'image/DONE/PS5.png';
        }
        else if(drawNum<7){
            rstNameArray.item(i).textContent ='Nintendo Switch';
            rstImg2.item(i).src = 'image/DONE/switch.png';
        }
        else if(drawNum<11){
            rstNameArray.item(i).textContent ='ViewSonic VX2728-2K';
            rstImg2.item(i).src = 'image/DONE/screen.png';
        }
        else if(drawNum<15){
            rstNameArray.item(i).textContent ='HyperX Cloud III Wireless';
            rstImg2.item(i).src= 'image/DONE/headphone.png';
        }
        else if(drawNum<28){
            rstNameArray.item(i).textContent ='HyperX QuadCast S';
            rstImg2.item(i).src = 'image/DONE/microphone.png';
        }
        else if(drawNum<40){
            rstNameArray.item(i).textContent ='HyperX Alloy Origins';
            rstImg2.item(i).src = 'image/DONE/keyboard.png';
        }
        else if(drawNum<52){
            rstNameArray.item(i).textContent ='HyperX Pulsefire Haste 2';
            rstImg2.item(i).src = 'image/DONE/mouse.png';
        }
        else if(drawNum<64){
            rstNameArray.item(i).textContent ='HyperX Pulsefire Mat';
            rstImg2.item(i).src = 'image/DONE/mousepad.png';
        }
        else if(drawNum<76){
            rstNameArray.item(i).textContent ='HyperX ChargePlay Duo PS5控制器充電座';
            rstImg2.item(i).src = 'image/DONE/ChargePlay.png';
        }
        else if(drawNum<88){
            rstNameArray.item(i).textContent ='MyCard 2000點';
            rstImg2.item(i).src = 'image/DONE/MyCard.png';
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