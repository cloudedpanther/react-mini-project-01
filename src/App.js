import cards from './data/cards';
import Lottery from './components/Lottery';
import { useEffect, useState } from 'react';
import BusinessCard from './components/BusinessCard';

function App() {
  const [cardList, setCardList] = useState([]);
  const [winnerList, setWinnerList] = useState([]);

  useEffect(() => {
    setCardList(cards);
  }, []);

  const handleLottery = () => {
    if (winnerList.length === 3) {
      const winnersNameString = winnerList
        .map((winner) => winner.name)
        .join(', ');
      const alertString = `이미 3명의 추첨을 완료했습니다. 당첨자는 ${winnersNameString} 입니다.`;

      return alert(alertString);
    }

    const index = Math.floor(Math.random() * cardList.length);
    const winner = cardList[index];
    const newCardList = [
      ...cardList.slice(0, index),
      ...cardList.slice(index + 1),
    ];

    setCardList(newCardList);
    setWinnerList((winnerList) => [...winnerList, winner]);
  };

  return (
    <div className="App">
      {cardList.length > 0 && <Lottery onClick={handleLottery} />}
      {winnerList.length > 0 &&
        winnerList.map((winner) => (
          <BusinessCard cardInfo={winner} key={winner.phoneNumber} />
        ))}
    </div>
  );
}

export default App;
