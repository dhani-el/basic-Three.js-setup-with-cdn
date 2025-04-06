// import * as THREE from 'three';
import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.setAnimationLoop( animate );
// document.body.appendChild( renderer.domElement );

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const controls = new OrbitControls(camera,renderer.domElement)

// camera.position.z = 5;

// function animate() {

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

// 	renderer.render( scene, camera );

// }
const canvas = document.getElementById("c");
const renderer  = new THREE.WebGLRenderer({antialias:true,canvas});
const rendererDom = renderer.domElement;
const width = rendererDom.clientWidth;
const height = rendererDom.clientHeight;
const FOV = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 500
const camera =  new THREE.PerspectiveCamera(FOV,aspectRatio,near,far);
camera.position.z = 2;
const scene = new THREE.Scene();
const BoxGeometry = new THREE.BoxGeometry(1,1,1);
const BoxMaterial = new THREE.MeshBasicMaterial({color:"purple"});
const Mesh = new THREE.Mesh(BoxGeometry,BoxMaterial);
scene.add(Mesh);
const controls = new OrbitControls(camera,renderer.domElement)
renderer.render(scene,camera);
renderer.setAnimationLoop( animate );

{
	const needResize = rendererDom.width !== width || rendererDom.height !== height;
  if (needResize) {
    renderer.setSize(width, height, false);
  }
//   return needResize;
}

function animate() {

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}