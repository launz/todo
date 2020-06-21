var scene = new THREE.Scene();
var camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 0.1, 1000);
scene.add(camera);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild (renderer.domElement);

// create geometry
var geometry = new THREE.BoxGeometry(1,1,1);

// create a material, color or image texture
var material = new THREE.MeshBasicMaterial({color : 0xFFFFFF, wireframe: true});
var cube = new THREE.Mesh(geometry, material);
var cube2 = new THREE.Mesh(geometry, material);

cube2.position.x = 3;
scene.add(cube);
scene.add(cube2);

var size = 10;
var divisions = 10;

var grid = new THREE.BufferGeometry();

var gridVerts = [];

var gridX = [];
var gridY = [];

// var gridHelper = new THREE.GridHelper( size, divisions );
// gridHelper.geometry.rotateX(90);
// // var vector = new THREE.Vector3( 1, 1, 1 );
// // gridHelper.lookAt( vector );
// scene.add( gridHelper );

camera.zoom = 100;
camera.updateProjectionMatrix();
camera.position.y = 2;
camera.rotateX(THREE.Math.degToRad(-90));


var GridRefresh = function() {


}
// logic
var Update = function () {

};
// draw scene
var Render = function () {
  renderer.render(scene, camera);
};
// run llon (update, render, repeat)
var Loop = function (){
  requestAnimationFrame(Loop);
  Update();
  Render();
};

function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
			}

Loop();
