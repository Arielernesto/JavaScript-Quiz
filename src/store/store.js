import { create } from "zustand";
import { persist }from "zustand/middleware"

export const useQuestionStore = create(persist((set, get) => {

    return {
        questions: [],
        currentQuestion: 0,
        selectAnswer: (questionId, answerId) => {
            const { questions } = get()
            const newQuestions = structuredClone(questions)
            const questionIndex = newQuestions.findIndex(q  => q.id == questionId)
            const questionInfo = newQuestions[questionIndex]
            const isCorrectAnswer = questionInfo.correctAnswer == answerId
            newQuestions[questionIndex] = {
                ...questionInfo,
                isCorrectAnswer,
                userSelectedAnswer: answerId
            }
            set({questions: newQuestions})
        },

        fetchQuestions: async (lymit)  => {
            const pet = await fetch('http://localhost:5173/data.json')
            const res = await pet.json()
            
            const questions = res.sort(()  => Math.random() - 0.5).slice(0, lymit)
            set({ questions })
        },
        goNextQuestion: () => {
            const {currentQuestion, questions} = get();
            const nextQuestion = currentQuestion + 1
            if (nextQuestion < questions.length) {
                set({currentQuestion: nextQuestion})
            }

        },
        goPrevQuestion: () => {
            const { currentQuestion } = get()
            const previusQuestion = currentQuestion - 1
            if (previusQuestion >= 0) {
                set({currentQuestion: previusQuestion})
            }
        },
        reset: ()  => {
            set({
                currentQuestion: 0, questions: []
            })
        }
    }
}, {
    name: 'questions'
}))