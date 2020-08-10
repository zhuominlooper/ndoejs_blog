//闪烁
$(".box")[0].onclick = function() {
    $(".light")[0].style.animation = "Light 0.6s";
    setTimeout( function(){
        $(".light")[0].style.animation = "";
    },610)
}


//图集
//移入
function Onmouseover(){
    $('.album')[0].style.transform = "rotate(30deg) translate(30px,-50px)";
    $('.album')[1].style.transform = "rotate(-30deg) translate(-30px,-40px)";
}
//移出
function Onmouseout(){
    $('.album')[0].style.transform = "";
    $('.album')[1].style.transform = "";
}
for( let i=0; i<$('.album').length; i++){
    $('.album')[i].onmouseover = function() {
        Onmouseover();
    }
    $('.album')[i].onmouseout = function() {
        Onmouseout();
    }
}

