export default function ResultCard({ pizza, onClose }) {
    if (!pizza) return null;
    return (
        <div className="card">
            <h3>{pizza.name}</h3>
            <p>{pizza.description}</p>
            <button onClick={onClose}>X</button>
        </div>
    );
}
