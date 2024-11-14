export default function ResultCard({ item, onClose }) {
    if (!item) return null;

    return (
        <div className="cardContainer">
            <div className="cardImage">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="cardNameBio">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
            </div>
            <div className="cardIng">
                <ul className="cardlist">
                    {item.ingredients.map((ingredient, i) => (
                        <li key={i}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <button onClick={onClose}>
                <img src="/assets/SVG/closeSVG.svg" alt="close btn" />
            </button>
        </div>
    );
}
