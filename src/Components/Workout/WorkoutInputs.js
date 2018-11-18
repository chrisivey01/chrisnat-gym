import React from 'react'

const WorkoutInputs = (props) => {
    return(
        <div className="selectContainer">
            <select id="inputState" className="form-control" value={props.setCount} onChange={props.setPickHandler}>
                <option value>How many sets...</option>
                <option value="1">1 Set</option>
                <option value="2">2 Sets</option>
                <option value="3">3 Sets</option>
                <option value="4">4 Sets</option>
                <option value="5">5 Sets</option>
            </select>
        </div>

    )
}

export default WorkoutInputs;