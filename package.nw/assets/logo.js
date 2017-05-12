logo();
function logo(){
var camera, scene, renderer;
var geometry, material, mesh;

init();
animate();

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 1000;

    scene = new THREE.Scene();

    geometry = new THREE.BoxGeometry(200, 200, 200);
    material = new THREE.MeshBasicMaterial({
        color: 0xdf0000,
        wireframe: true
    });
 geometry2 = new THREE.BoxGeometry(400, 400, 400);
    material2 = new THREE.MeshBasicMaterial({
        color: 0xff1111,
        wireframe: true
    });

    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
 mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);
/*
    renderer = new THREE.WebGLRenderer();*/
    
     renderer =  new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame(animate);

    mesh.rotation.x -= 0.01;
    mesh.rotation.y -= 0.02;
	mesh.rotation.z = 1
  mesh2.rotation.x -= 0.01;
    mesh2.rotation.y -= 0.005;

    renderer.render(scene, camera);


}
}