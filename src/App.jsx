import { Start } from './Start'
import { JavascriptLogo, CheckIcon, BadIcon } from './components/Icons'
import { useQuestionStore } from './store/store'
import { Game } from './components/Game'
import useUserQuestions from './Hooks/useUserQuestions'
function App() {
  const questions = useQuestionStore(state => state.questions)
  const reset = useQuestionStore(state => state.reset)
  const {unanswered, correct, incorrect} = useUserQuestions()
  const isWin = correct > incorrect ? 'Has Ganado' : 'Has Perdido'
  return (
    <>
    <main>
      { unanswered.length == 0 && questions.length !== 0 &&
      <div className=' modal'>
        <div className=' win'>
          <h2>{isWin}</h2>
          <div>
          <strong className=' modal-strong'><span><CheckIcon /> {correct.length}</span><span> <BadIcon /> {incorrect.length} </span></strong>
          </div>
          <div className=' button-modal-div'>
            <button className=' button-general' onClick={reset}>Empezar De nuevo</button>
          </div>
        </div>
      </div>
}
      <section>
    <div  className='stack'>
      <JavascriptLogo />
      <h1>Javascript Quizz</h1>
      </div> 
      <div style={{maxWidth: "900px", width: "100%"}} className=' btn-start '>
        {
          questions.length > 0 ? (
            <article>
           <Game />
           </article>
          ) : (
            <>
            <Start />
            <div className='ariel start'>
              <strong> Creado por: <a href="">Ariel Fajardo</a></strong>
            </div>
            </>
          )
        }
      </div>
      </section>
      
      </main>
    </>
  )
}

export default App
