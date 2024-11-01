import PropTypes from 'prop-types'
import SelectedAll from '../Selected All Player/SelectedAll';
const Selected = ({ availableSelectedBtn, selectedPlayer ,deletePlayer}) => {
    return (
        <div className='w-11/12 mx-auto '>
            <div className="flex justify-between items-center mt-20 mb-10">
                <p className="font-bold text-2xl">Selected Players ({selectedPlayer.length} / 6)</p>
                <div className="text-2xl">
                    <button onClick={availableSelectedBtn} className="btn rounded-l-lg rounded-r-none text-xl">Available</button>
                    <button className="btn rounded-r-lg rounded-l-none text-xl bg-yellow-300">Selected ({selectedPlayer.length})</button>
                </div>
            </div>

            <div className='mb-52 space-y-5'>
                {
                    selectedPlayer.map(player => <SelectedAll key={player.playerID} player={player} deletePlayer={deletePlayer}></SelectedAll>)
                }
                <button onClick={availableSelectedBtn} className='btn text-black bg-yellow-400 border-none'>Add More</button>
            </div>
        </div>
    );
};

Selected.propTypes = {
    availableSelectedBtn: PropTypes.func,
    selectedPlayer: PropTypes.array,
    deletePlayer: PropTypes.func
}

export default Selected; <h1>Hi</h1>