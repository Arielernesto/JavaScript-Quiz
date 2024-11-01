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
           const res = [
                {
                    "id": 1,
                    "question": "¿Cuál es la salida de este código?",
                    "code": "console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10))",
                    "answers": [
                        "undefined", 
                        "NaN",
                        "string",
                        "number"
                    ],
                    "correctAnswer": 3
                },  {
                    "id": 2,
                    "question": "¿Cuál es el resultado de la siguiente expresión?",
                    "code": " 3 + 2 + '7' ",
                    "answers": [
                        "12",
                        "327",
                        "57",
                        "number"
                    ],
                    "correctAnswer": 2
                },
                    {
                        "id": 3,
                        "question": "¿Cuál es la salida de este código?",
                        "code": "console.log(1 + '1')",
                        "answers": [
                            "11",
                            "2",
                            "undefined",
                            "NaN"
                        ],
                        "correctAnswer": 0
                    },
                    {
                        "id": 4,
                        "question": "¿Cuál es la salida de este código?",
                        "code": "console.log(typeof null)",
                        "answers": [
                            "undefined",
                            "null",
                            "string",
                            "object"
                        ],
                        "correctAnswer": 3
                    },
                    
                    
                        {
                            "id": 5,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(2 + 3 + '5')",
                            "answers": [
                                "55",
                                "235",
                                "10",
                                "25"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 6,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(0.1 + 0.2 === 0.3)",
                            "answers": [
                                "true",
                                "false",
                                "undefined",
                                "NaN"
                            ],
                            "correctAnswer": 1
                        },
                        
                        {
                            "id": 7,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log([] + [])",
                            "answers": [
                                "[]",
                                "''",
                                "undefined",
                                "NaN"
                            ],
                            "correctAnswer": 1
                        },
                    
                        {
                            "id": 8,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10))",
                            "answers": [
                                "3628800",
                                "55",
                                "undefined",
                                "NaN"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 9,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log((function(){return typeof arguments})())",
                            "answers": [
                                "object",
                                "array",
                                "undefined",
                                "NaN"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 10,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(1 + '1' - 1)",
                            "answers": [
                                "10",
                                "11",
                                "110",
                                "1"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 11,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(['1', '7', '11'].map(parseInt))",
                            "answers": [
                                "[1, 7, 11]",
                                "[1, NaN, 3]",
                                "[1, 7, NaN]",
                                "['1', '7', '11']"
                            ],
                            "correctAnswer": 1
                        },
                        {
                            "id": 12,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(2 + true)",
                            "answers": [
                                "2",
                                "true",
                                "3",
                                "Error"
                            ],
                            "correctAnswer": 2
                        },
                        {
                            "id": 13,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(0.1 + 0.2 === 0.3)",
                            "answers": [
                                "true",
                                "false",
                                "NaN",
                                "undefined"
                            ],
                            "correctAnswer": 1
                        },
                        {
                            "id": 14,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(typeof null)",
                            "answers": [
                                "'object'",
                                "'null'",
                                "'undefined'",
                                "'boolean'"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 15,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log('i' + ' in team')",
                            "answers": [
                                "'i in team'",
                                "'in team'",
                                "'team'",
                                "Error"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 16,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log('2' + 3)",
                            "answers": [
                                "'23'",
                                "'5'",
                                "Error",
                                "undefined"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 17,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(4 + '7' - 2)",
                            "answers": [
                                "'47'",
                                "'72'",
                                "'45'",
                                "Error"
                            ],
                            "correctAnswer": 2
                        },
                        {
                            "id": 18,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log([] + {})",
                            "answers": [
                                "'[object Object]'",
                                "'{}'",
                                "[]",
                                "Error"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 19,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log(typeof typeof 1)",
                            "answers": [
                                "'number'",
                                "'string'",
                                "'undefined'",
                                "'object'"
                            ],
                            "correctAnswer": 1
                        },
                        {
                            "id": 20,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log((0.1 + 0.2).toFixed(1) === '0.3')",
                            "answers": [
                                "true",
                                "false",
                                "NaN",
                                "undefined"
                            ],
                            "correctAnswer": 0
                        },
                        {
                            "id": 21,
                            "question": "¿Cuál es la salida de este código?",
                            "code": "console.log('10' - 5)",
                            "answers": [
                                "'5'",
                                "5",
                                "Error",
                                "undefined"
                            ],
                            "correctAnswer": 1
                        }
                        
                        
                        
                        
                
            ]
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