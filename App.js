import './App.css';
import React from "react"
import Dice from "./components/Dice"
import { nanoid } from "nanoid"
import Confetti from 'react-confetti'

export default function App() {

  /* Generate random number 1-6 */
  function generateRandomNum() {
    return Math.ceil(Math.random() * 6)
  }


  /* create new Dice and and set state to it*/
  const [dice, setDice] = React.useState(allNewDice())

  function allNewDice() {
    const newRoll = [];
    for (let i = 0; i < 10; i++) {
      /* -After- here i will check if the die isHeld  */
      newRoll.push({
        value: generateRandomNum(),
        id: nanoid(),
        isHeld: false
      })
    }
    return newRoll
  }

  /* dice Selected */
  function holdDice(id) {
    setDice(oldDice => {
      return oldDice.map(die => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die
      })
    })
  }

  /* Dice Component */
  const diceElement = dice.map(die => {
    return (<Dice
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)} />)
  })



  /* roll Dice */
  function rollDice() {
    /* new Game */
    if (tenzies) {
      setTenzies(false)
      setDice(allNewDice())
    }

    setDice(oldDice => {
      return oldDice.map(die => {
        return die.isHeld ? die : { value: generateRandomNum(), id: nanoid(), isHeld: false }
      })
    })
  }

  /*Check for win  */


  React.useEffect(() => {
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue)
    const isAllHeld = dice.every(die => die.isHeld);


    if (allSameValue && isAllHeld) {
      setTenzies(true)
    } else if (isAllHeld && !allSameValue) {
      console.log("you fucked up")
    }
  }, [dice])

  /* Tenzies new Game */

  const [tenzies, setTenzies] = React.useState(false)


  return (
    <main className='main-container'>
      {tenzies && <Confetti />}
      <section className='main-hero'>
        <div className='content'>
          <h1 className='text-title'>Tenzies</h1>
          <p className='text'>Roll until all dice are the same.
            Click each die to freeze it at its current value between rolls.</p>
          <div className='dice-container'>
            {diceElement}
          </div>
          <button className='btn' onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </div>


      </section>
    </main>);
}

