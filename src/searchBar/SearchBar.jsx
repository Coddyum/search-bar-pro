import { useEffect, useRef, useState } from "react";
import useKeyCombo from "../Hooks/useKeyCombo";
import Pizza from "../data/pizza.json";
import ResultCard from "../resultCard/ResultCard";

export default function SearchBar({ setShowInput }) {
    const [inputValue, setInputValue] = useState("");
    const [selectedPizza, setSelectedPizza] = useState(null);

    // filtre tout les donné du pizza.JSON selon le contenu du input de recherche
    const filterPizza = inputValue
        ? Pizza.filter((item) => item.id.startsWith(inputValue.toLowerCase()))
        : [];

    // permet de fermer le champs de recherche revoie false pour repasser au btn de base
    const handleButtonClick = () => {
        setShowInput(false);
    };

    // selection le resulta de recherche après un clique et auto complet l'input avec le nom complet
    const handleItemClick = (item) => {
        setSelectedPizza(item);
        setInputValue(item.name);
    };

    // actualise les resulta avec la value de l'input puis un fois l'item selectionné renvoie null pour je plus afficher les résulta en plus de la card
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
        setSelectedPizza(null);
    };

    const inputRef = useRef(null);

    // permet le focus de l'input des sont apparition
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    // utilise le hook pour swap entre le btn de base et l'input de recherche avec le ctrl + d
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
