import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Bench from '../Components/Bench/Bench'
import Deadlift from '../Components/Deadlift/Deadlift'
import OHP from '../Components/OHP/OHP'
import Squat from '../Components/Squat/Squat'


class Routes extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
                <div>
                <div className="headerContainer">
                    <Link className="headerItem" to="/Squat" onClick={this.props.workoutTypeHandler}>Squat</Link>
                    <Link className="headerItem" to="/Bench" onClick={this.props.workoutTypeHandler}>Bench</Link>
                    <Link className="headerItem" to="/Deadlift" onClick={this.props.workoutTypeHandler}>Deadlift</Link>
                    <Link className="headerItem" to="/Ohp" onClick={this.props.workoutTypeHandler}>OHP</Link>
                </div>
                </div>
    )
    }
}

export default Routes;

// import React, {Component} from 'react'
// import TotalKills from '../KillComponents/TotalKills'
// import WeeklyKills from '../KillComponents/WeeklyKills'
// import Discord from '../Discord'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//
//
// class RouterWeb extends Component {
//     constructor(props) {
//         super(props)
//
//     }
//
//     render()
//     {
//         return (
//             <Router>
//                 <div className="routes">
//                     <div className="routesContainer">
//                         <Link className="boards" onClick={this.props.loadWeeklyData} to="/weekly">Weekly Leaderboard</Link>
//                         <Link className="boards" onClick={this.props.loadMasterData} to="/top">Top Leaderboard</Link>
//                     </div>
//
//                     <hr/>
//
//                     <Route exact path='/weekly' render={(props) =>
//                         (<WeeklyKills {...props} data={this.props.weeklyData}/>
//                         )}/>
//
//
//                     <Route exact path='/top' render={(props) =>
//                         (<TotalKills {...props} totalData={this.props.totalData}/>
//                         )}/>
//
//                     <Route exact path='/' component={Discord}/>
//                 </div>
//             </Router>
//         )
//     }
//
// }
//
// export default RouterWeb;