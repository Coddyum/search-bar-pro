import { useEffect, useRef, useState } from "react";
import useKeyCombo from "../Hooks/useKeyCombo";
import Pizza from "../data/pizza.json";
import ResultCard from "../resultCard/ResultCard";

export default function SearchBar({ setShowInput }) {
    const [inputValue, setInputValue] = useState("");
    const [selectedPizza, setSelectedPizza] = useState(null);

    const filterPizza = inputValue
        ? Pizza.filter((item) => item.id.startsWith(inputValue.toLowerCase()))
        : [];

    const handleButtonClick = () => {
        setShowInput(false);
    };

    const handleItemClick = (item) => {
        setSelectedPizza(item);
        setInputValue(item.name);
    };

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setSelectedPizza(null);
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
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleButtonClick}>
                        <img src="/assets/SVG/closeSVG.svg" alt="close btn" />
                    </button>
                </div>

                {inputValue && !selectedPizza && (
                    <ul className="resultList">
                        {filterPizza.length > 0
                            ? filterPizza.map((item, index) => (
                                  <>
                                      <li
                                          className="container"
                                          onClick={() => handleItemClick(item)}
                                          key={item.id}>
                                          <h3>{item.name}</h3>
                                          <p>{item.description}</p>
                                      </li>
                                      {index < filterPizza.length - 1 && <hr />}
                                  </>
                              ))
                            : !selectedPizza && (
                                  <li className="container">
                                      <p>Aucun résultat trouvé</p>
                                  </li>
                              )}
                    </ul>
                )}

                <ResultCard
                    item={selectedPizza}
                    onClose={() => setSelectedPizza(null)}
                />
            </div>
        </>
    );
}
