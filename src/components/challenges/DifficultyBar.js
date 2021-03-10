import React from 'react'
import Badge from '../smallComponents/Badge';

const DifficultyBar = ({ difficultyLevel }) => {
    // const level = 'Hard'
    let middleColor = 'gray';
    let lastColor = 'gray';
    let badgeColor = 'green'
    if (difficultyLevel === 'Intermediate') {
        middleColor = 'orange';
        badgeColor = 'orange';
    } else if (difficultyLevel === 'Hard') {
        middleColor = 'orange';
        lastColor = 'red';
        badgeColor = 'red';
    }
    return (
        <div className="relative mx-4">
            <Badge badgeColor={badgeColor} name={difficultyLevel} />
            <div className="overflow-hidden h-2 mb-4 text-xs flex bg-transparent">
                <div style={{ width: "33%" }} className="shadow-none flex flex-col text-center whitespace-nowrap rounded justify-center bg-green-500"></div>
                <div style={{ width: "33%" }} className={`shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-${middleColor}-500 mx-1`}></div>
                <div style={{ width: "34%" }} className={`shadow-none flex flex-col text-center rounded whitespace-nowrap justify-center bg-${lastColor}-500`}></div>
            </div>
        </div >
    )
}

export default DifficultyBar
