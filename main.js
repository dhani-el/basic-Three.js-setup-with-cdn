import * as THREE from "three";
import {OrbitControls} from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";


const gui = new GUI({closeFolders:true, width:340});
const transformationTweaks = gui.addFolder("Transformations");

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
}

function animate() {

// 	cube.rotation.x += 0.01;
// 	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

transformationTweaks.add(Mesh.position,"y")
  .min(1)
  .max(5)
  .step(0.1)
  .name("y transform");

  