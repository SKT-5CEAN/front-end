import { useEffect, useState } from "react";

function useSessionState(key: string, defaultValue: string) {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = sessionStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(key, JSON.stringify(state));
    }
  }, [key, state]);

  return { state, setState };
}

export default useSessionState;
