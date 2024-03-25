import init, {add} from './pkg/rust_physics.js';

async function main() {
  await init();
  console.log(add(3, 5)) 
  // Initialize your Three.js scene here
  // Use `update_position` from Rust to update objects in the scene
}

main().catch(console.error);
