export default function Language({language, className}) {

    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }

    return (
        <span style={styles} className={`chip ${className}`}>
            {language.name}
        </span>
    )
}