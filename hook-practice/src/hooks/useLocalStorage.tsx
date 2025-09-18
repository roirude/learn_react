import { useEffect, useState } from "react"

function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {

    const [value, setValue] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item !== null ? JSON.parse(item) as T : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
}

export default useLocalStorage
