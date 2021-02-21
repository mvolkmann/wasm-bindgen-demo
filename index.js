import init, {
  Color,
  getColor,
  getPowers,
  greet
} from './pkg/wasm_bindgen_demo.js';

async function run() {
  await init();
  greet('World');

  const color = getColor();
  console.log('color =', color);
  console.log('color instanceof Color?', color instanceof Color);
  console.log('color.red =', color.red);
  console.log('color.green =', color.green);
  console.log('color.blue =', color.blue);

  const powers = getPowers(3); // a UIntArray
  console.log('powers =', powers);
}

run();
