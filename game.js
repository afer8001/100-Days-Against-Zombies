import * as THREE from
"https://unpkg.com/three@0.166.1/build/three.module.js";


// ================= SCENE =================

const scene =
new THREE.Scene();

scene.background =
new THREE.Color(
0x87CEEB
);


// ================= CAMERA =================

const camera =
new THREE.PerspectiveCamera(

75,

window.innerWidth /
window.innerHeight,

0.1,

1000

);


// ================= RENDERER =================

const renderer =
new THREE.WebGLRenderer({

antialias:true

});

renderer.setSize(

window.innerWidth,

window.innerHeight

);

document.body.appendChild(
renderer.domElement
);


// ================= LIGHT =================

const ambient =
new THREE.AmbientLight(

0xffffff,

1

);

scene.add(
ambient
);

const sun =
new THREE.DirectionalLight(

0xffffff,

1

);

sun.position.set(

20,
30,
20

);

scene.add(
sun
);


// ================= RESIZE =================

window.addEventListener(

"resize",

()=>{

camera.aspect =

window.innerWidth /
window.innerHeight;

camera.updateProjectionMatrix();

renderer.setSize(

window.innerWidth,

window.innerHeight

);

}

);

// ================= GAME STATE =================

let playerHP = 100;

let currentDay = 1;


// ================= GROUND =================

const groundGeometry =
new THREE.BoxGeometry(

100,
1,
100

);

const groundMaterial =
new THREE.MeshLambertMaterial({

color:0x55aa55

});

const ground =
new THREE.Mesh(

groundGeometry,

groundMaterial

);

ground.position.y =
-0.5;

scene.add(
ground
);


// ================= PLAYER =================

const playerGeometry =
new THREE.BoxGeometry(

1,
2,
1

);

const playerMaterial =
new THREE.MeshLambertMaterial({

color:0x3366ff

});

const player =
new THREE.Mesh(

playerGeometry,

playerMaterial

);

player.position.set(

0,
1,
0

);

scene.add(
player
);


// ================= INPUT =================

const keys = {};

document.addEventListener(

"keydown",

(e)=>{

keys[e.code] = true;

}

);

document.addEventListener(

"keyup",

(e)=>{

keys[e.code] = false;

}

);


// ================= PLAYER SETTINGS =================

const PLAYER_SPEED = 0.15;

// ================= PLAYER MOVEMENT =================

function updatePlayer(){

    if(keys["KeyW"]){

        player.position.z -= PLAYER_SPEED;

    }

    if(keys["KeyS"]){

        player.position.z += PLAYER_SPEED;

    }

    if(keys["KeyA"]){

        player.position.x -= PLAYER_SPEED;

    }

    if(keys["KeyD"]){

        player.position.x += PLAYER_SPEED;

    }

}


// ================= THIRD PERSON CAMERA =================

function updateCamera(){

    camera.position.x =
    player.position.x;

    camera.position.y =
    player.position.y + 6;

    camera.position.z =
    player.position.z + 8;

    camera.lookAt(

        player.position.x,
        player.position.y + 1,
        player.position.z

    );

}
