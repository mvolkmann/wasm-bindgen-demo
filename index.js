import init, {
  Color,
  getColor,
  getPowers,
  greet
  //sumOfSquareAndCube
} from './pkg/wasm_bindgen_demo.js';

export function square(n) {
  return n * n;
}

export const cube = n => n ** 3;

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

  //console.log('square + cube =', sumOfSquareAndCube(2));
}

run();
