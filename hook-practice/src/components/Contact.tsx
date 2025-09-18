import { useContext } from "react"
import { AppContext } from "../context/AppContext"


function Contact() {
    const context = useContext(AppContext)
    const phone = context?.phone 
    const name = context?.name
    return (
        <div>
            <h2>Contact</h2>
            <h3>Phone: {phone}</h3>
            <h3>Name: {name}</h3>
        </div>
    )
}

export default Contact
