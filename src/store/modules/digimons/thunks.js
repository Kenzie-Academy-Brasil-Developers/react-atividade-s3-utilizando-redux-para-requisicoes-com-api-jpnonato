import axios from "axios";
import { addDigimon } from "./actions";

const addDigimonsThunk = (digimon) => (dispatch, getstore) => {


    axios.get('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.data.find((elt) => elt.name === digimon))
    .then((response) => dispatch(addDigimon(response)))
    // .catch((err) => setError(err))

 //Aqui faça uma requisição com o axios e em seguida, no .then()
 //utilize a função dispatch() passando addDigimon(response.data[0].name)
}

export default addDigimonsThunk