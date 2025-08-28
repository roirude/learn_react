export default function Language({language}) {

    const styles = {
        backgroundColor: language.backgroundColor,
        color: language.color
    }

    return (
        <span style={styles} className="chip">
            {language.name}
        </span>
    )
}