import CardsList from "./components/cards-list";
import {useEffect,useState} from "react";
import "./App.css";

 const App = () => {
  const [showDeck, setShowDeck] = useState(false);
  const [cardsList, setCardsList] = useState([]);
  const [deck, setDeck] = useState("");

  const handleDeckRequest = async () =>  {
    await fetch("https://deckofcardsapi.com/api/deck/new/")
      .then((res) => res.json())
      .then((res) => {
        setDeck(res.deck_id)
      })
      .catch((err)=>console.log(err))
      ;
  };

  const handleCardsRequest = (deck_Id) => {
    fetch(`https://deckofcardsapi.com/api/deck/${deck_Id}/draw/?count=52`)
      .then((res) => res.json())
      .then((res) => setCardsList(res.cards));
  };

  console.log(cardsList)

  const handleShowDeck = () => {
    setShowDeck(true);
    
  };

  
  

  useEffect(() => {
      handleDeckRequest();
    }, []);

    useEffect(() => {
      if (deck) handleCardsRequest(deck);
    }, [deck]);

  return (
    <div className="main-container">
      <h1 className="main-title">Debugue para ver o baralho</h1>
      <button onClick={handleShowDeck} className="new-deck-button">
        Novo baralho
      </button>
      {showDeck && <CardsList cardsList={cardsList} />}
    </div>
  );
};
export default App;
