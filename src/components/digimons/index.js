import { useSelector } from "react-redux"
import {  toast } from 'react-toastify';


const Digimons = () => {

   const {digimons} = useSelector(store => store)

    
    return (
      <div>
          { 
            digimons.map((elt) => {
              return( 
                <div>
                  {
                    elt === undefined ? <>{toast.warning('Digimon não existe!')}</> :
                    <div>
                      <h3>{elt.name}</h3>
                      <img src={`${elt.img}`} />
                      <h3>Level: {elt.level}</h3>
                    </div> 
                  }
                </div>
              )
           }) 
          }
      </div>
    )
  }
  
  export default Digimons