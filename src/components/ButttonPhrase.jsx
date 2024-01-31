import React from 'react'; 
import phrases from '../utils/phrases.json';
import randomIndex from '../services/randomindex';
import bgArray from '../utils/bgArray.json';
const ButttonPhrase = ({setQuote, setBgApp}) => {
    

    const handleButton = () => {
      
      const bgIndex = randomIndex(bgArray);
      const sentence = randomIndex(phrases);
      setQuote(sentence)
      setBgApp(bgIndex)
       

    }
  return (
    <button onClick={handleButton}>Probar Su Suerte</button>
  )
}

export default ButttonPhrase;