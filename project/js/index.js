//当滚动条滚动到一定距离后才会出现
window.onscroll = function(){ //绑定scroll事件
    var t = document.documentElement.scrollTop || document.body.scrollTop; //获取滚动距离
    //内容里面右边推荐里面的固定定位的下载链家APP
    var display = document.getElementById( "display" ); //查询并定义div元素
    // var contnet_right_five = document.getElementsByClassName( "contnet_right_five" ); //查询并定义div元素
    if( t >= 1740 ) { //判断
        display.style.display = "block";
    } else {
        display.style.display = "none";
    }
    //右侧导航里面的最后一个div  返回顶部
    var top = document.getElementById( "top" );
    if( t >= 750 ) { //判断
        top.style.display = "block";
    } else {
        top.style.display = "none";
    }
} 