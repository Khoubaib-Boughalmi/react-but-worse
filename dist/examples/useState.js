"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effect_1 = require("../src/core/effect");
const state_1 = require("../src/core/state");
const [user, setUser] = (0, state_1.useState)({
    name: "khoubaib",
    age: 24,
    location: {
        lat: 24.1102,
        lng: 114.136
    }
});
console.log("Initial State:", user);
(0, effect_1.useEffect)(() => {
    console.log("updated user:", user);
}, [user]);
setUser((prev) => (Object.assign(Object.assign({}, prev), { name: "koby" })));
// subscribeToRender(() => {
//     console.log("Rendering with updated user:", user); // Simulate rendering
//     console.log(user);
// });
