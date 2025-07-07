const recipes = {
    pizza: {
        name: "Margherita Pizza",
        img: "https://images.unsplash.com/photo-1601924638867-3ec62b2e9585",
        badges: ["20 min", "Vegetarian"],
        rating: 4.5,
        desc: "Classic pizza with tomato sauce, mozzarella & basil.",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil", "Olive oil"],
        steps: ["Spread sauce on dough.", "Add mozzarella.", "Bake 15-20 min.", "Top with basil & oil."],
        note: "Use fresh buffalo mozzarella for best flavor."
    },
    burger: {
        name: "Beef Cheeseburger",
        img: "https://images.unsplash.com/photo-1606756793368-3a814a82f7c6",
        badges: ["15 min", "Non-Veg"],
        rating: 4.7,
        desc: "Juicy beef patty with cheddar, lettuce & tomato.",
        ingredients: ["Beef patty", "Cheddar cheese", "Lettuce", "Tomato", "Buns"],
        steps: ["Grill patty 3 min each side.", "Melt cheese on top.", "Assemble with lettuce & tomato."],
        note: "Toast buns lightly for extra crunch."
    },
    pasta: {
        name: "Creamy Alfredo Pasta",
        img: "https://images.unsplash.com/photo-1621996346564-7cc6a61d5d0f",
        badges: ["25 min", "Vegetarian"],
        rating: 4.6,
        desc: "Rich pasta in parmesan cream sauce.",
        ingredients: ["Fettuccine", "Butter", "Parmesan", "Cream", "Parsley"],
        steps: ["Boil pasta.", "Melt butter, add cream & cheese.", "Mix pasta, garnish with parsley."],
        note: "Add garlic for more depth."
    }
};

function renderRecipe(type) {
    const r = recipes[type];
    document.getElementById('recipe-display').innerHTML = `
        <img src="${r.img}" alt="${r.name}">
        <div class="recipe-content">
            <h2>${r.name}</h2>
            <div class="badges">
                ${r.badges.map(b => `<span class="badge">${b}</span>`).join('')}
            </div>
            <div class="star-rating">
                ${'★'.repeat(Math.floor(r.rating))}${r.rating % 1 >= 0.5 ? '½' : ''} (${r.rating})
            </div>
            <p>${r.desc}</p>
            <h3>Ingredients</h3>
            <ul>${r.ingredients.map(i => `<li>${i}</li>`).join('')}</ul>
            <h3>Steps</h3>
            <ol>${r.steps.map(s => `<li>${s}</li>`).join('')}</ol>
            <div class="chef-note"><strong>Chef's Tip:</strong> ${r.note}</div>
        </div>
    `;
}

document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderRecipe(btn.getAttribute('data-recipe'));
    });
});

document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Your order has been placed! Thank you.");
});

// Initialize with pizza
renderRecipe('pizza');
