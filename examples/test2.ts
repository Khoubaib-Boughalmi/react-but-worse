import { useState, } from "../src/core/state"
import { useEffect, resetEffects } from "../src/core/effect"

const [name, setName] = useState("khoubaib");

useEffect(() => {
    console.log("Name effect triggered! Current name:", name);

    // Simulate cleanup
    return () => {
        console.log("Cleaning up! Previous name:", name);
    };
}, [name]);

console.log("Initial render");

// Simulate state update
setName("koby"); // Triggers effect
resetEffects(); // Resets effects for the next render

console.log("ussssser", name);