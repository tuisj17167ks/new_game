var express = require("express"),
  app = express(),
  http = require("http"),
  server = http.createServer(app),
  io = require("socket.io").listen(server);

app.use("/", express.static(__dirname + "/public")); //このディレクトリの奴を使用可的な
server.listen(8081);

//!ここまでで鯖にはなってるらしいも

//=========================

var fs = require("fs");
var text = "テスト出力";

var strat = new Date(); //時間変数
var set; //起動時間格納用変数

function da() {
  var year = strat.getFullYear();
  var mon = strat.getMonth() + 1;
  var day = strat.getDate();
  var hour = strat.getHours();
  var min = strat.getMinutes();
  var sec = strat.getSeconds();
  //成型して表示
  set = year + "_" + mon + "_" + day + "_" + hour + "_" + min + "_" + sec;
}
var player = function (id, x, y, time) {
  this.id = id;
  this.x = x;
  this.y = y;
  this.time = time;
};

let p_counter = 0;
var p_data = [];
da();
let sleep_time = 0;
// ビジーwaitを使う方法
function sleep(waitMsec) {
  var startMsec = new Date();
 
  // 指定ミリ秒間だけループさせる（CPUは常にビジー状態）
  while (new Date() - startMsec < waitMsec);
}
io.sockets.on("connection", function (socket) {
  socket.on("In", function () {
    p_counter = p_counter + 1;
    console.log(p_counter + "P IN");
    if (p_counter == 1) {
      p_data.push(new player(1, 1, 1, 0));
      io.sockets.emit("In", p_data);
      console.log(p_data);
      fs.writeFileSync("data/" + set + ".csv", "id,x,y,time\n");
    }
    else if (p_counter == 2) {
      p_data.push(new player(2, 19, 19, 0));
      io.sockets.emit("In", p_data);
      console.log(p_data);
    }
    else if (p_counter == 3) {
      p_data.push(new player(3, 19, 1, 0));
      io.sockets.emit("In", p_data);
      console.log(p_data);
    }
    else if (p_counter == 4) {
      p_data.push(new player(4, 1, 19, 0));
      io.sockets.emit("In", p_data);
      console.log(p_data);
    }
    else {
      io.sockets.emit("control");
      console.log("device add");
    }
  });
  socket.on("Data", function (data) {
    if (data.id) {
      p_data[data.id - 1] = data;
    }
    sleep(sleep_time);
    //console.log(sleep_time);
    io.sockets.emit("Data", p_data);
    try {
      fs.appendFileSync(
        "data/" + set + ".csv",
        data.id + "," + data.x + "," + data.y + "," + data.time + "\n"
      );
      //console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
  socket.on("HIT", function (id) {
    sleep(sleep_time);
    io.sockets.emit("damege", id);
  });
  socket.on("discomfort", function (id, time) {
    fs.writeFileSync(
      "data/" + set + "Discomfort_Botton" + ".csv",
      id + "," + time + "\n"
    );
  });
  socket.on("item_get",function(id){
    sleep(sleep_time);
    io.sockets.emit("item_del",id);
  });
});
