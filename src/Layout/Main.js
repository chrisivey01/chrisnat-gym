import React, {Component} from 'react'
import WorkoutInputs from '../Components/Workout/WorkoutInputs'
import WorkoutWeightsNReps from '../Components/Workout/WorkoutWeightsNReps'
import WorkoutType from '../Components/Workout/WorkoutType'
import Squat from "../Components/Squat/Squat";
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";


import Login from "./Login";
import services from '../Services/services'


class Main extends Component{

    constructor(props) {
        super(props)

        this.state = {
            workoutType: '',
            workout: [],
            workoutData:[],
            setCount: '',
            user: '',
            isLogged: false,
            popUpError: false,
            popUpSubmit: false,
            lifterName: '',
            lifterPassword:''

        }
    }

    getIDHandler = (e) =>{
        let value = e.currentTarget.value
        this.setState({
            lifterName:value
        })
    }

    getPassHandler = (e) =>{
        this.setState({
            lifterPassword:e.currentTarget.value
        })
    }

    loginHandler = () => {
        let credentials = {};
        credentials["lifterName"] = this.state.lifterName
        credentials["lifterPassword"] = this.state.lifterPassword
        let passOrFail = services.loginAttempt(credentials)
        passOrFail.then((response)=>{
            return response.json();
        })
        .then((response) => {
            if(response.passed === true){
                let logSuccess = true;
                let popUp = false;
                this.setState({
                    isLogged: logSuccess,
                    popUp: popUp,
                })
            }else{
                let logSuccess = false;
                let popUp = true;
                this.setState({
                    isLogged:logSuccess,
                    popUp: popUp
                })
            }
        })
        .catch((err)=>{
            console.log(err)
            this.setState({
                popUp:true
            })
        })
    }






    setPickHandler = (e) => {

        const {workout} = this.state;
        let workoutCopy = [...this.state.workout]


        let setCountCopy = e.target.value


        if(setCountCopy){
            if(workoutCopy.length <= setCountCopy){
                for(let i = workout.length; i<setCountCopy; i++) {
                    //create workout inputs
                    workout.push({weight:'', reps:''})
                }
            }else{
                for(let i = workout.length; i>setCountCopy; i--) {
                    workout.pop();
                }
            }
        }


        this.setState({
            setCount : setCountCopy
        })
    }

    getWeightHandler = (i,e) => {
        const {workout} = this.state
        let workoutCopy = workout

        workoutCopy[i].weight = e.target.value

        this.setState({
            workout:workoutCopy
        })
    }

    getRepsHandler = (i,e) => {
        const {workout} = this.state
        let workoutCopy = workout

        workoutCopy[i].reps = e.target.value

        this.setState({
            workout:workoutCopy
        })
    }

    workoutTypeHandler = (e) => {


        let picked = e.target.text;
        let lifterName = this.state.lifterName
        let workoutObtained;

        if(picked === "Squat"){
            let squatData = services.getSquat(lifterName)

            squatData
                .then((response) => {
                    return response.json()
                })
                .then((response) =>{
                        for(let i = 0; i<response.result.length; i++ ){
                            response.result[i].day = response.result[i].day.substring(0,10)
                        }
                      workoutObtained = response.result

                    console.log(workoutObtained)
                    this.setState({
                        workoutData:workoutObtained,
                        workoutType: picked

                    })
                })
        }
        //
        // this.setState({
        //     workoutType: picked
        // })
    }

    submitWeights = () =>{


        let workoutParams = {}
        workoutParams["workoutType"] = this.state.workoutType
        workoutParams["lift"] = JSON.stringify(this.state.workout)
        workoutParams["lifter"] = this.state.lifterName



        let submitWorkout = services.sendWorkout(workoutParams)
        submitWorkout
            .then((response) => {
                return response.json()
            })
            .then((response)=>{
                console.log(response)
                console.log("Workout Type: " + this.state.workoutType + "Lifts: " + JSON.stringify(this.state.workout) +
                    "Lifter name: " + this.state.lifterName + " " + this.state.lifterPassword + " " + this.state.isLogged)
            })
            .catch((err)=>{
                console.log(err)
            })
        //need to set state and form object

    }


    render(){
        //destructor
        const {workout, isLogged, lifterName, lifterPassword, popUpError,workoutData} = this.state;
        return(
            <Router>
            <div>
                <div className="container">
                    {isLogged === false ?
                        <Login
                            lifterName={lifterName}
                            lifterPassword={lifterPassword}
                            getIDHandler={this.getIDHandler.bind(this)}
                            getPassHandler={this.getPassHandler.bind(this)}
                            loginHandler={this.loginHandler}
                            popUpError={popUpError}/> :
                        <div>
                            <WorkoutType
                                workoutTypeHandler={this.workoutTypeHandler}
                                workoutData={workoutData}/>
                            {this.state.workoutType ?
                                <WorkoutInputs
                                    setCount={this.state.setCount}
                                    setPickHandler={this.setPickHandler}

                                /> : null}
                            <div className="inputContainer">
                                {workout.map((item, i) => {
                                    return (
                                        <WorkoutWeightsNReps
                                            key={i}
                                            iterator={i}
                                            workout={workout}
                                            getWeightHandler={this.getWeightHandler}
                                            getRepsHandler={this.getRepsHandler}
                                        />
                                    )
                                })
                                }
                                {this.state.setCount ? <button className="submitButton"
                                                               onClick={this.submitWeights}> Submit </button> : null}

                            </div>
                        </div>
                    }
                </div>
                <hr/>
                <div className="body">
                    <Route path='/squat' render={(props) => (<Squat {...props} workoutData={workoutData}/>)}/>

                </div>
            </div>
            </Router>
        )
    }

}
export default Main;