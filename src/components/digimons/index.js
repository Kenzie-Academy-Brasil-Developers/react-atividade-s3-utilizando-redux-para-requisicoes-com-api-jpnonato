import { useSelector } from "react-redux"

const Digimons = () => {

   const {digimons} = useSelector(store => store)


    return (
      <div>
          { 
            digimons.map((elt) => {
              return( 
                <div>
                  {
                    elt === undefined ? <></> :
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