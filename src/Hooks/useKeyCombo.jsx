import { useEffect } from "react";

function useKeyCombo(keyCombo, callback) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === keyCombo) {
                event.preventDefault();
                callback();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [keyCombo, callback]);
}

export default useKeyCombo;
