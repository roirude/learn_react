export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
     */
    
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted!");
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {
            ingredients.map((ingredient) => (
                <li key={ingredient}>{ ingredient }</li>
            ))
        }
      </ul>
    </main>
  );
}
