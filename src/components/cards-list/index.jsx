import { useState } from "react";
import  Card  from "../card";
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState(false);

  const handleSuitFilter = (e) => {
    console.log(e.target.id)
    if (e.target.id == suitFilter) {
      setSuitFilter (true);
      e.target.checked = false;
    } else {
      setSuitFilter(e.target.id)
    }
  };  
  console.log(cardsList)

  return (
    <>
    <div className="filter-container">
      <p>Filtrar por naipe</p>
      <div>
        <input
          onClick={handleSuitFilter}
          type="radio"
          id="SPADES"
          name="suit"
        />
        <label htmlFor="SPADES">Espadas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="HEARTS"
          name="suit"
        />
        <label htmlFor="HEARTS">Copas</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="CLUBS"
          name="suit"
        />
        <label htmlFor="CLUBS">Paus</label>

        <input
          onClick={handleSuitFilter}
          type="radio"
          id="DIAMONDS"
          name="suit"
        />
        <label htmlFor="DIAMONDS">Ouros</label>
      </div>
    </div>
    <div>


      {!suitFilter &&
        cardsList.map((actual, index) => {
          return <Card card={actual} key={index} />;
        })}

      {suitFilter &&
        cardsList
          .filter((actual) => actual.suit === suitFilter)
          .map((actual, index) => {
            return(<Card card={actual} key={index} />)
            
          })}
    </div>
    </>
  );
};
export default CardsList;

