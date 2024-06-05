import * as THREE from './three.js';


// crea una escena
const scene = new THREE.Scene();
// crea una camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//crea un render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

//crea el elemento HTML para visualizar la escena 3D
document.body.appendChild( renderer.domElement );

// determina las dimensiones de la caja (ancho, alto, largo)
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

//crea un material para la geometria
const material = new THREE.MeshBasicMaterial( { color: 0xED467A } );

//dibuja la geometria con el material
const cube = new THREE.Mesh( geometry, material );

//agrega el cubo a la escena
scene.add( cube );

//determina la distancia desde la cual observamos nuestra geometria
camera.position.z = 5;

function animate() {
	//determina en que direccion gira x , y o ambos 
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}