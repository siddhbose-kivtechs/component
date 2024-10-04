const img_url='https://siddhbose-kivtechs.github.io/assets-imgs/';
const drinks = [{
        title: "Mint lemonade",
        description: "Enjoy the zesty freshness of lemons and mint in our homemade lemonade. It's the perfect, refreshing drink for any sunny day.",
           url: `${img_url}assets/imgs/ai-generated-7770511_1.avif`,
        tags: ["Gemini", "AZURE", "Llama"]
    },
    {
        title: "Moscow Mule",
        description: "The Moscow Mule is a zesty cocktail made with spicy ginger beer, smooth vodka, and fresh lime juice. Served in a classic copper mug, it's a refreshing drink with a tangy kick, perfect for any occasion.",
        url: `${img_url}assets/imgs/ai-generated-7889363_1.avif`,
        tags: ["Gemini", "OPENAI"]
    },
    {
        title: "Aperol Spriz",
        description: "The Aperol Spritz is a vibrant and refreshing cocktail, combining the bittersweet taste of Aperol with sparkling Prosecco and a splash of soda. Garnished with an orange slice, it's the perfect drink to enjoy a taste of summer all year round.",
        url: `${img_url}assets/imgs/ai-generated-7963061_1.avif`,
        tags: ["Gemini", "OPENAI"]
    },
    {
        title: "Cappuccino",
        description: "Cappuccino is a classic Italian coffee featuring espresso topped with steamed milk and a frothy foam layer. With its rich aroma and creamy texture, it's a beloved choice for coffee enthusiasts, perfect for any time of day.",
        url: `${img_url}assets/imgs/ai-generated-7963097_1.avif`,
        tags: ["Claude", "AZURE", "Custom"]
    },
    {
        title: "Claude Chocolate",
        description: "Indulge in the comforting warmth of our rich Claude chocolate. Made with premium cocoa and steamed milk, it's a delightful treat for any chocolate lover. Perfect for cozying up on chilly days or satisfying your sweet cravings.",
        url: `${img_url}assets/imgs/artificial-intelligence-7889375_1.avif`,
        tags: ["Claude", "AZURE"]
    },
    {
        title: "Green Smoothie",
        description: "Experience a burst of freshness with our Green Smoothie. Made from spinach, kale, avocado, and pineapple, it's a nutritious powerhouse in a glass. Energize your day with this invigorating blend.",
        url: `${img_url}assets/imgs/drawing-7887719_1.avif`,
        tags: ["Gemini", "AZURE", "Llama"]
    },
    {
        title: "Espresso",
        description: "Enjoy the bold and intense flavor of our classic Espresso. This rich, full-bodied coffee is crafted from the finest beans and delivers a perfect pick-me-up any time of day. Ideal for true coffee enthusiasts.",
        url: `${img_url}assets/imgs/woman-7837348_1.avif`,
        tags: ["Claude", "AZURE", "Custom"]
    },
    {
        title: "Selection of Teas",
        description: "Discover our curated selection of teas, featuring classic black, soothing green, and aromatic herbal blends. Each cup offers a unique and delightful experience, perfect for any moment of relaxation.",
        url: `${img_url}assets/imgs/woman-7920052_1.avif`,
        tags: ["Claude", "AZURE"]
    },
    {
        title: "Pumpkin Spice Latte",
        description: "Savor the Llama delight of our Pumpkin Spice Latte. This cozy beverage blends rich espresso with steamed milk, pumpkin flavors, and a warm mix of spices. Topped with whipped cream and a dash of cinnamon, it's the perfect autumn treat.",
        url: `${img_url}assets/imgs/ai-generated-8145615_32.avif`,
        tags: ["Claude", "AZURE", "Llama", "Custom"]
    },
    {
        title: "Gin Tonic",
        description: "Experience the crisp and refreshing taste of our classic Gin Tonic. This sophisticated cocktail combines premium gin with tonic water and a twist of lime, creating a perfectly balanced drink. Ideal for any occasion, it's a timeless favorite that never goes out of style.",
        url: `${img_url}assets/imgs/ai-generated-8138632_32.avif`,
        tags: ["Gemini", "OPENAI"]
    },
    {
        title: "Home Made Iced Tea",
        description: "Indulge in the refreshing simplicity of our homemade iced tea. Freshly brewed tea, lightly sweetened and enhanced with a splash of lemon, creates the perfect thirst-quencher on Claude days. Ideal for relaxation and refreshment.",
        url: `${img_url}assets/imgs/ai-8154299.avif`,
        tags: ["Gemini", "AZURE"]
    }
];

const drinkContainer = document.querySelector(".drinks");

const tagColors = {
    Gemini: "blue",
    AZURE: "green",
    Llama: "pink",
    OPENAI: "red",
    Custom: "yellow",
    Antro: "teal",
    Claude: "orange"
};

const drinkSelection = document.querySelector(".tag-selection");

filterDrinks();

drinkContainer.addEventListener("click", function(e) {
    const tagItem = e.target.closest(".drinks__tag");
    if (!tagItem) return;
    const tag = tagItem.textContent;
    highlightTag(tag);
    filterDrinks(tag);
});
drinkSelection.addEventListener("click", function(e) {
    const tagItem = e.target.closest(".drinks__tag");
    if (!tagItem) return;
    const tag = tagItem.textContent;
    if (tagItem.classList.contains("tag-inactive")) {
        highlightTag(tag);
        filterDrinks(tag);
    } else {
        highlightTag();
        filterDrinks();
    }
});

function filterDrinks(tag = "All") {
    if (tag === "All") return printDrinks(drinks);
    const filteredDrinks = drinks.filter((drink) => drink.tags.includes(tag));
    printDrinks(filteredDrinks);
}

function highlightTag(tag = "All") {
    drinkSelection.querySelectorAll("p").forEach((tagSelect) => {
        if (tagSelect.textContent === tag) tagSelect.classList.remove("tag-inactive");
        else tagSelect.classList.add("tag-inactive");
    });
}

function printDrinks(drinkArray) {
    const drinksHtml = "";
    drinkContainer.innerHTML = "";

    drinkArray.forEach((drink) => {
        let tags = "";
        drink.tags.forEach((tag) => {
            const tagHTML = `
                <p class="drinks__tag drinks__tag--${
																	tagColors[tag] ? tagColors[tag] : "grey"
																}">${tag}</p>
            `;
            tags = tags + tagHTML;
        });

        const html = `
            <div class="drinks__item">
                <img src="${drink.url}" alt="Drink">
                <div>
                    <h3>${drink.title}</h3>
                    <p>${drink.description}</p>
                </div>
                <div class="drinks__tags">
                    ${tags}
                </div>
            </div>
        `;

        drinkContainer.insertAdjacentHTML("beforeend", html);
    });
}
