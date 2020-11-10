var express=require("express"),app=express(),http=require("http"),server=http.createServer(app),

io = require("socket.io").listen(server);

app.use("/",express.static(__dirname + "/public" ));//このディレクトリの奴を使用可的な
server.listen(process.env.PORT || 3000, () => {
 console.log(`Server running.`);
});
//ここまでで鯖にはなってるらしいも
const stream=require("stream");
//var emi=require("events").EventEmitter;
//const ev=new emi.EventEmitter();
var fs=require("fs");
var x=new Array(0);//使ってない感
var y=new Array(0);
var x1=0;
var y1=0;
var x2=0;
var y2=0;
var x3=0;
var y3=0;
var x4=0;
var y4=0;



var grouproom=new Array(0);//部屋のキー
var timenum=0;
var confirmtimenum=0;

var user1="";
let count=0;
let total=0;
var ljson="";
var njson;
var tschunk;
var chunkarray=new Array(0);
var playernum=0;
var pone=false;//ログイン関係はコネクションの外に置く
var ptwo=false;//今使ってない感
var pthree=false;
var pfour=false;
var member=new Array(0);//部屋の人数制限
var allx=new Array(0);
for(let i=0;i<99;i++){
    var nallx=[];
    allx.push(nallx);
}

var ally=new Array(0);
for(let i=0;i<99;i++){
    var nally=[];
    ally.push(nally);
}
var group=[];//どの部屋に誰が何人いる
for(let i=0;i<99;i++){
    var newgroup=[];
    group.push(newgroup);
}

var connectingflag=new Array(0);
for(let i=0;i<99;i++){
    var ncflag=[];
    connectingflag.push(ncflag);
}


var orderfilename=new Array(0);
pschunk="";
const options={flags:"w",encoding:"utf8"};

io.sockets.on("connection",function(socket){



socket.on("disconnect",function(){
    setTimeout(confirm,15000);//この秒数で大丈夫か
io.sockets.emit("confirm",timenum);
timenum++;
if(timenum==999){
timenum=0;
}
});

socket.on("confirm",function(gname,timen){
connectingflag[timen][gname]=true;

});

function confirm(){
    for(let i=0;i<grouproom.length;i++){
        if(connectingflag[confirmtimenum][i]!=true){
            if(grouproom[i]==true&&connectingflag[confirmtimenum][i]!=true){
                console.log("disconnect"+i);
            }
            
            grouproom[i]=false;
            allx[i]=0;
            ally[i]=0;
            
            for(let j=0;j<group[i].length;j++){
            group[i][j]=false;
            }
        }
    }
    if(confirmtimenum>499){
        for(let i=0;i<99;i++){
        connectingflag[confirmtimenum-499][i]
        }
    }
confirmtimenum++;
if(confirmtimenum==999){
confirmtimenum=0;
}
}



socket.on("test",function(id){
    console.log(id);
io.sockets.emit("test",id);
});





socket.on("floadorder",function(jsoncp,gname){
orderfilename[gname]=jsoncp;
});

socket.on("fnameorder",function(){
io.sockets.emit("filenameorder");
});

socket.on("fcopyorder",function(gname,id){
io.sockets.emit("fcopyorder",orderfilename[gname],gname,id);
console.log(orderfilename[gname]);
});

socket.on("save",function(json,filename){
let sfn=filename+".txt";
console.log(sfn);
console.log("savejs");
console.log(json);
//console.log("stringy"+JSON.stringify(json));
const wstream1 =fs.createWriteStream(sfn,options);

var wjson=JSON.stringify(json);


//console.log("kore"+wjson);
wstream1.write(wjson);
wstream1.end("\n");
wstream1.on("error",(err)=>{
if(err){
console.log(err);
}
});

}
);
socket.on("filenamejudge",function(filename,push,id){
let fnjudge=filename.match(/^[A-Za-z0-9]+$/);
console.log("filename"+filename);
console.log("button"+push);
io.sockets.emit("filenamejudge",fnjudge,push,id);

});

socket.on("load",function(filename,id){
let lfn=filename+".txt";
console.log(lfn);
pschunk="";
console.log("loadjs");
const rstream1 =fs.createReadStream(lfn,{encoding:"utf8",highWaterMark:1024});
rstream1.on("readable",()=>{
//console.log("readable");
let chunk;
while((chunk=rstream1.read())!==null){
//console.log("read");
count++;
total+=chunk.length;
//console.log("chunk"+chunk);
//console.log("chunk8"+chunk.toString("utf8"));
//console.log("parse");
tschunk=chunk.toString("utf8");
pschunk+=tschunk;
//console.log(chunk.toString("utf8"));
//console.log("parseend");
//


for(let i=1;i<chunk.length-2;i++){
ljson+=chunk[i];
}

//console.log("ljp"+ljson);
//console.log("load");

njson=ljson.split(/(?<=\"),/);

//console.log("loadend");
}

});
//endで処理しないと謎の2回行動でnullにされたりする
rstream1.on("end",function(){
pschunk=JSON.parse(pschunk);
chunkarray[1]=pschunk;
console.log("chunk[0]"+chunkarray[1]);
console.log(pschunk);
io.sockets.emit("loaddraw",pschunk,id);
});

rstream1.on("error",function(){

console.log("エラーイベ");

});

});


socket.on("mlimitorder",function(group,limit){
member[group]=limit;
});





socket.on("getgroup",function(id){
    let emptyroom;
    let ggskip=false;
    for(let i=0;i<=grouproom.length;i++){
       if(grouproom[i]==true){
emptyroom=i;
       }else{
         emptyroom=i;
         grouproom[emptyroom]=true;
         ggskip=true;
        break;
       } 
    }
    if(ggskip==false){
        emptyroom+=1;
    grouproom[emptyroom]=true; 
    }
    console.log("getnumber"+emptyroom);
io.sockets.emit("getgroup",emptyroom,id);
});




socket.on("loginstart",function(){
//console.log("loginstart&mem="+member);
io.sockets.emit("loginstart",pone,ptwo,pthree,pfour,member);
}
);



//ここで言うindex.htmlからemitを受けてonが動くも
socket.on("login",function(pnum,membernum,groupname){//ログイン時処理
    console.log(groupname);

group[groupname][pnum]=true;
member[groupname]=membernum;
console.log(group);

//console.log("login"+pnum);
var fullroom=true;
for(let i=1;i<=membernum;i++){
    if(group[groupname][i]!=true){
        console.log(group[groupname][i]+""+i);
        fullroom=false;
        break;
    }
    console.log(group[groupname][i]+""+i);
}

if(membernum!=1){
if(fullroom==true){

io.sockets.emit("loginfinalfinal",groupname);
}
}else{
    io.sockets.emit("loginfinalfinal",groupname);
}
}
);

socket.on("memb",function(gname){

io.sockets.emit("memb",member[gname],group[gname],gname);
}
);


socket.on("loginfinal",function(){
console.log("final");
io.sockets.emit("loginfinal",pone,ptwo,pthree,pfour);
}
);

socket.on("loginfinalfinal",function(){
console.log("emitfinalfinal");
io.sockets.emit("loginfinalfinal");
}
);


socket.on("psend",function(pnum,x,y,gname){//もはやjsonで一括管理案もある

    allx[gname][pnum]=x;
ally[gname][pnum]=y;
io.sockets.emit("sendend",pnum,allx[gname][pnum],ally[gname][pnum],gname);
   }); 
  


}
);
