import { useQuestionStore } from "../store/store"

export default function useUserQuestions(){
    const questions = useQuestionStore(state => state.questions)
    const QuestionLength = {
        unanswered: [],
        correct: [],
        incorrect: []
    }
    const userQuestions = Object.groupBy(questions, question => {
        const {userSelectedAnswer, correctAnswer} = question
        if (userSelectedAnswer == null) return  QuestionLength.unanswered.push(question)
        else if (userSelectedAnswer == correctAnswer) return QuestionLength.correct.push(question)
        return QuestionLength.incorrect.push(question)
    })
    const {unanswered, correct, incorrect} = QuestionLength
    return {unanswered, correct, incorrect }
}