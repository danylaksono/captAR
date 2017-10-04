// Action Types
const CREATE_PLAYER = 'CREATE_PLAYER'
const ASSIGN_PLAYER_TEAM = 'ASSIGN_PLAYER_TEAM'
// save player location --> thunk, save loc to db
const GET_PLAYER_LOCATION = 'GET_PLAYER_LOCATION'
const CHANGE_PLAYER_STATUS = 'CHANGE_PLAYER_STATUS'
const CLEAR_PLAYER = 'CLEAR_PLAYER'

// Initial State

let players = [ ]

// HAVE SESSION/GAME ID on every object, duration, gameID

/*
Object: 
{
    session: {
        gameId: null,
        duration: null,
    }
    playerId: null,
    location: {
        position: { latitude: null, longitude: null }
    },
    team: null, // red/blue
    tagged: null, // true/false
    hasFlag: null, // true/false
}
*/

// Action Creators
export function createPlayer(player){
  const action = {type: CREATE_PLAYER, player}
  return action
}

export function assignPlayerTeam(player){
    const action = {type: ASSIGN_PLAYER_TEAM, player}
    return action
}

export function getPlayerLocation(player){
    const action = {type: GET_PLAYER_LOCATION, player}
    return action
}

export function changePlayerStatus(player){
    const action = {type: CHANGE_PLAYER_STATUS, player}
    return action
}

export function clearPlayer(player){
    const action = {type: CLEAR_PLAYER, player}
    return action
}

// REDUCERS
export default (state = players, action) => {
  switch (action.type) {

    case CREATE_PLAYER:
        return [...state, action.player]

    case ASSIGN_PLAYER_TEAM:
        let newState = state.filter(player => player.playerId !== action.player.playerId)
        return [...state, action.player]

    case GET_PLAYER_LOCATION:
        let newState = state.filter(player => player.playerId !== action.player.playerId)
        return [...state, action.player]

    case CHANGE_PLAYER_STATUS:
        let newState = state.filter(player => player.playerId !== action.player.playerId)    
        return [...state, action.player]

    case CLEAR_PLAYER:
        let newState = state.filter(player => player.playerId !== action.player.playerId)
        return [...newState]

    default:
        return state;
  }
}