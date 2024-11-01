import { useEffect, useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import AllPlayers from './Components/All Players/AllPlayers'
import Selected from './Components/Selected Player/Selected'

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // More then 6 Player added alert
  const moreThanSixNotify = () => toast.error('You can not add more then 6 players', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  // More then 6 Player added alert
  const addPlayerNotify = () => toast.success('Player added', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });

  // Insufficient balance Notify insufficientBalanceNotify
  const insufficientBalanceNotify = () => toast.error('Insufficient Balance.Claim free credit', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
  // Already Added Player
  const alreadyAddedNotify = () => toast.error('Already added this player', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
  // All Coins State
  const [coins, setCoins] = useState(0)

  // Handle Coin Function
  const handleCoin = () => {
    const addCredit = 10000
    setCoins(coins + addCredit)
  }

  //All Player Add
  const [players, setPlayers] = useState([])

  // All Player Fetching by API
  useEffect(() => {
    fetch('Players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  // Available button Functionality
  const [available, setAvailable] = useState(true)

  const availableSelectedBtn = () => {
    setAvailable(!available)
  }

  // Selected Players Functionality
  const [selectedPlayer, setSelectedPlayer] = useState([])

  const selectPlayer = (player) => {
    if (selectedPlayer.length >= 6)
      moreThanSixNotify()
    else {
      const isFind = selectedPlayer.find(element => element.playerId === player.playerId)
      if (isFind)
        alreadyAddedNotify()
      else if (player.biddingPrice > coins) {
        insufficientBalanceNotify()
      }
      else {
        console.log(player);
        addPlayerNotify()
        setCoins(coins - player.biddingPrice)
        setSelectedPlayer([...selectedPlayer, player])
      }
    }
  }

  // Delete Player
  const deletePlayer = (player) => {
    const deletes = selectedPlayer.filter(delPlayer => delPlayer.playerId != player.playerId)
    setSelectedPlayer(deletes)
  }

  return (
    <>
      {/* Headeer */}
      <Header handleCoin={handleCoin} coins={coins}></Header>

      {/* Available & Selected Players */}
      {
        available ? <AllPlayers players={players} selectPlayer={selectPlayer} available={available} availableSelectedBtn={availableSelectedBtn} selectedPlayer={selectedPlayer}></AllPlayers> : <Selected availableSelectedBtn={availableSelectedBtn} selectedPlayer={selectedPlayer} deletePlayer={deletePlayer}></Selected>
      }
      {

      }
      {/* Footer */}
      <Footer></Footer>

      <ToastContainer />
    </>
  )
}

export default App
