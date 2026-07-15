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
