import React from 'react'

function Main() {
    return (
        <>
            <main style={{ position: 'relative' }}>
                <div className="banner">
                    <img src="Banner_main.jpg" alt="banner" id="banner" />
                    <div className="banner-top-left">
                        Black Friday Sale - Up To 50% Off
                        <div className="banner-mid">
                            Try On In Restaurant before You Buy
                        </div>
                    </div>
                </div>

                <section className="columns">

                    <div className="column">

                        <h2>Pasta</h2>
                        <p>
                        "Indulge in the authentic taste of Italy with our signature pasta dish. Made with the freshest ingredients, our spaghetti al pomodoro is a classic recipe that features perfectly cooked spaghetti tossed with a rich tomato sauce, infused with garlic and basil for a burst of flavor in every bite. Topped with grated Parmesan cheese and served with a side of garlic bread, this dish is the epitome of comfort food and the perfect addition to your dining experience at our Italian restaurant. So gather your loved ones and savor the taste of tradition with our delicious spaghetti al pomodoro."
                        </p>
                        <img src="pasta.jpg" alt="item" className="col-img" />
                    </div>


                    <div className="column">

                        <h2>Shawarma</h2>
                        <p>
                        "Savor the flavors of the Middle East with our classic shawarma dish. Made with tender slices of marinated chicken, juicy lamb or succulent beef, our shawarmas are slow-cooked to perfection, giving each bite an irresistible juicy and smoky taste. Wrapped in warm and fluffy pita bread and topped with fresh veggies like tomatoes, cucumbers, and pickles, our shawarmas are a true feast for the senses. And for an extra touch of flavor, we finish them off with a drizzle of tangy tahini sauce and a sprinkle of aromatic herbs. Come visit us at our Turkish restaurant and take a culinary journey to the heart of the Middle East with every bite of our delicious shawarmas."
                        </p>
                        <img src="shawarma.jpg" alt="item" className="col-img" />
                    </div>


                    <div className="column">

                        <h2>Tacos</h2>
                        <p>
                        "Get ready for a flavor explosion with our irresistible tacos. Made with the freshest ingredients, our tacos are a true celebration of Mexican cuisine. We start with soft and warm corn tortillas, and then fill them with your choice of seasoned and grilled chicken, tender and juicy steak, or spicy and flavorful chorizo. But the real magic happens with our toppings: think fresh pico de gallo, creamy avocado, tangy sour cream, and a sprinkle of sharp cheddar cheese. Each bite is a burst of flavors and textures that will tantalize your taste buds. So come visit us at our Mexican restaurant and take a journey south of the border with every delicious bite of our tacos."
                        </p>
                        <img src="tacos.jpg" alt="item" className="col-img" />
                    </div>
                </section>
            </main>

        </>
    )
}

export default Main
