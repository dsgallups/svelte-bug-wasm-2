use wasm_bindgen::prelude::*;
mod utils;
pub use utils::*;

#[wasm_bindgen]
extern "C" {

    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn foo() {
    utils::set_panic_hook();
    log("init complete");
}
