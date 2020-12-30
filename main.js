const { fabric } = require("./fabric");

var canvas= new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
var playerobject="";
var blockobject="";
function playeruptade(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHieght(140);
        playerobject.set({top:player_y,left:player_x});
        canvas.add(playerobject);
    });
}
