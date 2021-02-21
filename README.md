# wasm-bindgen-demo

This demonstrates using wasm-bindgen to pass non-numeric values
between JavaScript and Rust-based WASM functions.

To run this:

1. Install wasm-pack by entering the following command:

   ```bash
   curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
   ```

1. Enter `wasm-pack build --dev --target web`

1. Start a local HTTP file server.
   One approach is to install [Deno](https://deno.land/)
   and then enter these commands:

   ```bash
   deno install --allow-net --allow-read https://deno.land/std@0.87.0/http/file_server.ts
   file_server .
   ```

1. Browse localhost:{port} where port is
   the port on which the local server is listening.

1. Open the DevTools console to see the `console.log` output.
