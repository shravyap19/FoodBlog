import { useState } from "react";
import Modal from "./Modal";
function RecipePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRecipe, setModalRecipe] = useState(null);
  const toggleModal = (recipe) => {
    setModalRecipe(recipe);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="recipe-container">
      <div className="recipe-cell" onClick={() => toggleModal("Pasta")}>
        <img src="./pasta.jpeg" />
        <p className="recipe-title">Pasta</p>
        {isModalOpen && <Modal closeModal={toggleModal} recipe={modalRecipe} />}
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("paneer-tikka")}>
        <img src="./paneer-tikka.jpeg" />
        <p className="recipe-title">Paneer tikka</p>
        {isModalOpen && <Modal closeModal={toggleModal} recipe={modalRecipe} />}
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("paneer-curry")}>
        <img src="./paneer-curry.jpeg" />
        <p className="recipe-title">Paneer butter masala</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("potato")}>
        <img src="./potatoes.jpeg" />
        <p className="recipe-title">Potato Stir Fry</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("green-curry")}>
        <img src="./green-curry.jpeg" />
        <p className="recipe-title">Green curry</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("dimsum")}>
        <img src="./dimsum.jpeg" />
        <p className="recipe-title">Dimsum</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("noodles")}>
        <img src="./noodles.jpeg" />
        <p className="recipe-title">Noodles</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("vada")}>
        <img src="./vada.jpeg" />
        <p className="recipe-title">Medu vada</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("fried-rice")}>
        <img src="./fried-rice-gallery.jpeg" />
        <p className="recipe-title">Fried Rice</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("popsicle")}>
        <img src="./popsicle.jpeg" />
        <p className="recipe-title">Popsicle</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("orange-juice")}>
        <img src="./orange-juice.jpeg" />
        <p className="recipe-title">orange-juice</p>
      </div>
      <div className="recipe-cell" onClick={() => toggleModal("carrot-juice")}>
        <img src="./carrot-juice.jpeg" />
        <p className="recipe-title">carrot-juice</p>
      </div>
    </div>
  );
}

export default RecipePage;
