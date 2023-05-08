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
    const data = {
        "api_key": apiKey,
        "input": prompt,
        "temperature": 0.8,
        "max_tokens": 100
    };

    responseElement.innerHTML = "Génération de la recette en cours...";

    try {
        const response = await fetch("https://api.openai.com/v1/engines/text-davinci-002/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        const recipe = result.choices[0].text.trim();
        responseElement.innerHTML = `Recette :<br>${recipe}<br><br>Bon appétit !`;
    } catch (error) {
        console.error(error);
        responseElement.innerHTML = "Une erreur est survenue lors de la génération de la recette. Veuillez réessayer plus tard.";
    }
});
