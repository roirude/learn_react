export default function Die({ value, isHeld }) {
    return (
        <button style={{backgroundColor: isHeld ? "#59E391"  : ""}}>{ value }</button>
    )
}