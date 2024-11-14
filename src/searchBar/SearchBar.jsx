import { useEffect, useRef, useState } from "react";
import useKeyCombo from "../Hooks/useKeyCombo";
import Pizza from "../data/pizza.json";

export default function SearchBar({ setShowInput }) {
    const [inputValue, setInputValue] = useState("");

    const filterPizza = inputValue
        ? Pizza.filter((item) => item.id.startsWith(inputValue))
        : [];

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
        <>
            <div className="searchBarContainer">
                <div className="searchBar">
                    <img src="/assets/SVG/searchSVG.svg" alt="search btn" />
                    <input
                        type="text"
                        ref={inputRef}
                        placeholder="Search Pizza..."
                        onChange={(i) => setInputValue(i.target.value)}
                    />
                    <button onClick={handleButtonClick}>
                        <img src="/assets/SVG/closeSVG.svg" alt="close btn" />
                    </button>
                </div>
            </div>

            {inputValue && (
                <ul className="resultList">
                    {filterPizza.length > 0 ? (
                        filterPizza.map((item, index) => (
                            <li className="container" key={item.id}>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                {index < filterPizza.length - 1 && <hr />}
                            </li>
                        ))
                    ) : (
                        <li>Aucun résultat trouvé</li>
                    )}
                </ul>
            )}
        </>
    );
}
