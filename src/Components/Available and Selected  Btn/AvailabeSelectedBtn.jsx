const AvailabeSelectedBtn = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto flex justify-between items-center mt-20">
                <p className="font-bold text-2xl">Available Players</p>
                <div className="text-2xl">
                    <button className="btn rounded-l-lg rounded-r-none text-2xl">Available</button>
                    <button className="btn rounded-r-lg rounded-l-none text-xl">Selected(0)</button>
                </div>
            </div>
        </div>
    );
};

export default AvailabeSelectedBtn;