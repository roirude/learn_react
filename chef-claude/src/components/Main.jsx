export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  /**
   * Challenge:
   * Add the new ingredient to the array of ingredients. Also, add a
   * console.log(ingredients) after adding the ingredient, because
   * **warning**: you aren't going to see the page update!
   *
   * Hint: this is a one-liner solution, so don't overthink it 😅
   */

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    ingredients.push(newIngredient);
    console.log(ingredients)
  }

  return (
    <main>
      <form className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </main>
  );
}
