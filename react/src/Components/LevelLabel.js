import React from 'react';
import Level from './Level';

class LevelLabel extends React.Component {
    render() {
        return (
            <div className="level_labels">
                <Level levelLineNumber="level_line_1" levelTitleNumber="level_title_1" levelTitle="Level 1"></Level>
                <Level levelLineNumber="level_line_2" levelTitleNumber="level_title_2" levelTitle="Level 2"></Level>
                <Level levelLineNumber="level_line_3" levelTitleNumber="level_title_3" levelTitle="Level 3"></Level>
                <Level levelLineNumber="level_line_4" levelTitleNumber="level_title_4" levelTitle="Level 4"></Level>
            </div>
        );
    }
}

export default LevelLabel;