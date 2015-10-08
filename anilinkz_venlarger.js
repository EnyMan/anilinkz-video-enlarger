// ==UserScript==
// @name         anilinkz video enlarger
// @namespace    https://github.com/EnyMan/anilinkz-video-enlarger
// @version      0.1
// @description  Adds buttom to vide pages that lets you anlarge the videos for better wieving pleasure. By default it enlarges the video 1.5 times = the video is 50% bigger (thus better right?).
// @author       EnyMan
// @include      /http:\/\/anilinkz\.tv\/.*episode.*/
// @grant        none
// ==/UserScript==

var dheight = 445;
var dwidth = 712;

var bheight = dheight * 1.5;
var bwidth = dwidth * 1.5;

$(function() {    
    $("<div> </div>").appendTo("body").attr("style","position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/expand.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");

    $(".mous-button").click(function(){
        if ( $('#player').css("position") != 'absolute' ) {
            $('#lightsout').fadeIn('slow');
            $('iframe').filter(function(i, e) {return /arkvid.tv/.test(e.src);}).attr("height", bheight).attr("width", bwidth);
            $('#player').attr("style", 'position: absolute');
            $('#player').css('left',$('#wrapper').width()/2 - $('#player').width()/2);
            $('#chatango').empty(); $('.kwarta').empty();
            var playerheight = $("#player").height();
            var winheight = $(window).height();
            var playeroffset = $("#player").offset().top;
            var watchscroll = playeroffset - ((winheight - playerheight) / 2);
            $('#lightsout').fadeIn('slow');
            $('html,body').stop().animate({ scrollTop: watchscroll }, "slow");
            $(".mous-button").attr("style", "position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/collapse.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");
            $("#lightsout").click(function(){	
                $('#lightsout').fadeOut('slow');
                $('iframe').filter(function(i, e) {return /arkvid.tv/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
                $('#player').attr("style", '');
                $(".mous-button").attr("style", "position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/expand.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");
            });
        } else {
            $('#lightsout').fadeOut('slow');
            $('iframe').filter(function(i, e) {return /arkvid.tv/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
            $('#player').attr("style", '');
            $(".mous-button").attr("style", "position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/expand.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");
        }
    });
});
