var sceny=[];

var mapData;
var mapI=[];

var aktywna=9;

var fade=true; // true -> fadeIn, false -> fadeOut
var fadeView=0;
var next={s:"", w:0};

var value = 0;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  
  mapData=
  [{  "floorNumber" : 0,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 2,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 8,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 5,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 6,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 7,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 16,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 6,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 8,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 9,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 10,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 9,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 8,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 10,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 1,
          "sceneNumber" : 11,
          "pictureNumber" : 4},  
        
          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 8,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 11,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 11,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 10,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 12,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 0,
  "sceneNumber" : 12,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 11,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 1,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {  "floorNumber" : 1,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 2,
          "sceneNumber" : 3,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 4,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 12,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 2,
          "pictureNumber" : 1}
          ]},

  {"floorNumber" : 1,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 3,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 11,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 2,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 1,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 5,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 9,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 6,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 4,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 5,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 8,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 6,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 7,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 9,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 4,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 10,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 10,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 9,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 11,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 3,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 2,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 12,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 10,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 12,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 14,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 1,
          "sceneNumber" : 11,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 13,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 13,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 12,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 14,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 12,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 15,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 15,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 16,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 14,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 1,
  "sceneNumber" : 16,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 2,
          "sceneNumber" : 7,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 17,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 0,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 15,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 01,
  "sceneNumber" : 17,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 16,
          "pictureNumber" : 4}
          ]},
  {  "floorNumber" : 2,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 2,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 3,
          "sceneNumber" : 2,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 1,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 11,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 3,
          "sceneNumber" : 9,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 5,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 5,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 3,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 8,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 1,
          "sceneNumber" : 16,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 6,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 2,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 7,
          "pictureNumber" : 4}
          ]},
  {  "floorNumber" : 3,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 3,
          "sceneNumber" : 2,
          "pictureNumber" : 4}
          ]},

  {"floorNumber" : 3,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 4,
          "sceneNumber" : 2,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 3,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 3,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 9,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 6,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 7,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 7,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 6,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 8,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 9,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 3,
  "sceneNumber" : 9,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 2,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : true,
          "floorNumber" : 4,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 8,
          "pictureNumber" : 3}
          ]},
  {  "floorNumber" : 4,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 4,
          "sceneNumber" : 2,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 4,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 5,
          "sceneNumber" : 3,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 2,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 4,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 4,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 3,
          "sceneNumber" : 9,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 5,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 4,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 4,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 5,
          "pictureNumber" : 3}
          ]},
  {  "floorNumber" : 5,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 5,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 6,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 10,
          "pictureNumber" : 2}
          ]},

  {"floorNumber" : 5,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 6,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 4,
          "sceneNumber" : 2,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 4,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 3,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 1,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 4,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 8,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 9,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 4,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 9,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 8,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 10,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 5,
  "sceneNumber" : 10,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 9,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 1,
          "pictureNumber" : 2}
          ]},
  {  "floorNumber" : 6,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 7,
          "sceneNumber" : 5,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 2,
          "pictureNumber" : 1}
          ]},

  {"floorNumber" : 6,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 3,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 4,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 2,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 7,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 8,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 4,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 7,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 6,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 5,
          "sceneNumber" : 3,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 8,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 7,
          "sceneNumber" : 7,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 6,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {  "floorNumber" : 7,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 2,
          "pictureNumber" : 3}
          ]},

  {"floorNumber" : 7,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 4,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 3,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 8,
          "sceneNumber" : 4,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 2,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 4,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 3,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 8,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 8,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 4,
          "pictureNumber" : 1}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 7,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 6,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 9,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 8,
          "sceneNumber" : 7,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 5,
          "pictureNumber" : 4},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 9,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 7,
  "sceneNumber" : 9,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 8,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {  "floorNumber" : 8,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 5,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : true,
          "floorNumber" : 9,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 2,
          "pictureNumber" : 1}
          ]},

  {"floorNumber" : 8,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 3,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 4,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 2,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : true,
          "floorNumber" : 9,
          "sceneNumber" : 2,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 5,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 2,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 4,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 7,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 7,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 8,
          "pictureNumber" : 4},

          {"stairs" : true,
          "floorNumber" : 9,
          "sceneNumber" : 6,
          "pictureNumber" : 3}
          ]},
  {"floorNumber" : 8,
  "sceneNumber" : 8,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 7,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {  "floorNumber" : 9,
  "sceneNumber" : 1,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 2,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 2,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 4,
          "pictureNumber" : 3},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 1,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 3,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 3,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 4,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 2,
          "pictureNumber" : 2}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 4,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 1,
          "pictureNumber" : 1},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 3,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 5,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 6,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 6,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : 8,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 7,
          "pictureNumber" : 2},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 5,
          "pictureNumber" : 4}
          ]},
  {"floorNumber" : 9,
  "sceneNumber" : 7,
  "pictures" : [  {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : null,
          "sceneNumber" : null,
          "pictureNumber" : null},

          {"stairs" : false,
          "floorNumber" : 9,
          "sceneNumber" : 6,
          "pictureNumber" : 4}
          ]}
]
  
  next={s:aktywna+1, w:0};
  
  var i=0;
  while(sceny.length != mapData.length)
  {
    sceny.push(new Sceene(mapData[i]));
    mapI.push(mapData[i].floorNumber*100+mapData[i].sceneNumber);
    i++;
  }
  sceny[aktywna].shadow=0;
} 

function draw() { 
  background(0);
  
  if(!sceny[aktywna].fade && aktywna!=mapI.indexOf(next.s))
  {
    aktywna=mapI.indexOf(next.s);
    fadeView=next.w-1;
    sceny[aktywna].fade=true;
    fade=true;
  }
  if(fade && sceny[aktywna].fade) sceny[aktywna].fadeIn(fadeView);
  else if((!fade) && sceny[aktywna].fade) sceny[aktywna].fadeOut();
  sceny[aktywna].update();
}

function mouseClicked()
{
  if(value===0)
  {
    temp=sceny[aktywna].click(mouseX, mouseY);
    if( (temp!=false) )
    {
      sceny[aktywna].fade=true;
      fade=!fade;
      next.s=temp.newSceen;
      next.w=temp.newView;
      fade=false;
    }
    else{
    console.log("pozycja "+ sceny[aktywna]);}
  }
}

function mouseWheel(del)
{
  sceny[aktywna].scale(-del.delta/2);
}
