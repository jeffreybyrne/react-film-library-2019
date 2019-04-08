import React, {useState} from 'react';

const Fave = () => {

    const [isFave, setIsFave] = useState(false);
    const divClassName = (isFave ? 'remove_from_queue' : 'add_to_queue');

    const handleClick = (event) => {
        console.log("Clicked the fave button")
        setIsFave(!isFave);
        console.log(`Is this a fave? ${isFave}`)
    };
    
    return (
        <div className={`film-row-fave ${divClassName}`} onClick={handleClick}>
            <i className="material-icons">add_to_queue</i>
        </div>
    )
};

export default Fave;