import React from 'react'
import Routes from '../../Routes/Routes'

const WorkoutType = (props) => {
    return(

            <Routes workoutTypeHandler={props.workoutTypeHandler}/>
    )
}

export default WorkoutType;



//
// render()
// {
//     return (
//         <Router>
//             <div className="routes">
//                 <div className="routesContainer">
//                     <Link className="boards" onClick={this.props.loadWeeklyData} to="/weekly">Weekly Leaderboard</Link>
//                     <Link className="boards" onClick={this.props.loadMasterData} to="/top">Top Leaderboard</Link>
//                 </div>
//
//                 <hr/>
//
//                 <Route exact path='/weekly' render={(props) =>
//                     (<WeeklyKills {...props} data={this.props.weeklyData}/>
//                     )}/>
//
//
//                 <Route exact path='/top' render={(props) =>
//                     (<TotalKills {...props} totalData={this.props.totalData}/>
//                     )}/>
//
//                 <Route exact path='/' component={Discord}/>
//             </div>
//         </Router>
//     )
// }
