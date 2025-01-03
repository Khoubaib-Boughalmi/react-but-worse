// const [value, setValue] = useState<T>(intialValue);

type stateUpdater<T> = (newValue: T | ((previous: T) => T)) => void

let currentStateIndex = 0
let stateStore: any[] = []
let renderSubscribers: (() => void)[] = []; // Track subscribers for re-rendering
export function useState<T>(intialValue: T): [T, stateUpdater<T>] {
    const index = currentStateIndex;

    if (stateStore[index] === undefined) {
        stateStore[index] = intialValue;
    }

    const setState: stateUpdater<T> = (newValue) => {
        const currentValue = stateStore[index];
        stateStore[index] = typeof newValue === "function" ?
            (newValue as ((previous: T) => T))(currentValue) :
            newValue

        // handle DOM re-render
        console.log("State updated. New state:", stateStore[index]);
        renderSubscribers.forEach((subscriber) => subscriber());
    }
    currentStateIndex++;
    return [stateStore[index], setState];
}

export function subscribeToRender(subscriber: () => void) {
    renderSubscribers.push(subscriber);
}