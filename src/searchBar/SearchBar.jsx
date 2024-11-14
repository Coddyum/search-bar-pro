import { useEffect, useRef } from "react";
import useKeyCombo from "../Hooks/useKeyCombo";
export default function SearchBar({ setShowInput }) {
    const handleButtonClick = () => {
        setShowInput(false);
    };

    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useKeyCombo("d", handleButtonClick);

    return (
        <div className="searchBarContainer">
            <div className="searchBar">
                <img src="/assets/SVG/searchSVG.svg" alt="search btn" />
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Search Pizza..."
                />
                <button onClick={handleButtonClick}>
                    <img src="/assets/SVG/closeSVG.svg" alt="close btn" />
                </button>
            </div>
        </div>
    );
}
