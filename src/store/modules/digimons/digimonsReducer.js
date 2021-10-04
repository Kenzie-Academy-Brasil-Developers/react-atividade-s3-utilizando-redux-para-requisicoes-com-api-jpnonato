import axios from 'axios'

const initial = []


export default function digimonsReducer( state = initial, action){

    switch(action.type){
        case '@digimons/ADD':
            const {digimon} = action
            console.log(digimon)    
            return [...state, digimon]
            
            default:
                
                return state
            }
            
            



}