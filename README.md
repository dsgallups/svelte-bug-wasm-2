# To reproduce, run

`npm run build`

Note that +layout.svelte NEVER calls wasm's `init` function. It is only imported.

This code runs in vite dev mode:

`npm run dev`

## Prerequisites
You may have to install [rust](https://www.rust-lang.org/)
and run the following command:
`rustup target add wasm32-unknown-unknown`

Then, build the wasm binary in the root directory of this repo with:

`npm run build-wasm`

Let me know if you have any issues reproducing. Thanks!
