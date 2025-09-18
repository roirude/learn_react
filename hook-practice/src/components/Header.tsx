import React from 'react'

interface HeaderProps {
    fn : () => void
}

function Header({ fn } : HeaderProps) {
    console.log(fn)
    console.log("Header rendered!")
    return (
        <h2>Header</h2>
    )
}

export default React.memo(Header)
