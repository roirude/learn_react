export default function Language({language, className}) {

    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }
    console.log(className)

    return (
        <span style={styles} className={`chip ${className}`}>
            {language.name}
        </span>
    )
}