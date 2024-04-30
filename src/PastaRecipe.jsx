function PastaRecipe() {
  return (
    <div className="modal-desc">
      <h1 className="header">
        <strong>Pesto Pasta Recipe</strong>
      </h1>
      <h2 className="header">Ingredients:</h2>
      <ol className="about_me_desc list-decimal ml-5">
        <li className="procedure-list">2 cups fresh basil leaves</li>
        <li className="procedure-list">
          1/2 cup freshly grated Parmesan cheese
        </li>
        <li className="procedure-list">1/2 cup extra virgin olive oil</li>
        <li className="procedure-list">1/3 cup pine nuts or walnuts</li>
        <li className="procedure-list">3 garlic cloves, minced</li>
        <li className="procedure-list">
          Salt and freshly ground black pepper to taste
        </li>
        <li className="procedure-list">
          1 pound (about 450g) pasta of your choice (spaghetti, fettuccine,
          penne, etc.)
        </li>
        <li className="procedure-list">Salt for boiling water</li>
        <li className="procedure-list">
          Optional: cherry tomatoes, sliced sun-dried tomatoes
        </li>
        <li className="procedure-list">
          Extra grated Parmesan cheese for garnish
        </li>
        <li className="procedure-list">Fresh basil leaves for garnish</li>
      </ol>
      <h2 className="header">Instructions:</h2>
      <ol className="about_me_desc list-decimal ml-5">
        <li className="procedure-list">
          <strong>Prepare the Pesto:</strong>
        </li>
        <ol className="about_me_desc list-decimal ml-5">
          <li className="procedure-list">
            Rinse the basil leaves under cold water and pat them dry with paper
            towels.
          </li>
          <li className="procedure-list">
            In a food processor, combine the basil leaves, grated Parmesan
            cheese, pine nuts (or walnuts), and minced garlic.
          </li>
          <li className="procedure-list">
            Pulse several times until the ingredients are roughly chopped.
          </li>
          <li className="procedure-list">
            With the food processor running, slowly pour in the olive oil until
            the pesto reaches your desired consistency. You may need to scrape
            down the sides of the processor bowl with a spatula.
          </li>
          <li className="procedure-list">
            Season with salt and black pepper to taste. Adjust the seasoning if
            necessary. Set the pesto aside.
          </li>
        </ol>
        <li className="procedure-list">
          <strong>Cook the Pasta:</strong>
        </li>
        <ol className="about_me_desc list-decimal ml-5">
          <li>Bring a large pot of salted water to a boil.</li>
          <li className="procedure-list">
            Add the pasta to the boiling water and cook according to the package
            instructions until al dente (usually around 8-10 minutes).
          </li>
          <li className="procedure-list">
            Once cooked, drain the pasta in a colander, reserving about 1/2 cup
            of the pasta cooking water. Set aside.
          </li>
        </ol>
        <li className="procedure-list">
          <strong>Combine Pasta and Pesto:</strong>
        </li>
        <ol className="about_me_desc list-decimal ml-5">
          <li className="procedure-list">
            In a large skillet or saucepan, add the cooked pasta and the
            prepared pesto.
          </li>
          <li className="procedure-list">
            Toss the pasta gently until it is evenly coated with the pesto
            sauce. If the pasta seems too dry, add a little bit of the reserved
            pasta cooking water to loosen it up.
          </li>
          <li className="procedure-list">
            If desired, add any additional ingredients such as cherry tomatoes,
            sun-dried tomatoes. Toss to combine and heat through.
          </li>
        </ol>
        <li className="procedure-list">
          <strong>Serve:</strong>
        </li>
        <ol className="about_me_desc list-decimal ml-5">
          <li className="procedure-list">
            Transfer the pesto pasta to serving plates or a large serving bowl.
          </li>
          <li className="procedure-list">
            Garnish with extra grated Parmesan cheese and fresh basil leaves.
          </li>
          <li className="procedure-list">Serve hot and enjoy!</li>
        </ol>
      </ol>
      <p className="about_me_desc">
        This recipe makes about 4 servings, but you can easily adjust the
        quantities to suit your needs. It's a simple yet delicious dish that's
        perfect for a quick weeknight meal or a casual dinner party.
      </p>
    </div>
  );
}

export default PastaRecipe;
