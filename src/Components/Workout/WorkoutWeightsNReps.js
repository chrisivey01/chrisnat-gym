import React from 'react'


const WorkoutWeightsNReps = (props) => {


    return(
        <div className="inputs" key={props.iterator}>
            <label className="setCounts">Set {props.iterator + 1}</label>
            <input className="form-control" placeholder="Weight" value={props.workout[props.iterator].weight}
                   onChange={props.getWeightHandler.bind(this, props.iterator)}></input>
            <input className="form-control" placeholder="Reps" value={props.workout[props.iterator].reps} onChange={
                props.getRepsHandler.bind(this, props.iterator)}></input>
        </div>
    )

}
export default WorkoutWeightsNReps;