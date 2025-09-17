const fs = require('fs-extra');
const path = require('path');

const src = 'node_modules/three/examples/jsm/libs/draco/gltf';
const output = 'public/draco';

async function copyDracoFiles() {
  try {
    // Ensure output directory exists
    await fs.ensureDir(output);

    // Check if source files exist
    const wasmFile = path.join(src, 'draco_decoder.wasm');
    const jsFile = path.join(src, 'draco_wasm_wrapper.js');

    if (await fs.pathExists(wasmFile)) {
      await fs.copy(wasmFile, path.join(output, 'draco_decoder.wasm'));
      console.log('✅ Copied draco_decoder.wasm');
    } else {
      console.warn('⚠️ draco_decoder.wasm not found, skipping...');
    }

    if (await fs.pathExists(jsFile)) {
      await fs.copy(jsFile, path.join(output, 'draco_wasm_wrapper.js'));
      console.log('✅ Copied draco_wasm_wrapper.js');
    } else {
      console.warn('⚠️ draco_wasm_wrapper.js not found, skipping...');
    }

    console.log('✅ Draco setup completed');
  } catch (error) {
    console.warn('⚠️ Draco setup failed:', error.message);
    // Don't fail the build if draco files can't be copied
    process.exit(0);
  }
}

copyDracoFiles();
