document.getElementById("ingredients-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const ingredient = document.getElementById("ingredient-input").value;
    const responseElement = document.getElementById("recipe-result");

    if (ingredient.trim() === "") {
        responseElement.innerHTML = "Veuillez entrer un ingrédient.";
        return;
    }

    const apiKey = "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";
    const prompt = `Créez une recette utilisant les ingrédients suivants: ${ingredient}.`;
    const data