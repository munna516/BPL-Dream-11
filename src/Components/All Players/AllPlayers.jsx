import Player from "../Player/Player";
import PropTypes from 'prop-types'
import '../Footer/Footer.jsx'
const AllPlayers = ({ players, availableSelectedBtn, selectPlayer, selectedPlayer }) => {

    return (
        <div className="w-11/12 mx-auto">
            <div className="flex justify-between items-center mt-20">
                <p className="font-bold text-2xl">Available Players</p>
                <div className="text-2xl">
                    <button className="btn rounded-l-lg rounded-r-none text-xl bg-yellow-300">Available</button>
                    <button onClick={availableSelectedBtn} className="btn rounded-r-lg rounded-l-none text-xl">Selected ({selectedPlayer.length})</button>
                </div>
            </div>

            <div className="mt-10 mb-56 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    players.map((player) => <Player key={player.playerId} player={player} selectPlayer={selectPlayer}></Player>)
                }
            </div>

        </div>
    );
};

AllPlayers.propTypes = {
    players: PropTypes.array.isRequired,
    availableSelectedBtn: PropTypes.func,
    selectPlayer: PropTypes.func,
    selectedPlayer: PropTypes.array,
}

export default AllPlayers;