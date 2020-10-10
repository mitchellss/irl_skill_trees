import React from 'react';
import SkillTree from './SkillTree';
import LevelLabel from './LevelLabel';

class ScreenContent extends React.Component {
    render() {
        return (
            <div className="screen_content" id="scroll_screen">
                <SkillTree />
                <LevelLabel />
            </div>
        );
    }

    componentDidMount() {
        document.getElementById("scroll_screen").scrollIntoView(false);
    }

}

export default ScreenContent;