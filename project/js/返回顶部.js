//当滚动条滚动到一定距离后才会出现
window.onscroll = function(){ //绑定scroll事件
    var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
    //右侧导航里面的最后一个div  返回顶部
    var top = document.getElementById( "top" );
    if( t >= 750 ) { //判断
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }
} 