// Create a Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Set up the WebGL renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth * 0.5, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true; // Enable shadow rendering
document.getElementById('3d-canvas').appendChild(renderer.domElement);

// Create a 3D sphere object
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff, metalness: 0.6, roughness: 0.4 });
const sphere = new THREE.Mesh(geometry, material);
sphere.castShadow = true;
scene.add(sphere);

// Set up lighting
const ambientLight = new THREE.AmbientLight(0x404040, 1.5); // Soft global light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(2, 3, 4);
pointLight.castShadow = true;
scene.add(pointLight);

// Set camera position
camera.position.z = 5;

// OrbitControls for interaction (mouse-based camera control)
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Damping for smoother controls
controls.dampingFactor = 0.05;

// Resize event handler
window.addEventListener('resize', () => {
    const canvasWidth = window.innerWidth * 0.5;
    camera.aspect = canvasWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasWidth, window.innerHeight);
});

// Animation function
function animate() {
    requestAnimationFrame(animate);

    // Apply rotation to the sphere for subtle animation
    sphere.rotation.y += 0.005;

    // Update controls for smoothness
    controls.update();

    // Render the scene
    renderer.render(scene, camera);
}

animate();
