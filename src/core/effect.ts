

type CleanupFunction = () => void;
type EffectFunction = () => void | CleanupFunction;

let currentEffectIndex = 0;
let effectStore: { dependencies: any[]; cleanup?: CleanupFunction }[] = [];

// `useEffect` implementation
export function useEffect(effect: EffectFunction, dependencies: any[]) {
  const index = currentEffectIndex;

  // Initialize effect storage if it doesn't exist
  if (!effectStore[index]) {
    effectStore[index] = { dependencies: [] };
  }

  const storedEffect = effectStore[index];
  const dependenciesChanged = dependencies.some(
    (dep, i) => dep !== storedEffect.dependencies[i]
  );

  if (dependenciesChanged) {
    // Run cleanup if it exists
    if (storedEffect.cleanup) {
      storedEffect.cleanup();
    }

    // Run the effect and store the new cleanup
    const cleanup = effect();
    storedEffect.cleanup = typeof cleanup === "function" ? cleanup : undefined;

    // Update the dependencies
    storedEffect.dependencies = dependencies;
  }

  currentEffectIndex++;
}

// Reset the effect index before each render
export function resetEffects() {
  currentEffectIndex = 0;
}

// Example usage
import { useState } from "./state";

const [count, setCount] = useState(0);

useEffect(() => {
  console.log("Effect triggered! Current count:", count);

  // Cleanup example
  return () => {
    console.log("Cleaning up! Previous count:", count);
  };
}, [count]);

// Simulate state update
setCount((prev) => prev + 1); // This should trigger the effect
resetEffects(); // Reset before "re-rendering"
