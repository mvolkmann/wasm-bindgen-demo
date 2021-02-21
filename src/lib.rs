use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);

    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    log(&format!("Hello, {}!", name));
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct Color {
    pub red: u8,
    pub green: u8,
    pub blue: u8,
}

#[wasm_bindgen(js_name = getColor)]
pub fn get_color() -> Color {
    let color = Color {
        red: 1,
        green: 2,
        blue: 3,
    };
    log(&format!("color = {:?}", color));
    color
}

#[wasm_bindgen(js_name = getPowers)]
pub fn get_powers(n: u32) -> Vec<u32> {
    alert(&format!("Getting powers of {} ...", n));
    vec![n, n.pow(2), n.pow(3)]
}
