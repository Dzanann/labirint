var c = document.getElementById("potCanvas"); // canvas
var ctx = c.getContext("2d"); // context for drawing
const obj = document.getElementById('object'); //object
// Set drawing styles
ctx.strokeStyle = "rgba(255,255,255,1)"; // color
ctx.lineWidth = 2; // line width
ctx.lineCap = "round"; // line cap style

const xKoordinate=[282, 282, 303, 303, 325, 325, 303, 303, 327, 327, 350, 350, 416, 416, 440, 440, 461, 461, 528, 528, 461, 461, 483, 483, 505, 505, 483, 483, 462, 462, 439, 439, 462, 462, 440, 440, 418, 418, 395, 395, 416, 416, 438, 438, 416, 416, 372, 372, 350, 350, 327, 327, 350, 350, 372, 372, 395, 395, 329, 329, 282, 282];
const yKoordinate=[2, 102, 102, 125, 125, 148, 148, 170, 170, 215, 215, 170, 170, 148, 148, 81, 81, 102, 102, 126, 126, 148, 148, 170, 170, 192, 192, 236, 236, 170, 170, 260, 260, 305, 305, 326, 326, 350, 350, 395, 395, 439, 439, 462, 462, 484, 484, 462, 462, 439, 439, 483, 483, 506, 506, 530, 530, 552, 552, 530, 530, 562];

var x=282;
var y=2;
var dx=2;
var dy=2;

var xN;
var yN;


var audio = document.getElementById("redlight");
var audio1 = document.getElementById("engineSound");
function playAudio() {
    audio.play();
    audio.volume=0.4;
}
function pauseAudio() {
    audio.pause();
}
function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
}
function loudAudio() {
    audio.volume=0.4;
}


function playAudio1() {
    audio1.play();
    audio1.volume=0.4;
}
function pauseAudio1() {
    audio1.pause();
}
function stopAudio1() {
    audio1.pause();
    audio1.currentTime = 0;
}



function moveObject(x, y) {
    obj.style.left = (x-7) + 'px';
    obj.style.top = (y-7) + 'px';
}

obj.style.visibility = "hidden";
var n=0;
ctx.beginPath();
function animation(){
    if(x==282 && y<102 && y>=2){                // 1
        y+=dy;
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=282 && x<303 && y==102){        //povecaj x         2
        x+=dx;
        if((303-x)<=2){
            x=303;
        }
    }else if(x==303 && y>=102 && y<125){        //povecaj y         3
        y+=dy;              
        if((125-y)<=2){
            y=125;
        }
    }else if(x>=303 && x<325 && y==125){       //                   4 
        x+=dx;
        if((325-x)<=2){
            x=325;
        }
    }else if(x==325 && y>=125 && y<148){        //                  5
        y+=dy;
        if((148-y)<=2){
            y=148;
        }
    }else if(x<=325 && x>303 && y==148){        //zmanjsaj x        6
        x-=dx;
        if((x-303)<=2){
            x=303;
        }
    }else if(x==303 && y>=148 && y<170){        //povecaj y         7
        y+=dy;
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=303 && x<327 && y==170){        //povecaj x         8
        x+=dx;
        if((327-x)<=2){
            x=327;
        }
    }else if(x==327 && y>=170 && y<215){        //povecaj y         9
        y+=dy;
        if((215-y)<=2){
            y=215;
        }
    }else if(x>=327 && x<350 && y==215){        //povecaj x         10
        x+=dx;
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y<=215 && y>170){        //zmanjsaj y        11
        y-=dy;
        if((y-170)<=2){
            y=170;
        }
    }else if(x>=350 && x<416 && y==170){        //povecaj x         12
        x+=dx;
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y<=170 && y>148){        //zmanjsaj y        13
        y-=dy;
        if((y-148)<=2){
            y=148;
        }
    }else if(x>=416 && x<440 && y==148){        //povecaj x         14
        x+=dx;
        if((440-x)<=2){
            x=440;
        }
    }else if(x==440 && y<=148 && y>81){        //zmanjsaj y         15
        y-=dy;
        if((y-81)<=2){
            y=81;
        }
    }else if(x>=440 && x<461 && y==81){        //povecaj x          16
        x+=dx;
        if((461-x)<=2){
            x=461;
        }
    }else if(x==461 && y>=81 && y<102){        //povecaj y          17
        y+=dy;
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=461 && x<528 && y==102){        //povecaj x         18
        x+=dx;
        if((528-x)<=2){
            x=528;
        }
    }else if(x==528 && y>=102 && y<126){        //povecaj y         19
        y+=dy;
        if((126-y)<=2){
            y=126;
        }
    }else if(x<=528 && x>461 && y==126){        //zmanjsaj x        20
        x-=dx;
        if((x-461)<=2){
            x=461;
        }
    }else if(x==461 && y>=126 && y<148){        //povecaj y         21
        y+=dy;
        if((148-y)<=2){
            y=148;
        }
    }else if(x>=461 && x<483 && y==148){        //povecaj x         22
        x+=dx;
        if((483-x)<=2){
            x=483;
        }
    }else if(x==483 && y>=148 && y<170){        //povecaj y         23
        y+=dy;
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=483 && x<505 && y==170){        //povecaj x         24
        x+=dx;
        if((505-x)<=2){
            x=505;
        }
    }else if(x==505 && y>=170 && y<192){        //povecaj y         25
        y+=dy;
        if((192-y)<=2){
            y=192;
        }
    }else if(x<=505 && x>483 && y==192){        //zmanjsaj x        26
        x-=dx;
        if((x-483)<=2){
            x=483;
        }
    }else if(x==483 && y>=192 && y<236){        //povecaj y         27
        y+=dy;  
        if((236-y)<=2){
            y=236;
        }
    }else if(x<=483 && x>462 && y==236){        //zmanjsaj x        28
        x-=dx;
        if((x-462)<=2){
            x=462;
        }
    }else if(x==462 && y<260 && y>170){        //zmanjsaj y        29
        y-=dy;
        if((y-170)<=2){
            y=170;
        }
    }else if(x<=462 && x>439 && y==170){        //zmanjsaj x        30
        x-=dx;
        if((x-439)<=2){
            x=439;
        }
    }else if(x==439 && y>=170 && y<260){        //povecaj y         31
        y+=dy;
        if((260-y)<=2){
            y=260;
        }
    }else if(x>=439 && x<462 && y==260){        //povecaj x         32 se izvede 33 ne
        x+=dx;
        if((462-x)<=2){
            x=462;
        }
    }else if(x==462 && y>=260 && y<305){        //povecaj y         33
        y+=dy;
        if((305-y)<=2){
            y=305;
        }
    }else if(x<=462 && x>440 && y==305){        //zmanjsaj x        34
        x-=dx;
        if((x-440)<=2){
            x=440;
        }
    }else if(x==440 && y>=305 && y<326){        //povecaj y         35
        y+=dy;
        if((326-y)<=2){
            y=326;
        }
    }else if(x<=440 && x>418 && y==326){        //zmanjsaj x        36
        x-=dx;
        if((x-418)<=2){
            x=418;
        }
    }else if(x==418 && y>=326 && y<350){        //povecaj y         37
        y+=dy;
        if((350-y)<=2){
            y=350;
        }
    }else if(x<=418 && x>395 && y==350){        //zmanjsaj x        38
        x-=dx;
        if((x-395)<=2){
            x=395;
        }
    }else if(x==395 && y>=350 && y<395){        //povecaj y         39
        y+=dy;
        if((395-y)<=2){
            y=395;
        }
    }else if(x>=395 && x<416 && y==395){        //povecaj x         40
        x+=dx;
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y>=395 && y<439){        //povecaj y         41
        y+=dy;
        if((439-y)<=2){
            y=439;
        }
    }else if(x>=416 && x<438 && y==439){        //povecaj x         42
        x+=dx;
        if((439-x)<=2){
            x=438;
        }
    }else if(x==438 && y>=439 && y<462){        //povecaj y         43
        y+=dy;
        if((462-y)<=2){
            y=462;
        }
    }else if(x<=438 && x>416 && y==462){        //zmanjsaj x        44
        x-=dx;
        if((x-416)<=2){
            x=416;
        }
    }else if(x==416 && y>=462 && y<484){        //povecaj y         45
        y+=dy;
        if((484-y)<=2){
            y=484;
        }
    }else if(x<=416 && x>372 && y==484){        //zmanjsaj x        46
        x-=dx;
        if((x-372)<=2){
            x=372;
        }
    }else if(x==372 && y<=484 && y>462){        //zmanjsaj y        47
        y-=dy;
        if((y-462)<=2){
            y=462;
        }
    }else if(x<=372 && x>350 && y==462){        //zmanjsaj x        48
        x-=dx;
        if((x-350)<=2){
            x=350;
        }
    }else if(x==350 && y<=462 && y>439){        //zmanjsaj y        49
        y-=dy;
        if((y-439)<=2){
            y=439;
        }
    }else if(x<=350 && x>327 && y==439){        //zmanjsaj x        50
        x-=dx;
        if((x-327)<=2){
            x=327;
        }
    }else if(x==327 && y>=439 && y<483){        //povecaj y         51
        y+=dy;
        if((483-y)<=2){
            y=483;
        }
    }else if(x>=327 && x<350 && y==483){        //povecaj x         52
        x+=dx;
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y>=483 && y<506){        //povecaj y         53
        y+=dy;
        if((506-y)<=2){
            y=506;
        }
    }else if(x>=350 && x<372 && y==506){        //povecaj x         54
        x+=dx;
        if((372-x)<=2){
            x=372;
        }
    }else if(x==372 && y>=506 && y<530){        //povecaj y         55
        y+=dy;
        if((530-y)<=2){
            y=530;
        }
    }else if(x>=372 && x<395 && y==530){        //povecaj x         56
        x+=dx;
        if((395-x)<=2){
            x=395;
        }
    }else if(x==395 && y>=530 && y<552){        //povecaj y         57
        y+=dy;
        if((552-y)<=2){
            y=552;
        }
    }else if(x<=395 && x>329 && y==552){        //zmanjsaj x        58
        x-=dx;
        if((x-329)<=2){
            x=329;
        }
    }else if(x==329 && y<=552 && y>530){        //zmanjsaj y        59
        y-=dy;
        if((y-530)<=2){
            y=530;
        }
    }else if(x<=329 && x>282 && y==530){        //zmanjsaj x        60
        x-=dx;
        if((x-282)<=2){
            x=282;
        }
    }else if(x==282 && y>=530 && y<562){        //povecaj y         61
        y+=dy;
        if((562-y)<=2){
            y=562;
            console.log("test1");
            intrr=setInterval(brisi,10);
            clearInterval(intr);
        }
    
    }
    n++;
    if(n%2==0){
        ctx.moveTo(x,y);
        ctx.lineTo(x+1,y+1);
        ctx.stroke();
    
    }
    if(x==282 && y==562){
        x=282;
        y=2;
    }
}

var intr;
var k=false;
function startAnimation() {
    if(!k){
        k=true;
        intr = setInterval(animation, 10);
    }
}

document.getElementById("button").addEventListener("click", startAnimation);
document.getElementById("reload").addEventListener("click", function() {
    location.reload();
});

var intrr;
var intrrr;

var c=3;
function premik(){
    if(x==282 && y<102 && y>=2){                // 1
        y+=dy;
        c=3;
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=282 && x<303 && y==102){        //povecaj x         2
        x+=dx;
        c=1;
        if((303-x)<=2){
            x=303;
        }
    }else if(x==303 && y>=102 && y<125){        //povecaj y         3
        y+=dy;
        c=3;              
        if((125-y)<=2){
            y=125;
        }
    }else if(x>=303 && x<325 && y==125){       //                   4 
        x+=dx;
        c=1;
        if((325-x)<=2){
            x=325;
        }
    }else if(x==325 && y>=125 && y<148){        //                  5
        y+=dy;
        c=3;
        if((148-y)<=2){
            y=148;
        }
    }else if(x<=325 && x>303 && y==148){        //zmanjsaj x        6
        x-=dx;
        c=2;
        if((x-303)<=2){
            x=303;
        }
    }else if(x==303 && y>=148 && y<170){        //povecaj y         7
        y+=dy;
        c=3;
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=303 && x<327 && y==170){        //povecaj x         8
        x+=dx;
        c=1;
        if((327-x)<=2){
            x=327;
        }
    }else if(x==327 && y>=170 && y<215){        //povecaj y         9
        y+=dy;
        c=3;
        if((215-y)<=2){
            y=215;
        }
    }else if(x>=327 && x<350 && y==215){        //povecaj x         10
        x+=dx;
        c=1;
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y<=215 && y>170){        //zmanjsaj y        11
        y-=dy;
        c=4;
        if((y-170)<=2){
            y=170;
        }
    }else if(x>=350 && x<416 && y==170){        //povecaj x         12
        x+=dx;
        c=1;
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y<=170 && y>148){        //zmanjsaj y        13
        y-=dy;
        c=4;
        if((y-148)<=2){
            y=148;
        }
    }else if(x>=416 && x<440 && y==148){        //povecaj x         14
        x+=dx;
        c=1;
        if((440-x)<=2){
            x=440;
        }
    }else if(x==440 && y<=148 && y>81){        //zmanjsaj y         15
        y-=dy;
        c=4;
        if((y-81)<=2){
            y=81;
        }
    }else if(x>=440 && x<461 && y==81){        //povecaj x          16
        x+=dx;
        c=1;
        if((461-x)<=2){
            x=461;
        }
    }else if(x==461 && y>=81 && y<102){        //povecaj y          17
        y+=dy;
        c=3;
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=461 && x<528 && y==102){        //povecaj x         18
        x+=dx;
        c=1;
        if((528-x)<=2){
            x=528;
        }
    }else if(x==528 && y>=102 && y<126){        //povecaj y         19
        y+=dy;
        c=3;
        if((126-y)<=2){
            y=126;
        }
    }else if(x<=528 && x>461 && y==126){        //zmanjsaj x        20
        x-=dx;
        c=2;
        if((x-461)<=2){
            x=461;
        }
    }else if(x==461 && y>=126 && y<148){        //povecaj y         21
        y+=dy;
        c=3;
        if((148-y)<=2){
            y=148;
        }
    }else if(x>=461 && x<483 && y==148){        //povecaj x         22
        x+=dx;
        c=1;
        if((483-x)<=2){
            x=483;
        }
    }else if(x==483 && y>=148 && y<170){        //povecaj y         23
        y+=dy;
        c=3;
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=483 && x<505 && y==170){        //povecaj x         24
        x+=dx;
        c=1;
        if((505-x)<=2){
            x=505;
        }
    }else if(x==505 && y>=170 && y<192){        //povecaj y         25
        y+=dy;
        c=3;
        if((192-y)<=2){
            y=192;
        }
    }else if(x<=505 && x>483 && y==192){        //zmanjsaj x        26
        x-=dx;
        c=2;
        if((x-483)<=2){
            x=483;
        }
    }else if(x==483 && y>=192 && y<236){        //povecaj y         27
        y+=dy;
        c=3;
        if((236-y)<=2){
            y=236;
        }
    }else if(x<=483 && x>462 && y==236){        //zmanjsaj x        28
        x-=dx;
        c=2;
        if((x-462)<=2){
            x=462;
        }
    }else if(x==462 && y<260 && y>170){        //zmanjsaj y        29
        y-=dy;
        c=4;
        if((y-170)<=2){
            y=170;
        }
    }else if(x<=462 && x>439 && y==170){        //zmanjsaj x        30
        x-=dx;
        c=2;
        if((x-439)<=2){
            x=439;
        }
    }else if(x==439 && y>=170 && y<260){        //povecaj y         31
        y+=dy;
        c=3; 
        if((260-y)<=2){
            y=260;
        }
    }else if(x>=439 && x<462 && y==260){        //povecaj x         32 se izvede 33 ne
        x+=dx;
        c=1;
        if((462-x)<=2){
            x=462;
        }
    }else if(x==462 && y>=260 && y<305){        //povecaj y         33
        y+=dy;
        c=3;
        if((305-y)<=2){
            y=305;
        }
    }else if(x<=462 && x>440 && y==305){        //zmanjsaj x        34
        x-=dx;
        c=2;
        if((x-440)<=2){
            x=440;
        }
    }else if(x==440 && y>=305 && y<326){        //povecaj y         35
        y+=dy;
        c=3;
        if((326-y)<=2){
            y=326;
        }
    }else if(x<=440 && x>418 && y==326){        //zmanjsaj x        36
        x-=dx;
        c=2;
        if((x-418)<=2){
            x=418;
        }
    }else if(x==418 && y>=326 && y<350){        //povecaj y         37
        y+=dy;
        c=3;
        if((350-y)<=2){
            y=350;
        }
    }else if(x<=418 && x>395 && y==350){        //zmanjsaj x        38
        x-=dx;
        c=2;
        if((x-395)<=2){
            x=395;
        }
    }else if(x==395 && y>=350 && y<395){        //povecaj y         39
        y+=dy;
        c=3;
        if((395-y)<=2){
            y=395;
        }
    }else if(x>=395 && x<416 && y==395){        //povecaj x         40
        x+=dx;
        c=1;
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y>=395 && y<439){        //povecaj y         41
        y+=dy;
        c=3;
        if((439-y)<=2){
            y=439;
        }
    }else if(x>=416 && x<438 && y==439){        //povecaj x         42
        x+=dx;
        c=1;
        if((439-x)<=2){
            x=438;
        }
    }else if(x==438 && y>=439 && y<462){        //povecaj y         43
        y+=dy;
        c=3;
        if((462-y)<=2){
            y=462;
        }
    }else if(x<=438 && x>416 && y==462){        //zmanjsaj x        44
        x-=dx;
        c=2;
        if((x-416)<=2){
            x=416;
        }
    }else if(x==416 && y>=462 && y<484){        //povecaj y         45
        y+=dy;
        c=3;
        if((484-y)<=2){
            y=484;
        }
    }else if(x<=416 && x>372 && y==484){        //zmanjsaj x        46
        x-=dx;
        c=2;
        if((x-372)<=2){
            x=372;
        }
    }else if(x==372 && y<=484 && y>462){        //zmanjsaj y        47
        y-=dy;
        c=4;
        if((y-462)<=2){
            y=462;
        }
    }else if(x<=372 && x>350 && y==462){        //zmanjsaj x        48
        x-=dx;
        c=2;
        if((x-350)<=2){
            x=350;
        }
    }else if(x==350 && y<=462 && y>439){        //zmanjsaj y        49
        y-=dy;
        c=4;
        if((y-439)<=2){
            y=439;
        }
    }else if(x<=350 && x>327 && y==439){        //zmanjsaj x        50
        x-=dx;
        c=2;
        if((x-327)<=2){
            x=327;
        }
    }else if(x==327 && y>=439 && y<483){        //povecaj y         51
        y+=dy;
        c=3;
        if((483-y)<=2){
            y=483;
        }
    }else if(x>=327 && x<350 && y==483){        //povecaj x         52
        x+=dx;
        c=1;
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y>=483 && y<506){        //povecaj y         53
        y+=dy;
        c=3;
        if((506-y)<=2){
            y=506;
        }
    }else if(x>=350 && x<372 && y==506){        //povecaj x         54
        x+=dx;
        c=1;
        if((372-x)<=2){
            x=372;
        }
    }else if(x==372 && y>=506 && y<530){        //povecaj y         55
        y+=dy;
        c=3;
        if((530-y)<=2){
            y=530;
        }
    }else if(x>=372 && x<395 && y==530){        //povecaj x         56
        x+=dx;
        c=1;
        if((395-x)<=2){
            x=395;
        }
    }else if(x==395 && y>=530 && y<552){        //povecaj y         57
        y+=dy;
        c=3;
        if((552-y)<=2){
            y=552;
        }
    }else if(x<=395 && x>329 && y==552){        //zmanjsaj x        58
        x-=dx;
        c=2;
        if((x-329)<=2){
            x=329;
        }
    }else if(x==329 && y<=552 && y>530){        //zmanjsaj y        59
        y-=dy;
        c=4;
        if((y-530)<=2){
            y=530;
        }
    }else if(x<=329 && x>282 && y==530){        //zmanjsaj x        60
        x-=dx;
        c=2;
        if((x-282)<=2){
            x=282;
        }
    }else if(x==282 && y>=530 && y<562){        //povecaj y         61
        y+=dy;
        c=3;
        if((562-y)<=2){
            y=562;
            console.log("test1");
            if (x === 282 && y === 562) {
                console.log("konec");
                obj.style.visibility = "hidden";
                k=false;
                stopAudio1();
                loudAudio();
                Swal.fire({
                    title: 'Congratulations!',
                    text: 'You have escaped the police!',
                    icon: 'success'
                });
            }
            clearInterval(intrrr);
        }
        
    }
    switch(c){
        case 1: //desno .
            obj.style.backgroundImage = "url('img/desno1.png')";
        break;
        case 2: //levo .
            obj.style.backgroundImage = "url('img/levo1.png')";
        break;
        case 3: //dol
            obj.style.backgroundImage = "url('img/dol1.png')";
        break;
        case 4:// gore
            obj.style.backgroundImage = "url('img/gor1.png')";
        break;
    }
    moveObject(x,y);
}


function brisi(){
    if(x==282 && y<102 && y>=2){                // 1
        y+=dy;
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=282 && x<303 && y==102){        //povecaj x         2
        x+=dx;
         
        if((303-x)<=2){
            x=303;
        }
    }else if(x==303 && y>=102 && y<125){        //povecaj y         3
        y+=dy;
                         
        if((125-y)<=2){
            y=125;
        }
    }else if(x>=303 && x<325 && y==125){       //                   4 
        x+=dx;
         
        if((325-x)<=2){
            x=325;
        }
    }else if(x==325 && y>=125 && y<148){        //                  5
        y+=dy;
           
        if((148-y)<=2){
            y=148;
        }
    }else if(x<=325 && x>303 && y==148){        //zmanjsaj x        6
        x-=dx;
            
        if((x-303)<=2){
            x=303;
        }
    }else if(x==303 && y>=148 && y<170){        //povecaj y         7
        y+=dy;
           
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=303 && x<327 && y==170){        //povecaj x         8
        x+=dx;
         
        if((327-x)<=2){
            x=327;
        }
    }else if(x==327 && y>=170 && y<215){        //povecaj y         9
        y+=dy;
           
        if((215-y)<=2){
            y=215;
        }
    }else if(x>=327 && x<350 && y==215){        //povecaj x         10
        x+=dx;
         
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y<=215 && y>170){        //zmanjsaj y        11
        y-=dy;
           
        if((y-170)<=2){
            y=170;
        }
    }else if(x>=350 && x<416 && y==170){        //povecaj x         12
        x+=dx;
         
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y<=170 && y>148){        //zmanjsaj y        13
        y-=dy;
           
        if((y-148)<=2){
            y=148;
        }
    }else if(x>=416 && x<440 && y==148){        //povecaj x         14
        x+=dx;
         
        if((440-x)<=2){
            x=440;
        }
    }else if(x==440 && y<=148 && y>81){        //zmanjsaj y         15
        y-=dy;
           
        if((y-81)<=2){
            y=81;
        }
    }else if(x>=440 && x<461 && y==81){        //povecaj x          16
        x+=dx;
         
        if((461-x)<=2){
            x=461;
        }
    }else if(x==461 && y>=81 && y<102){        //povecaj y          17
        y+=dy;
           
        if((102-y)<=2){
            y=102;
        }
    }else if(x>=461 && x<528 && y==102){        //povecaj x         18
        x+=dx;
         
        if((528-x)<=2){
            x=528;
        }
    }else if(x==528 && y>=102 && y<126){        //povecaj y         19
        y+=dy;
           
        if((126-y)<=2){
            y=126;
        }
    }else if(x<=528 && x>461 && y==126){        //zmanjsaj x        20
        x-=dx;
            
        if((x-461)<=2){
            x=461;
        }
    }else if(x==461 && y>=126 && y<148){        //povecaj y         21
        y+=dy;
           
        if((148-y)<=2){
            y=148;
        }
    }else if(x>=461 && x<483 && y==148){        //povecaj x         22
        x+=dx;
         
        if((483-x)<=2){
            x=483;
        }
    }else if(x==483 && y>=148 && y<170){        //povecaj y         23
        y+=dy;
           
        if((170-y)<=2){
            y=170;
        }
    }else if(x>=483 && x<505 && y==170){        //povecaj x         24
        x+=dx;
         
        if((505-x)<=2){
            x=505;
        }
    }else if(x==505 && y>=170 && y<192){        //povecaj y         25
        y+=dy;
           
        if((192-y)<=2){
            y=192;
        }
    }else if(x<=505 && x>483 && y==192){        //zmanjsaj x        26
        x-=dx;
            
        if((x-483)<=2){
            x=483;
        }
    }else if(x==483 && y>=192 && y<236){        //povecaj y         27
        y+=dy;
             
        if((236-y)<=2){
            y=236;
        }
    }else if(x<=483 && x>462 && y==236){        //zmanjsaj x        28
        x-=dx;
            
        if((x-462)<=2){
            x=462;
        }
    }else if(x==462 && y<260 && y>170){        //zmanjsaj y        29
        y-=dy;
           
        if((y-170)<=2){
            y=170;
        }
    }else if(x<=462 && x>439 && y==170){        //zmanjsaj x        30
        x-=dx;
            
        if((x-439)<=2){
            x=439;
        }
    }else if(x==439 && y>=170 && y<260){        //povecaj y         31
        y+=dy;
           
        if((260-y)<=2){
            y=260;
        }
    }else if(x>=439 && x<462 && y==260){        //povecaj x         32 se izvede 33 ne
        x+=dx;
         
        if((462-x)<=2){
            x=462;
        }
    }else if(x==462 && y>=260 && y<305){        //povecaj y         33
        y+=dy;
           
        if((305-y)<=2){
            y=305;
        }
    }else if(x<=462 && x>440 && y==305){        //zmanjsaj x        34
        x-=dx;
            
        if((x-440)<=2){
            x=440;
        }
    }else if(x==440 && y>=305 && y<326){        //povecaj y         35
        y+=dy;
           
        if((326-y)<=2){
            y=326;
        }
    }else if(x<=440 && x>418 && y==326){        //zmanjsaj x        36
        x-=dx;
            
        if((x-418)<=2){
            x=418;
        }
    }else if(x==418 && y>=326 && y<350){        //povecaj y         37
        y+=dy;
           
        if((350-y)<=2){
            y=350;
        }
    }else if(x<=418 && x>395 && y==350){        //zmanjsaj x        38
        x-=dx;
            
        if((x-395)<=2){
            x=395;
        }
    }else if(x==395 && y>=350 && y<395){        //povecaj y         39
        y+=dy;
           
        if((395-y)<=2){
            y=395;
        }
    }else if(x>=395 && x<416 && y==395){        //povecaj x         40
        x+=dx;
         
        if((416-x)<=2){
            x=416;
        }
    }else if(x==416 && y>=395 && y<439){        //povecaj y         41
        y+=dy;
           
        if((439-y)<=2){
            y=439;
        }
    }else if(x>=416 && x<438 && y==439){        //povecaj x         42
        x+=dx;
         
        if((439-x)<=2){
            x=438;
        }
    }else if(x==438 && y>=439 && y<462){        //povecaj y         43
        y+=dy;
           
        if((462-y)<=2){
            y=462;
        }
    }else if(x<=438 && x>416 && y==462){        //zmanjsaj x        44
        x-=dx;
            
        if((x-416)<=2){
            x=416;
        }
    }else if(x==416 && y>=462 && y<484){        //povecaj y         45
        y+=dy;
           
        if((484-y)<=2){
            y=484;
        }
    }else if(x<=416 && x>372 && y==484){        //zmanjsaj x        46
        x-=dx;
            
        if((x-372)<=2){
            x=372;
        }
    }else if(x==372 && y<=484 && y>462){        //zmanjsaj y        47
        y-=dy;
           
        if((y-462)<=2){
            y=462;
        }
    }else if(x<=372 && x>350 && y==462){        //zmanjsaj x        48
        x-=dx;
            
        if((x-350)<=2){
            x=350;
        }
    }else if(x==350 && y<=462 && y>439){        //zmanjsaj y        49
        y-=dy;
           
        if((y-439)<=2){
            y=439;
        }
    }else if(x<=350 && x>327 && y==439){        //zmanjsaj x        50
        x-=dx;
            
        if((x-327)<=2){
            x=327;
        }
    }else if(x==327 && y>=439 && y<483){        //povecaj y         51
        y+=dy;
           
        if((483-y)<=2){
            y=483;
        }
    }else if(x>=327 && x<350 && y==483){        //povecaj x         52
        x+=dx;
         
        if((350-x)<=2){
            x=350;
        }
    }else if(x==350 && y>=483 && y<506){        //povecaj y         53
        y+=dy;
           
        if((506-y)<=2){
            y=506;
        }
    }else if(x>=350 && x<372 && y==506){        //povecaj x         54
        x+=dx;
         
        if((372-x)<=2){
            x=372;
        }
    }else if(x==372 && y>=506 && y<530){        //povecaj y         55
        y+=dy;
           
        if((530-y)<=2){
            y=530;
        }
    }else if(x>=372 && x<395 && y==530){        //povecaj x         56
        x+=dx;
         
        if((395-x)<=2){
            x=395;
        }
    }else if(x==395 && y>=530 && y<552){        //povecaj y         57
        y+=dy;
           
        if((552-y)<=2){
            y=552;
        }
    }else if(x<=395 && x>329 && y==552){        //zmanjsaj x        58
        x-=dx;
            
        if((x-329)<=2){
            x=329;
        }
    }else if(x==329 && y<=552 && y>530){        //zmanjsaj y        59
        y-=dy;
           
        if((y-530)<=2){
            y=530;
        }
    }else if(x<=329 && x>282 && y==530){        //zmanjsaj x        60
        x-=dx;
            
        if((x-282)<=2){
            x=282;
        }
    }else if(x==282 && y>=530 && y<562){        //povecaj y         61
        y+=dy;
           
        if((562-y)<=2){
            y=562;
            console.log("test1");
            x=282;
            y=2;
            obj.style.visibility = "visible";
            playAudio1();
            audio.volume=0.1;
            intrrr=setInterval(premik,10);
            clearInterval(intrr);
        }
    }
    ctx.clearRect(x-7,y-7,15,15);
}