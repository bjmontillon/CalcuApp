$(document).ready(function(){
var title = $("#maintitle");
var btn1= $("#btn1");
var btn2= $("#btn2");
var btn3= $("#btn3");
var calcu = $("#calcu");
var themeSelector = $("#theme-selector");
var outputDisplay = $("#displayOutput");
var keys = $("#keys");
var numColor= $("#btn, #one, #two, #three, #four, #five, #six, #seven, #eight, #nine, #zero, #add, #divide, #subtract, #mult, #decimal");
var res = $("#res");
var del = $("#del");
var equal = $("#equal");

  //theme 1  
    $(".theme1").click(function(){
          btn1.css("background-color","hsl(244, 67%, 91%");
          btn2.css("background-color","hsl(25, 98%, 40%)");
          btn3.css("background-color","hsl(176, 100%, 44%)");

          title.css("color", "white");
        
          calcu.css({"background-color": "hsl(222, 26%, 31%)", "color": "white"});
        
          themeSelector.css("background-color","hsl(223, 31%, 20%)");

          outputDisplay.css({"background-color": "hsl(224, 36%, 15%)", "color": "white"});
        
          keys.css("background-color", "rgba(37,45,68,255)");
        
          numColor.css({"color": "hsl(221, 14%, 31%)","background-color": "white", "box-shadow": "hsl(30, 25%, 89%)"});
        
          res.css({"color": "white","background-color": "#647299"});
        
          del.css({"color": "white","background-color": "#647299"});
        
          equal.css({"background-color": "hsl(6, 63%, 50%)", "color": "white"});
        //var btn = $("button");
        // btn.css("box-shadow","box-shadow: 0.3px 2px 6px black;")
    });
//theme 2
    $(".theme2").click(function(){
          btn1.css("background-color","hsl(244, 67%, 91%");
          btn2.css("background-color","hsl(25, 98%, 40%)");
          btn3.css("background-color","hsl(176, 100%, 44%)");

          title.css("color", "hsl(60, 10%, 19%");
        
          calcu.css({"background-color": "hsl(0, 0%, 90%)", "color": "hsl(60, 10%, 19%)"});
        
          themeSelector.css("background-color","hsl(0, 5%, 81%)");

          outputDisplay.css({"background-color": "hsl(0, 0%, 93%)", "color": "hsl(60, 10%, 19%"});
        
          keys.css({"background-color": "hsl(0, 5%, 81%)", "color": "hsl(60, 10%, 19%"});
        
          numColor.css({"background-color": "hsl(0, 5%, 81%)", "color":"hsl(60, 10%, 19%)"});
        
          res.css({"color": "white","background-color": "hsl(185, 42%, 37%"});
        
          del.css({"color": "white","background-color": "hsl(185, 42%, 37%"});
        
          equal.css({"background-color": "hsl(25, 98%, 40%)", "color": "white"});
        //var btn = $("button");
       // btn.css("box-shadow","box-shadow: 0.3px 2px 6px black;")
    });
//theme 3 
    $(".theme3").click(function(){
        btn1.css("background-color","hsl(244, 67%, 91%");
        btn2.css("background-color","hsl(25, 98%, 40%)");
        btn3.css("background-color","hsl(176, 100%, 44%)");

        title.css("color", "hsl(52, 100%, 62%)")
        
        calcu.css({"background-color": "hsl(268, 75%, 9%)", "color": "hsl(52, 100%, 62%)"});
      
        themeSelector.css("background-color","hsl(268, 71%, 12%)");

        outputDisplay.css({"background-color": "hsl(268, 71%, 12%", "color": "hsl(52, 100%, 62%)"});
      
        keys.css("background-color", "hsl(268, 47%, 21%)");
      
        numColor.css({"color": "hsl(52, 100%, 62%)","background-color": "hsl(268, 47%, 21%)", "box-shadow": "hsl(285, 93%, 57%)"});
      
        res.css({"color": "white","background-color": "hsl(281, 89%, 26%)"});
      
        del.css({"color": "white","background-color": "hsl(281, 89%, 26%)"});
      
        equal.css({"background-color": "hsl(176, 100%, 44%)", "color": "white"});
      //var btn = $("button");
    // btn.css("box-shadow","box-shadow: 0.3px 2px 6px black;")
  });

});