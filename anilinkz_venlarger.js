/**
  The MIT License (MIT)

  Copyright © 2015 Martin Pitak

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/

// ==UserScript==
// @name         anilinkz video enlarger
// @namespace    https://github.com/EnyMan/anilinkz-video-enlarger
// @version      0.2.3
// @description  Adds buttom to vide pages that lets you anlarge the videos for better viewing pleasure. By default it enlarges the video 1.5 times = the video is 125% bigger (thus better right?).
// @author       Martin Pitak (EnyMan)
// @include      /http:\/\/anilinkz\.tv\/.*(episode|special).*/
// @updateURL    https://raw.githubusercontent.com/EnyMan/anilinkz-video-enlarger/master/anilinkz_venlarger.js
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
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
            $('iframe').filter(function(i, e) {return /auengine.com/.test(e.src);}).attr("height", bheight).attr("width", bwidth);
            $('iframe').filter(function(i, e) {return /www.mp4upload.com/.test(e.src);}).attr("height", bheight).attr("width", bwidth);
            $('iframe').filter(function(i, e) {return /www.videonest.net/.test(e.src);}).attr("height", bheight).attr("width", bwidth);
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
                $('iframe').filter(function(i, e) {return /auengine.com/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
                $('iframe').filter(function(i, e) {return /www.mp4upload.com/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
                $('iframe').filter(function(i, e) {return /www.videonest.net/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
                $('#player').attr("style", '');
                $(".mous-button").attr("style", "position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/expand.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");
            });
        } else {
            $('#lightsout').fadeOut('slow');
            $('iframe').filter(function(i, e) {return /arkvid.tv/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
            $('iframe').filter(function(i, e) {return /auengine.com/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
            $('iframe').filter(function(i, e) {return /www.mp4upload.com/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
            $('iframe').filter(function(i, e) {return /www.videonest.net/.test(e.src);}).attr("height", dheight).attr("width", dwidth);
            $('#player').attr("style", '');
            $(".mous-button").attr("style", "position: fixed; top: 25%; height: 50px; width: 50px;background-image: url(https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/512/expand.png);background-size: 100% 100%;background-color: red;border: black 2px solid;-webkit-border-radius: 8px;z-index: 84;").attr("class","mous-button");
        }
    });
});
