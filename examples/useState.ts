import { useEffect } from "../src/core/effect";
import { subscribeToRender, useState } from "../src/core/state"

interface Location {
    lat: number,
    lng: number
}

interface User {
    name: string,
    age: number,
    location: Location
}

const [user, setUser] = useState<User>({
    name: "khoubaib",
    age: 24,
    location: {
        lat: 24.1102,
        lng: 114.136
    }
})


console.log("Initial State:", user);


useEffect(() => {
    console.log("updated user:", user);
}, [user])


setUser((prev) => ({ ...prev, name: "koby" }))
// subscribeToRender(() => {
//     console.log("Rendering with updated user:", user); // Simulate rendering
//     console.log(user);
// });

