import useKeyCombo from "../Hooks/useKeyCombo";

export default function DefaultBtn({ setShowInput }) {
    const handleButtonClick = () => {
        setShowInput(true);
    };

    useKeyCombo("d", handleButtonClick);

    return (
        <>
            <div className="btnContainer">
                <button className="defaultBtn" onClick={handleButtonClick}>
                    Click <span>|</span>{" "}
                    <span className="shortCut">&#8984; + D</span>
                </button>
            </div>
        </>
    );
}
