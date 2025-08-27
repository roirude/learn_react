export default function Die({ value, isHeld, hold }) {
    return (
        <button 
        style={{backgroundColor: isHeld ? "#59E391"  : ""}}
        onClick={hold}
        >{ value }</button>
    )
}