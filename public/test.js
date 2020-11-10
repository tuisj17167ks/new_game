//初期座標
var x;
var y;
var way;

//ステージの生成
var maze1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var maze2 = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0];
var maze3 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0];
var maze4 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0];
var maze5 = [0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0];
var maze6 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];
var maze7 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0];
var maze8 = [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0];
var maze9 = [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0];
var maze10 = [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0];
var maze11 = [0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
var maze12 = [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0];
var maze13 = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0];
var maze14 = [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0];
var maze15 = [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0];
var maze16 = [0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0];
var maze17 = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0];
var maze18 = [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0];
var maze19 = [0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0];
var maze20 = [0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0];
var maze21 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

var maze = [
  maze1,
  maze2,
  maze3,
  maze4,
  maze5,
  maze6,
  maze7,
  maze8,
  maze9,
  maze10,
  maze11,
  maze12,
  maze13,
  maze14,
  maze15,
  maze16,
  maze17,
  maze18,
  maze19,
  maze20,
  maze21
];

// ------------------------------------------------------------
// ?キーボードを押したときに実行されるイベント
// ------------------------------------------------------------
document.onkeydown = function (e) {
  if (e.keyCode == 32) {
    // if (game_start == true) {
    shot();
    //}
  }
  //upボタン
  if (e.keyCode == 38) {
    //if (game_start == true) {
    if (way == "up") {
      up();
    }

    if (way == "right") {
      right();
    }

    if (way == "left") {
      left();
    }

    if (way == "down") {
      down();
    }
  }
  //}
  //leftボタン
  if (e.keyCode == 37) {
    //if (game_start == true) {
    //!
    if (way == "up") {
      way = "left";
      console.log(way);
      vew();
    } else if (way == "right") {
      way = "up";
      console.log(way);
      vew();
    } else if (way == "left") {
      way = "down";
      console.log(way);
      vew();
    } else if (way == "down") {
      way = "right";
      console.log(way);
      vew();
    }
    // }
  }
  //rightボタン
  if (e.keyCode == 39) {
    //if (game_start == true) {
    //!
    if (way == "up") {
      way = "right";
      console.log(way);
      vew();
    } else if (way == "right") {
      way = "down";
      console.log(way);
      vew();
    } else if (way == "left") {
      way = "up";
      console.log(way);
      vew();
    } else if (way == "down") {
      way = "left";
      console.log(way);
      vew();
    }
    //}
  }
  //downボタン
  if (e.keyCode == 40) {
    //if (game_start == true) {
    //!
    if (way == "down") {
      way = "left";
      console.log(way);
      vew();
    } else if (way == "right") {
      way = "left";
      console.log(way);
      vew();
    } else if (way == "left") {
      way = "right";
      console.log(way);
      vew();
    } else if (way == "down") {
      way = "up";
      console.log(way);
      vew();
    }
    // }
  }
};

//?Shotボタン洗濯時
function shot() {
  //canvas初期起動
  var rect_canvas = document.getElementById("shot");
  var ctx = rect_canvas.getContext("2d");
  ctx.beginPath();

  // 画像読み込み
  const chara = new Image();
  chara.src = "image/shot.png"; // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(
      chara,
      640 / 2 + Math.random() * 20,
      480 / 3 + Math.random() * 20
    );
  };
  console.log("Shot!!");
  if (way == "up") {
    if (maze[y - 1][x] == 3 || maze[y - 1][x] == 4 || maze[y - 1][x] == 5) {
      maze[y - 1][x] = 1;
    }
    if (maze[y - 2][x] == 3 || maze[y - 2][x] == 4 || maze[y - 2][x] == 5) {
      maze[y - 2][x] = 1;
    }
    if (maze[y - 3][x] == 3 || maze[y - 3][x] == 4 || maze[y - 3][x] == 5) {
      maze[y - 3][x] = 1;
    }
    maze_vew();
  }

  if (way == "down") {
    if (maze[y + 1][x] == 3 || maze[y + 1][x] == 4 || maze[y + 1][x] == 5) {
      maze[y + 1][x] = 1;
    }
    if (maze[y + 2][x] == 3 || maze[y + 2][x] == 4 || maze[y + 2][x] == 5) {
      maze[y + 2][x] = 1;
    }
    if (maze[y + 3][x] == 3 || maze[y + 3][x] == 4 || maze[y + 3][x] == 5) {
      maze[y + 3][x] = 1;
    }
    maze_vew();
  }
  if (way == "left") {
    if (maze[y][x - 1] == 3 || maze[y][x - 1] == 4 || maze[y][x - 1] == 5) {
      maze[y][x - 1] = 1;
    }
    if (maze[y][x - 2] == 3 || maze[y][x - 2] == 4 || maze[y][x - 2] == 5) {
      maze[y][x - 2] = 1;
    }
    if (maze[y][x - 3] == 3 || maze[y][x - 3] == 4 || maze[y][x - 3] == 5) {
      maze[y][x - 3] = 1;
    }
    maze_vew();
  }
  if (way == "right") {
    if (maze[y][x + 1] == 3 || maze[y][x + 1] == 4 || maze[y][x + 1] == 5) {
      maze[y][x + 1] = 1;
    }
    if (maze[y][x + 2] == 3 || maze[y][x + 2] == 4 || maze[y][x + 2] == 5) {
      maze[y][x + 2] = 1;
    }
    if (maze[y][x + 3] == 3 || maze[y][x + 3] == 4 || maze[y][x + 3] == 5) {
      maze[y][x + 3] = 1;
    }
    maze_vew();
  }
  ctx.clearRect(0, 0, 640, 640);
}

function up() {
  //console.log("up");
  if (
    maze[y - 1][x] == 1 ||
    maze[y - 1][x] == 3 ||
    maze[y - 1][x] == 4 ||
    maze[y - 1][x] == 5
  ) {
    y--;
    maze[y][x] = 2;
    maze[y + 1][x] = 1;

    //console.log("up");
    vew();
  }
}

function down() {
  //console.log("down");
  if (maze[y + 1][x] == 1) {
    y++;
    maze[y][x] = 2;
    maze[y - 1][x] = 1;
    //console.log("down");
    vew();
  }
}

function left() {
  //console.log("left");
  if (maze[y][x - 1] == 1) {
    x--;
    maze[y][x] = 2;
    maze[y][x + 1] = 1;
    //console.log("left");
    vew();
  }
}

function right() {
  // console.log("right");
  if (maze[y][x + 1] == 1) {
    x++;
    maze[y][x] = 2;
    maze[y][x - 1] = 1;
    //console.log("right");
    vew();
  }
}

//========================
//背景表示
//========================
var bac_img = [
  "sucrin.jpg",
  "sucrin2.jpg",
  "sucrin3.jpg",
  "sucrin4.jpg",
  "sucrin5.jpg",
];

function bac_vew() {
  //深度確認
  //up
  //down
  //left
  //right
  //壁確認
  //深度3以上の場合
  //右
  //ケース１
  //ケース２
  //ケース３
  //ケース４
  //ケース５
  //左
  //ケース１
  //ケース２
  //ケース３
  //ケース４
  //ケース５
  //深度3の場合
  //右
  //ケース１
  //ケース２
  //ケース３
  //ケース４
  //ケース５
  //左
  //ケース１
  //ケース２
  //ケース３
  //ケース４
  //ケース５
  //深度2の場合
  //右
  //ケース１
  //ケース２
  //ケース３
  //左
  //ケース１
  //ケース２
  //ケース３
  //深度1の場合
  //右
  //ケース１
  //ケース２
  //左
  //ケース１
  //ケース２
}

function vew() {
  //canvas初期起動
  var rect_canvas = document.getElementById("background");
  var ctx = rect_canvas.getContext("2d");
  //ctx.clearRect(0, 0, 300, 300);
  ctx.beginPath();
  //ctx.clearRect(0, 0, 640, 480);
  //背景をなるべく消したかったがちかちかするので却下

  /*

  if (way == "up") {
    if (maze[y - 1][x] == 1) {
      if (maze[y - 2][x] == 1) {
        if (maze[y - 3][x] == 1) {
          image = image + "none/";
          if (maze[y - 3][x + 1] == 1 && maze[y - 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y - 3][x + 1] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y - 2][x + 1] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y - 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y - 3][x - 1] == 1 && maze[y - 1][x - 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y - 3][x - 1] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y - 2][x - 1] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y - 1][x - 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        }
        else {
          image = image + "3rd/";
          if (maze[y - 3][x + 1] == 1 && maze[y - 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y - 3][x + 1] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y - 2][x + 1] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y - 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y - 3][x - 1] == 1 || maze[y - 1][x - 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y - 3][x - 1] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y - 2][x - 1] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y - 1][x - 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        }
      }
      else {
        image = image + "2nd/";
        if (maze[y - 2][x + 1] == 1) {
          ri_image = ri_image + "sucrin2.jpg";
        } else if (maze[y - 1][x + 1] == 1) {
          ri_image = ri_image + "sucrin3.jpg";
        } else {
          ri_image = ri_image + "sucrin1.jpg";
        }

        if (maze[y - 2][x - 1] == 1) {
          le_image = le_image + "sucrin2.jpg";
        } else if (maze[y - 1][x - 1] == 1) {
          le_image = le_image + "sucrin3.jpg";
        } else {
          le_image = le_image + "sucrin1.jpg";
        }
      }
    }
    else {
      image = image + "1st/";
      if (maze[y][x - 1] == 1) {
        le_image = le_image + "sucrin2.jpg";
      } else {
        le_image = le_image + "sucrin1.jpg";
      }
      if (maze[y][x + 1] == 1) {
        ri_image = ri_image + "sucrin2.jpg";
      } else {
        ri_image = ri_image + "sucrin1.jpg";
      }
    }
  }
  if (way == "down") {
    if (maze[y + 1][x] == 1) {
      if (maze[y + 2][x] == 1) {
        if (maze[y + 3][x] == 1) {
          image = image + "none/";
          //謎のエラー
          if (maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }

          if (maze[y + 3][x - 1] == 1 && maze[y + 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y + 3][x - 1] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y + 2][x - 1] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y + 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }
        } else {
          image = image + "3rd/";
          if (maze[y + 3][x - 1] == 1 && maze[y + 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y + 3][x - 1] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y + 2][x - 1] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y + 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y - 3][x + 1] == 1 || maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y - 3][x + 1] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y - 2][x + 1] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        }
      } else {
        image = image + "2nd/";
        if (maze[y + 2][x + 1] == 1) {
          ri_image = ri_image + "sucrin2.jpg";
        } else if (maze[y + 1][x + 1] == 1) {
          ri_image = ri_image + "sucrin3.jpg";
        } else {
          ri_image = ri_image + "sucrin1.jpg";
        }

        if (maze[y + 2][x - 1] == 1) {
          le_image = le_image + "sucrin2.jpg";
        } else if (maze[y + 1][x - 1] == 1) {
          le_image = le_image + "sucrin3.jpg";
        } else {
          le_image = le_image + "sucrin1.jpg";
        }
      }
    } else {
      image = image + "1st/";
      if (maze[y][x + 1] == 1) {
        le_image = le_image + "sucrin2.jpg";
      } else {
        le_image = le_image + "sucrin1.jpg";
      }
      if (maze[y][x - 1] == 1) {
        ri_image = ri_image + "sucrin2.jpg";
      } else {
        ri_image = ri_image + "sucrin1.jpg";
      }
    }
  }
  if (way == "left") {
    if (maze[y][x - 1] == 1) {
      if (maze[y][x - 2] == 1) {
        if (maze[y][x - 3] == 1) {
          image = image + "none/";
          if (maze[y - 1][x - 3] == 1 && maze[y - 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y - 1][x - 3] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y - 1][x - 2] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y - 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y + 1][x - 3] == 1 && maze[y + 1][x - 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y + 1][x - 3] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y + 1][x - 2] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y + 1][x - 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        } else {
          image = image + "3rd/";
          if (maze[y - 1][x - 3] == 1 && maze[y - 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y - 1][x - 3] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y - 1][x - 2] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y - 1][x - 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y + 1][x - 3] == 1 && maze[y + 1][x - 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y + 1][x - 3] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y + 1][x - 2] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y + 1][x - 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        }
      } else {
        image = image + "2nd/";
        if (maze[y + 1][x - 2] == 1) {
          ri_image = ri_image + "sucrin2.jpg";
        } else if (maze[y + 1][x - 1] == 1) {
          ri_image = ri_image + "sucrin3.jpg";
        } else {
          ri_image = ri_image + "sucrin1.jpg";
        }

        if (maze[y - 1][x + 2] == 1) {
          le_image = le_image + "sucrin2.jpg";
        } else if (maze[y - 1][x + 1] == 1) {
          le_image = le_image + "sucrin3.jpg";
        } else {
          le_image = le_image + "sucrin1.jpg";
        }
      }
    } else {
      image = image + "1st/";
      if (maze[y + 1][x] == 1) {
        le_image = le_image + "sucrin2.jpg";
      } else {
        le_image = le_image + "sucrin1.jpg";
      }
      if (maze[y - 1][x] == 1) {
        ri_image = ri_image + "sucrin2.jpg";
      } else {
        ri_image = ri_image + "sucrin1.jpg";
      }
    }
  }
  if (way == "right") {
    if (maze[y][x + 1] == 1) {
      if (maze[y][x + 2] == 1) {
        if (maze[y][x + 3] == 1) {
          
          image = image + "none/";
          if (maze[y + 1][x + 3] == 1 && maze[y + 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y + 1][x + 3] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y + 1][x + 2] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y + 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y - 1][x + 3] == 1 && maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y - 1][x + 3] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y - 1][x + 2] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        } else {
          image = image + "3rd/";
          if (maze[y + 1][x + 3] == 1 && maze[y + 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin5.jpg";
          } else if (maze[y + 1][x + 3] == 1) {
            ri_image = ri_image + "sucrin2.jpg";
          } else if (maze[y + 1][x + 2] == 1) {
            ri_image = ri_image + "sucrin3.jpg";
          } else if (maze[y + 1][x + 1] == 1) {
            ri_image = ri_image + "sucrin4.jpg";
          } else {
            ri_image = ri_image + "sucrin1.jpg";
          }

          if (maze[y - 1][x + 3] == 1 && maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin5.jpg";
          } else if (maze[y - 1][x + 3] == 1) {
            le_image = le_image + "sucrin2.jpg";
          } else if (maze[y - 1][x + 2] == 1) {
            le_image = le_image + "sucrin3.jpg";
          } else if (maze[y - 1][x + 1] == 1) {
            le_image = le_image + "sucrin4.jpg";
          } else {
            le_image = le_image + "sucrin1.jpg";
          }
        }
      } else {
        image = image + "2nd/";
        if (maze[y - 1][x + 2] == 1) {
          ri_image = ri_image + "sucrin2.jpg";
        } else if (maze[y - 1][x + 1] == 1) {
          ri_image = ri_image + "sucrin3.jpg";
        } else {
          ri_image = ri_image + "sucrin1.jpg";
        }

        if (maze[y + 1][x - 2] == 1) {
          le_image = le_image + "sucrin2.jpg";
        } else if (maze[y + 1][x - 1] == 1) {
          le_image = le_image + "sucrin3.jpg";
        } else {
          le_image = le_image + "sucrin1.jpg";
        }
      }
    } else {
      image = image + "1st/";
      if (maze[y - 1][x] == 1) {
        le_image = le_image + "sucrin2.jpg";
      } else {
        le_image = le_image + "sucrin1.jpg";
      }
      if (maze[y + 1][x] == 1) {
        ri_image = ri_image + "sucrin2.jpg";
      } else {
        ri_image = ri_image + "sucrin1.jpg";
      }
    }
  }
    // 画像読み込み
  //迷路背景描写
  const chara = new Image();

  chara.src = image + le_image; // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };

  // 画像読み込み
  const chara1 = new Image();
  chara1.src = image + ri_image; // 画像のURLを指定
  chara1.onload = () => {
    ctx.drawImage(chara1, 320, 0);
  };
  image = "image/bacimage/";
  ri_image = "right/";
  le_image = "left/";
  maze_vew();
}
*/
}
//========================
//迷路生成（描写）
//========================
function maze_vew() {
  //canvas初期起動
  var rect_canvas = document.getElementById("rectangle");
  var ctx = rect_canvas.getContext("2d");
  ctx.clearRect(0, 0, 640, 640);
  ctx.beginPath();

  //座標出力
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      //壁
      if (maze[i][j] == 0) {
        //色を指定する
        ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        ctx.fillStyle = "rgb(0,0,0)"; //塗りつぶしの色は赤
        // 四角を描く
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
      //自機
      if (maze[i][j] == 2) {
        //色を指定する
        //ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        //ctx.fillStyle = "rgb(00,255,00)"; //塗りつぶしの色は赤
        // 四角を描く
        //ctx.fillRect(j * 10, i * 10, 10, 10);

        //canvas初期起動
        var rect_canvas = document.getElementById("shot");
        var ctx = rect_canvas.getContext("2d");
        ctx.clearRect(0, 0, 300, 300);
        ctx.beginPath();

        // 画像読み込み
        const chara = new Image();

        //console.log("test")
        if (way == "up") {
          chara.src = "image/charaimage/player_up.png"; // 画像のURLを指定
          ctx.drawImage(chara, j * 10, i * 10);
        } else if (way == "left") {
          chara.src = "image/charaimage/player_left.png";
          ctx.drawImage(chara, j * 10, i * 10);
        } else if (way == "right") {
          chara.src = "image/charaimage/player_right.png";
          ctx.drawImage(chara, j * 10, i * 10);
        } else if (way == "down") {
          chara.src = "image/charaimage/player_down.png";
          ctx.drawImage(chara, j * 10, i * 10);
        } else {
          ctx.fillStyle = "rgb(00,255,00)"; //塗りつぶしの色は赤
          // 四角を描く
          ctx.fillRect(j * 10, i * 10, 10, 10);
          ctx.drawImage(chara, j * 10, i * 10);
        }
      }

      //以下他プレーヤー
      if (maze[i][j] == 3) {
        //色を指定する
        ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        ctx.fillStyle = "rgb(00,00,255)"; //塗りつぶしの色は赤
        // 四角を描く
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }

      if (maze[i][j] == 4) {
        //色を指定する
        ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        ctx.fillStyle = "rgb(255,00,255)"; //塗りつぶしの色は赤
        // 四角を描く
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }

      if (maze[i][j] == 5) {
        //色を指定する
        ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        ctx.fillStyle = "rgb(00,255,255)"; //塗りつぶしの色は赤
        // 四角を描く
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }

      if (maze[i][j] == 6) {
        //色を指定する
        ctx.strokeStyle = "rgb(00,00,00)"; //枠線の色は青
        ctx.fillStyle = "rgb(255,255,0)"; //塗りつぶしの色は赤
        // 四角を描く
        ctx.fillRect(j * 10, i * 10, 10, 10);
      }
    }
  }
}
