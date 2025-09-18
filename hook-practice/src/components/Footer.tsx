import { useContext } from "react"
import { AppContext } from "../context/AppContext"

function Footer() {
    const context = useContext(AppContext);
    const phone = context?.phone ?? "N/A";
    return (
        <div>
            <h2>Footer</h2>
            <h3>Phone: {phone}</h3>
        </div>
    )
}

export default Footer
