"use strict";
// const [value, setValue] = useState<T>(intialValue);
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = useState;
exports.subscribeToRender = subscribeToRender;
let currentStateIndex = 0;
let stateStore = [];
let renderSubscribers = []; // Track subscribers for re-rendering
function useState(intialValue) {
    const index = currentStateIndex;
    if (stateStore[index] === undefined) {
        stateStore[index] = intialValue;
    }
    const setState = (newValue) => {
        const currentValue = stateStore[index];
        stateStore[index] = typeof newValue === "function" ?
            newValue(currentValue) :
            newValue;
        // handle DOM re-render
        console.log("State updated. New state:", stateStore[index]);
        renderSubscribers.forEach((subscriber) => subscriber());
    };
    currentStateIndex++;
    return [stateStore[index], setState];
}
function subscribeToRender(subscriber) {
    renderSubscribers.push(subscriber);
}
