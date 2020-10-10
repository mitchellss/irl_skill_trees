import React from 'react';

class CharacterCard extends React.Component {
    render() {
        return (
            <div id="character_card" onClick={() => {
                var x = document.getElementById("character_card");
                var y = document.getElementById("character_card_arrow")
                x.style.display = "none";
                y.style.display = "block"
            }}>
                <h3 className="character_card_title">
                    Welcome to the website for the <br />
                Long Distance Engineers!
                </h3>
                <p className="character_card_text">
                    <br /><b>Team Members:</b> Joshua Bautch, Stephen Mitchell, Kelly Sadel, Andrew Sklavounos, Charlotte
                    Solak <br />
                    <br />This website focuses on gamifying skills and activities that can be learned during this time inside.
                    <br /><br />
                    To do this, skills are separated in to "skill trees" and broken up into various activites that help a
                    person become more
                    adept at that skill. The activitites at the bottom of the tree are easy, but get progressively harder the
                    more progress is made.
                    <br /><br />
                    Currently, only the "Cooking" tree has been implemented, however the plan is to implement the same
                    structure for various skills
                    in order to give our users a starting point for learning new things.
                    <br />
                    To use this website, hover over nodes to read a description. Some nodes are links to websites. Click to be
                    taken to that recipe! <br /><br />
                    I hope you enjoy our website!
                </p>
                <h3 className="character_card_title">
                    <br />(to minimize this window, click anywhere in this gray box)
                </h3>
            </div>
        );
    }
}

export default CharacterCard;