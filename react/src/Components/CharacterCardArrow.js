import React from 'react';

class CharacterCardArrow extends React.Component {
    render() {
        return (
            <div id="character_card_arrow" onClick={() => {
                var x = document.getElementById("character_card");
                var y = document.getElementById("character_card_arrow")
                x.style.display = "block";
                y.style.display = "none";
            }}></div>
        );
    }
}


export default CharacterCardArrow;