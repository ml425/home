/*
 * @Author: meilin 
 * @Date: 2020-03-30 19:08:44 
 * @Last Modified by: meilin
 * @Last Modified time: 2020-04-09 21:39:45
 */
// 实现首页的轮播图
var index=0;
//改变图片
function ChangeImg() {
    index++;
    var a=document.getElementsByClassName("img-slide");
    var b=document.getElementsByClassName("imgBox");
    if(index>=a.length) index=0;
    for(var i=0;i<a.length;i++){
        a[i].style.display='none';
    }
    a[index].style.display='block';
}
//设置定时器，每隔5秒切换一张图片
setInterval(ChangeImg,3000);