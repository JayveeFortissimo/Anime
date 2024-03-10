import anime from './Data/information.js'
import { useState, useEffect } from 'react'
import style from './styles/style.module.css'
import music from './audio/Saenai.mp3'
import Footer from './Components/footer.jsx'
function App() {

  
const [modal,setmodal] = useState(false);
const [plays,playMusics] = useState("");
const [arrays,setarrays] = useState([])



function play(){
 playMusics( new Audio(music).play())
}

  return (
    <>

  <header>
    <nav>
      <h1>Hanime<span style={{color:"red"}}>Hub</span></h1>

      <div className={style.apps}>
      <div className="material-symbols-outlined" onClick={play} id={style.audio} >
 play_arrow
</div>
      </div>
      
    </nav>
  </header>

    <div className={style.parent}>


      <div className={style.child}>

        {anime.map((elements,index)=>{
              return(
                <div key={elements.name}>
                <div className={style.animes} key={elements.name} onClick={()=> {
                  setmodal(true);

                  if(!arrays.some(item => item.name === elements.name)){
                    setarrays(current => [...current,{img:elements.image,name:elements.name,age:elements.age,Information:elements.info}]);
                  }
                 
                }}>
                         <img src={elements.image} alt="" />
                         <div className={style.text}>
                         <h3>Name: {elements.name}</h3>
                         <h4>Age: {elements.age}</h4>
                         </div>
                </div>
                </div>
              )
        })}

      </div>

    </div>

    
{/*/////////////Modals//////////////////////////////////(*/}
{
  modal && 
  
  <div className={style.modals}>
    <div className={style.container}>
        <div>
   <button onClick={()=>{
    setmodal(false);
    setarrays([])
   }}>X</button>
        </div>

{arrays.map(inso =>{
  return(
    <div className={style.Info} key={inso.name}>
      <div >
         <img src={inso.img} alt="" id={style.imgh}/>
      </div>

      <div className={style.texts}>
     <dl>
      <dt>{inso.name}</dt>
      <dd>{inso.Information}</dd>
     </dl>
      </div>
    </div>
  )
})

}


    </div>
     </div>   
}
  
  {/*////////////////////////////////////////////*/}
{console.log(arrays)}

<Footer />
    </>
  )
}

export default App
