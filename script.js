var robot= require("robotjs");
var fs = require("fs");


setTimeout(openSpotify, 2000);

function openSpotify(){
   robot.moveMouseSmooth(19, 697);
   robot.mouseClick();
   robot.typeStringDelayed("Spotify");
   robot.keyTap("enter"); 
   
   
   
   
   
   robot.moveMouseSmooth(639,630);
   robot.mouseClick();
   robot.moveMouseSmooth(1279,692);
   robot.mouseClick();
   setTimeout(openTelegram,2000);



}
function openTelegram(){
   robot.moveMouseSmooth(19, 697);
   setTimeout(function () {
    robot.mouseClick();
    robot.typeStringDelayed("Telegram");
    robot.keyTap("enter")
    robot.moveMouseSmooth(356,83);
    robot.mouseClick();
    robot.typeString("nitish");
    robot.keyTap("enter");
    robot.typeString("hi");
   
    robot.keyTap("enter");
    robot.moveMouseSmooth(1279,692);
    robot.mouseClick();

    setTimeout(openNotepad, 2000);

  }, 2000);

 

}
function openNotepad(){
    robot.moveMouseSmooth(19, 697);
    setTimeout(function(){
    robot.mouseClick();
    robot.typeString("notepad");
    robot.keyTap("enter");
    robot.moveMouseSmooth(639,300);
    robot.mouseClick();
    robot.typeStringDelayed("you are all set MR. shady");
    
    setTimeout(openChrome, 2000);
    }, 2000)
}

function openChrome(){

    robot.moveMouseSmooth(19, 697);
    setTimeout(function(){
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");
    setTimeout(openTabs, 2000);

    }, 2000)
}

function openTabs(){
   var rdata= fs.readFileSync("./chrome.json");
   var tabs = JSON.parse(rdata);

   for(var i=0;i< tabs.length;i++){
      for(var j=0;j <tabs[i].length;i++){
         robot.typeString(tabs[i][j]);
         robot.keyTap("enter");

         if(j< tabs[i].length -1){
            robot.keyToggle("control","up");
            robot.keyTap("enter");
            robot.keyToggle("control","dwon");
         } else if(i< tabs.length) {
            robot.keyToggle("control","down");
            robot.keyTap("n");
            robot.keyToggle("control","down");

         }
      
      
      }
   }
}