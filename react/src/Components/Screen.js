import React from 'react';
import CharacterCard from './CharacterCard';
import CharacterCardArrow from './CharacterCardArrow';
import ScreenContent from './ScreenContent';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen">
                <ScreenContent />
                <CharacterCard />
                <CharacterCardArrow />
            </div>
        );
    }
}

export default Screen;