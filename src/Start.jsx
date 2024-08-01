import { useQuestionStore } from './store/store'
const LIMIT_QUESTIONS = 10

export const Start = ({props}) => {

    const fetchQuestions = useQuestionStore(state => state.fetchQuestions)
   
    async function handleStart(){
        await fetchQuestions(LIMIT_QUESTIONS)

         }

    return (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={handleStart} className=" button-general " {...props}>Empezar</button>
        </div>
    )
}