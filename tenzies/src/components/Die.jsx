export default function Die({ value, isHeld, hold }) {
    return (
        <button 
        style={{backgroundColor: isHeld ? "#59E391"  : ""}}
        onClick={hold}
        aria-pressed={isHeld}
        aria-label={`Die with value ${value}, ${isHeld} ? "held" :  "not held"`}
        >{ value }</button>
    )
}