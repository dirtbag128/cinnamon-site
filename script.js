// Initialize Three.js scene
const scene = new THREE.Scene();
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";

const loader = new SVGLoader();
loader.load(
  "resources/cinnamon-stick.svg",
  (data) => {
    const paths = data.paths;
    const material = new THREE.MeshBasicMaterial({ color: 0xd2691e });
    
    paths.forEach((path) => {
      const shapes = path.toShapes(true);
      shapes.forEach((shape) => {
        const geometry = new THREE.ShapeGeometry(shape);
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      });
    });
  },
  undefined,
  (error) => console.error(error)
);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("three-canvas").appendChild(renderer.domElement);

// Cinnamon stick shape (cylinder)
const cinnamonGeometry = new THREE.CylinderGeometry(0.5, 0.5, 6, 32);
const cinnamonMaterial = new THREE.MeshBasicMaterial({ color: 0xd2691e });
const cinnamonStick = new THREE.Mesh(cinnamonGeometry, cinnamonMaterial);
scene.add(cinnamonStick);

// Floating and rotation animations
function animate() {
  requestAnimationFrame(animate);

  // Apply gentle rotation
  cinnamonStick.rotation.x += 0.005;
  cinnamonStick.rotation.y += 0.01;

  // Floating up and down effect
  cinnamonStick.position.y = Math.sin(Date.now() * 0.001) * 0.5;

  renderer.render(scene, camera);
}
animate();

// Responsive resize handling
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
