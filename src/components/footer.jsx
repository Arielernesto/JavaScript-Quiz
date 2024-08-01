import { CheckIcon, BadIcon, InfoIcon } from "./Icons"
import useUserQuestions from "../Hooks/useUserQuestions"
import { useQuestionStore } from "../store/store"

export default function Footer(){
    
    const {unanswered, correct, incorrect} = useUserQuestions()
    const reset = useQuestionStore(state => state.reset )
    return (
        <footer style={{marginTop: '16px', textAlign: 'center'}}>
            <strong className=" questions" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ccc', textAlign: 'center', width: '100%'}}><CheckIcon />{correct.length} Correctas - <BadIcon />{incorrect.length} Incorrectas -  <InfoIcon />{unanswered.length} Sin Responder</strong>
            <button style={{ marginTop: '10px'}} className=" button-general" onClick={reset}>
                Reiniciar Juego
            </button>
            <div className='ariel'>
              <strong> Creado por: <a href="">Ariel Fajardo</a></strong>
            </div>
        </footer>
    )
}