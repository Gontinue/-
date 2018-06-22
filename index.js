/**
 * Created by 14122 on 2018/6/22.
 */

//$(document).ready(function(){});
//等文档完成之后再执行js代码，两种方法一样

$(function() {
    //获取屏幕宽高
    var width = window.innerWidth;
    var height = window.innerHeight;
    //当前页数
    var nowpage = 0;

    $(".content").width(width);
    $(".content").height(4*height);

    $(".page").width(width);
    $(".page").height(height);
    //swipe**不是jquery自带的，是引入的插件
    //手触屏幕滑动的事件
    $(".content").swipe({
        swipe:function(event,direction,distance,duration,fingerCount) {
            $(".page1-Building").fadeIn(400,function(){
                $(".page1-flight").animate({width:"70%"},{duration:2000})
            });
            console.log(direction);
            if(direction == "up") nowpage++;
            if(direction == "down") nowpage--;
            if(nowpage > 3 ){
                nowpage = 3;
            }
            if(nowpage < 0) {
                nowpage = 0;
            }
            //animate({要做的动画效果},{duration:动画时长,complete:动画执行完了要做的事情})
            $(".content").animate({top:-nowpage*100+"%"},{duration:400,complete:function(){
                if(nowpage == 1){
                    $(".page2-farm").fadeIn(2000,function(){
                        $(".page2-it").fadeIn(2000)
                    })
                }
                if(nowpage == 2){
                    //$(".page3-earlyTitle").fadeIn(1000);
                    //$(".page3-lastBusTitle").fadeIn(1000);
                    $(".page3-bus").animate({left:"-100%"},{duration:3000});
                    $(".page3-lastBusAvatar").animate({left:"10%"},{duration:2000,complete:function(){
                        $(".page3-earlyTitle").fadeOut(1000);
                        $(".page3-lastBusTitle").fadeOut(1000);
                        $(".page3-lastBusStation").fadeOut(1000);
                        $(".page3-lastBusAvatar").fadeOut(800);
                        $(".page3-myTeamWall").fadeIn(4000);
                        $(".page3-myTeamAvatar").fadeIn(3000,function(){
                            $(".page3-myTeamTxt").fadeIn(1000,function(){
                                $(".page3-myTeamTxt01").fadeIn(1000,function(){
                                    $(".page3-myTeamTxt02").fadeIn(1000,function(){
                                        $(".page3-myTeamTxt03").fadeIn(1000,function(){
                                            $(".page3-myteamWhereTxt").fadeIn(1500);
                                        });
                                    });
                                });
                            });
                        });
                    }});
                }
                if(nowpage == 3) {
                    $(".page4-lightOff").click(function(){
                        $(".page4-lightOff").fadeOut(2000);
                        $(".page4-lightOn").fadeIn(2000,function(){
                            $(".page4-lightOffBg").fadeOut("slow");
                            $(".page4-cornerTitle").fadeOut("slow");
                            $(".page4-clickGuide").fadeOut("slow");
                            $(".page4-lightOnBg").fadeIn("slow");
                            $(".page4-weKnowYou").fadeIn("slow");
                        });
                    });
                }
            }});
        }
    });
    var music = $("#music")[0];
    $(".musicBtn").click(function(){
        //var music = $("#music")[0];
        //document.getElementById("music");
        /*if(music.paused){
            music.play();
            $(".musicBtn").fadeIn(400);
            $(".musicBtnOff").fadeOut(400);
            //$(this).attr("src","img/day3/musicBtn.png")
        }else{*/
            music.pause();
            $(".musicBtn").fadeOut(400);
            $(".musicBtnOff").fadeIn(400);
            //$("this").attr("src","img/day3/musicBtnOff.png");
        //}
    });
    $(".musicBtnOff").click(function(){
        music.play();
        $(".musicBtn").fadeIn(400);
        $(".musicBtnOff").fadeOut(400);
    })

    $(".page1-Building").fadeIn(400,function(){
        $(".page1-flight").animate({width:"70%",left:"0"},{duration:2000})
    });
});
