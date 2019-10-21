import loadProfile from '../common/load-profile.js';
import { findById } from '../common/utils.js';
import { bossesDict } from '../data/boss-data.js';

//loadProfile();

const searchParams = new URLSearchParams(window.location.search);
const bossId = searchParams.get('boss');
//const bossBehavior = findById(bosses, bossId);

if (!bossId) window.location = '../'; //if not boss for some reason, return to homepage (like navigation was done directly)

const bossCorrectPct = bossesDict[bossId].correctPct;

const quizHeaderH2 = document.getElementById('quiz-header-h2');
console.log(quizHeaderH2);
quizHeaderH2.textContent = bossId;


var myOtherQuestions = [{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'How many Hz does the video standard PAL support?',
    correct_answer: '50',
    incorrect_answers: [
        '59',
        '60',
        '25'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'On which computer hardware device is the BIOS chip located?',
    correct_answer: 'Motherboard',
    incorrect_answers: [
        'Hard Disk Drive',
        'Central Processing Unit',
        'Graphics Processing Unit'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Which coding language was the #1 programming language in terms of usage on GitHub in 2015?',
    correct_answer: 'JavaScript',
    incorrect_answers: [
        'C#',
        'Python',
        'PHP'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What is the name of the default theme that is installed with Windows XP?',
    correct_answer: 'Luna',
    incorrect_answers: [
        'Neptune',
        'Whistler',
        'Bliss'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'In CSS, which of these values CANNOT be used with the &quot;position&quot; property?',
    correct_answer: 'center',
    incorrect_answers: [
        'static',
        'absolute',
        'relative'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'medium',
    question: 'In computing terms, typically what does CLI stand for?',
    correct_answer: 'Command Line Interface',
    incorrect_answers: [
        'Common Language Input',
        'Control Line Interface',
        'Common Language Interface'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who is the original author of the realtime physics engine called PhysX?',
    correct_answer: 'NovodeX',
    incorrect_answers: [
        'Ageia',
        'Nvidia',
        'AMD'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Which of the following is the oldest of these computers by release date?',
    correct_answer: 'TRS-80',
    incorrect_answers: [
        'Commodore 64',
        'ZX Spectrum',
        'Apple 3'
    ]
},
{
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: [
        'Python',
        'C',
        'Jakarta'
    ]
},
];

var myQuestions = [
    {
        question: 'What is 10/2?',
        answers: {
            a: '3',
            b: '5',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: 'What is 30/3?',
        answers: {
            a: '3',
            b: '5',
            c: '10'
        },
        correctAnswer: 'c'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myOtherQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        const output = [];
        let answers;

        // for each question...
        for (let i = 0; i < questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for (let letter in questions[i].incorrect_answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].incorrect_answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        let userAnswer = '';
        let numCorrect = 0;
        
        // for each question...
        for (let i = 0; i < questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            
            // if answer is correct
            if (userAnswer === questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else {
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    };

}