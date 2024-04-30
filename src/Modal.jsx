import CarrotJuice from "./CarrotJuice";
import Dimsum from "./Dimsum";
import FriedRice from "./FriedRice";
import Noodles from "./Noodles";
import OrangeJuice from "./OrangeJuice";
import PaneerButterMasala from "./PaneerButterMasala";
import PannerTikka from "./PaneerTikka";
import PastaRecipe from "./PastaRecipe";
import Popsicle from "./Popsicle";
import Potato from "./Potato";
import ThaiGreenCurry from "./ThaiGreenCurry";
import Vada from "./Vada";

// eslint-disable-next-line react/prop-types
function Modal({ closeModal, recipe }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button onClick={closeModal}></button>
        {recipe === "Pasta" && <PastaRecipe />}
        {recipe === "paneer-tikka" && <PannerTikka />}
        {recipe === "paneer-curry" && <PaneerButterMasala />}
        {recipe === "potato" && <Potato />}
        {recipe === "green-curry" && <ThaiGreenCurry />}
        {recipe === "dimsum" && <Dimsum />}
        {recipe === "noodles" && <Noodles />}
        {recipe === "vada" && <Vada />}
        {recipe === "fried-rice" && <FriedRice />}
        {recipe === "popsicle" && <Popsicle />}
        {recipe === "orange-juice" && <OrangeJuice />}
        {recipe === "carrot-juice" && <CarrotJuice />}
      </div>
    </div>
  );
}

export default Modal;
