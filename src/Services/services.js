import Main from '../Layout/Main'
const API = 'http://localhost:3500'



export default {


    loginAttempt(credentials){
    return fetch(API + '/login',{
            method:'post',
            body: JSON.stringify(credentials),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })

    },

    sendWorkout(workout){
        return fetch(API + '/sendData', {
            method:'post',
            body: JSON.stringify(workout),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
    },

    getSquat(lifterName){
        let lifterObj= {};
        lifterObj["lifterName"] = lifterName
        return fetch(API + '/squatData', {
            method:'post',
            body: JSON.stringify(lifterObj),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
    },
    getBench(lifterName){
        let lifterObj= {};
        lifterObj["lifterName"] = lifterName
        return fetch(API + '/benchData', {
            method:'post',
            body: JSON.stringify(lifterObj),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
    },
    getDeadlift(lifterName){
        let lifterObj= {};
        lifterObj["lifterName"] = lifterName
        return fetch(API + '/deadliftData', {
            method:'post',
            body: JSON.stringify(lifterObj),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
    },
    getOHP(lifterName){
        let lifterObj= {};
        lifterObj["lifterName"] = lifterName
        return fetch(API + '/overheadpressData', {
            method:'post',
            body: JSON.stringify(lifterObj),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

        })
    },
}