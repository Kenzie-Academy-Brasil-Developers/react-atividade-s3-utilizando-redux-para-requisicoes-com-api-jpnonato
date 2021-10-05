import axios from "axios";
import { addDigimon } from "./actions";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const addDigimonsThunk = (digimon) => (dispatch, getstore) => {


    axios.get('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.data.find((elt) => elt.name === digimon))
    .then((response) => {
        if(response !== undefined){
            
            dispatch(addDigimon(response))
        } else if( digimon === ''){
             toast.warning('Digite o nome de um digimon!',{ theme: 'dark'})
        }else{
            toast.error('Este Digimon não existe!',{ theme: 'dark'})
       }
    
    })
    
    
 //Aqui faça uma requisição com o axios e em seguida, no .then()
 //utilize a função dispatch() passando addDigimon(response.data[0].name)
}

export default addDigimonsThunk