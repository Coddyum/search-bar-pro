import { useState } from "react";
import DefaultBtn from "./DefaultBtn/DefaultBtn";
import SearchBar from "./searchBar/SearchBar";

function App() {
    const [showinput, setShowInput] = useState(false);

    return (
        <>
            {showinput ? (
                <SearchBar showInput={showinput} setShowInput={setShowInput} />
            ) : (
                <DefaultBtn setShowInput={setShowInput} />
            )}
        </>
    );
}

export default App;
