const express=require('express');
const app=express();
const http=require('http');
const socketio=require('socket.io');
const {Chess}=require('chess.js');
const path=require('path');
const { disconnect } = require('process');

const server=http.createServer(app);
const io=socketio(server);

const chess=new Chess();//all rules possible hya is se karskta hoo

let players={};
let current_player="W";//current plyer hya White 

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get('/',function(req,res){
    res.render("index");
})

io.on("connection",function(uniquesocket){
    console.log('connected to server');

    
    if(!players.white){
        players.white=uniquesocket.id;
        uniquesocket.emit("playerRole","w");
    }
    
    else if(!players.black){
        players.black=uniquesocket.id;
        uniquesocket.emit("playerRole","b");
    }
    else{
        uniquesocket.emit("spectatorRole");
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    uniquesocket.on("disconnect",function(){
        


   if(uniquesocket.id==players.white){
    delete players.white;
   }

else if(uniquesocket.id==players.black){
    delete players.black;
}
})




//validate move check
uniquesocket.on("move",function(move){


try {
    if(chess.turn()=="w" && uniquesocket.id !=players.white)return
    if(chess.turn()=="b" && uniquesocket.id !=players.black)return
    const result=chess.move(move);//kya move karna chata ho
    //agaer move hogya tofir
    if(result){
        current_player=chess.turn();
        io.emit("move",move);
        io.emit("boardState",chess.fen());//after khuch chal dena ka bad board ka kya state hya o nikal ka dega
    }
    else{
        console.log('Invalid move:',move);
        uniquesocket.emit("invalidMove",move);
    }
} catch (error) {
    console.log(error.message);
    uniquesocket.emit("invalidMove",move);
}








})





})

server.listen(3000);