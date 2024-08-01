import { useQuestionStore } from "../store/store"
import SyntaxHighLighter from 'react-syntax-highlighter'
import { gradientDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import  { NextIcon, PrevIcon } from './Icons'
import Footer from "./footer"
const Questions = ({ info }) => {
    const selectAnswer = useQuestionStore(state  => state.selectAnswer)
    const getBackgroundColor = (index)  => {
        const {userSelectedAnswer, correctAnswer} = info
        if (userSelectedAnswer == null) return 'transparent'
        if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'
        if (index  == correctAnswer) return 'green'
        if (index == userSelectedAnswer) return 'red'

        return 'transparent'
    }
    return (
        <div style={{ backgroundColor: "#222", padding: "20px", borderRadius: "5px"}}>
            <h4 style={{color: "#ccc", margin: "0", marginBottom: "10px"}}>{info.question}</h4>
            <SyntaxHighLighter className="code" language="javascript" style={gradientDark}>
                {info.code}
            </SyntaxHighLighter>
            <ul className={`answers`} style={{backgroundColor: "#333"}}>
            <div style={{}} className={` ${info.userSelectedAnswer !== undefined ? 'selected' : ''}`}>

                {
                    info.answers.map((data,index) => (
                        <li style={{backgroundColor:  getBackgroundColor(index)}} key={index} onClick={()  => {
                            selectAnswer(info.id, index)
                        }}>{data}</li>
                    ))
                }
            </div>      
    
            </ul>

        </div>
    )
}

export function Game(){
    const questions = useQuestionStore(state => state.questions)
    const currentQuestion = useQuestionStore(state => state.currentQuestion)
    const questionInfo = questions[currentQuestion]
    const goNextQuestion = useQuestionStore(state => state.goNextQuestion)
    const goPrevQuestion = useQuestionStore(state => state.goPrevQuestion)

    const isNext = currentQuestion >= questions.length - 1 ? 'disabled' : ''
    const isPrev = currentQuestion == 0 ? 'disabled' : ''
    return (
        <>
        <div className=" arrows">
        <PrevIcon clase={isPrev} onClick={goPrevQuestion} /> <span > {currentQuestion + 1} / {questions.length} </span>  <NextIcon onClick={goNextQuestion} clase={isNext} />
        </div>
        <Questions info={questionInfo}/>
        <Footer></Footer>
        </>
    )
}