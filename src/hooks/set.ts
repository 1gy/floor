import { useCallback, useState } from "react";

export const useSet = <T>() => {
  const [set, setSet] = useState(() => new Set<T>());
  const add = useCallback((item: T) => setSet((prev) => new Set([...Array.from(prev), item])), []);
  const remove = useCallback((item: T) => setSet((prev) => new Set(Array.from(prev).filter((v) => v !== item))), []);
  const has = useCallback((item: T) => set.has(item), [set]);
  const toggle = useCallback(
    (item: T) =>
      setSet((prev) =>
        prev.has(item) ? new Set(Array.from(prev).filter((v) => v !== item)) : new Set([...Array.from(prev), item])
      ),
    []
  );
  return {
    set,
    add,
    remove,
    has,
    toggle,
  };
};
