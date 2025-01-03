"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("../src/core/state");
const effect_1 = require("../src/core/effect");
const [name, setName] = (0, state_1.useState)("khoubaib");
(0, effect_1.useEffect)(() => {
    console.log("Name effect triggered! Current name:", name);
    // Simulate cleanup
    return () => {
        console.log("Cleaning up! Previous name:", name);
    };
}, [name]);
console.log("Initial render");
// Simulate state update
setName("koby"); // Triggers effect
(0, effect_1.resetEffects)(); // Resets effects for the next render
