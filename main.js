import './style.css';
import * as THREE from 'three';

// first scene
const scene = new THREE.Scene();
// second camera => fieldOfView in degrees, aspectRatio viewer screen, viewFrustum control what to view
const fieldOfView = 75;
const aspectRatio = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, 0.1, 1000);
// third
const renderer = new THREE.WebGL1Renderer({
	canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
renderer.render(scene, camera);

// add obejct
const radius = 10;
const degree = 0;
const geometry = new THREE.TetrahedronGeometry(radius, degree);
// no light source
// const material = new THREE.MeshBasicMaterial({
// 	color: 0xff6347,
// 	wireframe: true,
// });
const material = new THREE.MeshStandardMaterial({
	color: 0xff6347,
});
const polyhedron = new THREE.Mesh(geometry, material);
scene.add(polyhedron);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helper
// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(gridHelper, lightHelper);

const animate = () => {
	requestAnimationFrame(animate);

	polyhedron.rotation.x += 0.01;
	polyhedron.rotation.y += 0.005;
	polyhedron.rotation.z += 0.01;

	renderer.render(scene, camera);
};

animate();
