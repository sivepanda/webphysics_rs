import init, { update_position } from '../rust_physics/pkg/rust_physics.js';

async function main() {
  await init();
  
  // Initialize your Three.js scene here
  // Use `update_position` from Rust to update objects in the scene
}

main().catch(console.error);
