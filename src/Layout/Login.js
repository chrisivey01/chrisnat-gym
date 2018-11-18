import React, {Component} from 'react'

const Login = (props) =>{
    const {isLogged, lifterName, lifterPassword} = props

    return(

        <div>
            {props.popUpError === true ?
                <div>
                    <label>Login Failed</label>
                </div> : null
            }
            <div>
                <input placeholder="Username" value={props.lifterName} onChange={props.getIDHandler}/>
            </div>
            <div>
                <input placeholder="Password" value={props.lifterPassword} onChange={props.getPassHandler}/>
            </div>

            <div>
                <button onClick={props.loginHandler}>Log in</button>
            </div>
        </div>
    )


}

export default Login;