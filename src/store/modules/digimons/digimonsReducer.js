import axios from 'axios'

const initial = []


export default function digimonsReducer( state = initial, action){

    switch(action.type){
        case '@digimons/ADD':
            const {digimon} = action    
            return [...state, digimon]
            
            default:
                
                return state
            }
            
            



}