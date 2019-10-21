import { shuffle } from '../common/utils.js';
import { bossesDict } from '../data/boss-data.js';
import { questions } from '../data/quiz-data.js';
import { OPPONENT_KEY, USER_KEY } from '../home/home.js';
import { getPlayer, savePlayer } from '../data/api.js';
import { updateHeader } from '../common/header.js';

const searchParams = new URLSearchParams(window.location.search);
const bossId = searchParams.get('boss');

if (!bossId) window.location = '../';
const bossCorrectPct = bossesDict[bossId].correctPct;

const quizHeaderH2 = document.getElementById('quiz-header-h2');
quizHeaderH2.textContent = `You Vs. ` + bossesDict[bossId].name;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
let currentQuestion = 0;
// generateQuiz(questions, quizContainer, resultsContainer, submitButton);
function showQuestion(thisQuestion) {
    let answersHTML = '';
    const possibleAnswers = thisQuestion.incorrect_answers;
    possibleAnswers.push(thisQuestion.correct_answer);
    shuffle(possibleAnswers);
    possibleAnswers.forEach((answer) => {
        answersHTML +=
        '<label>'
        + `<input type="radio" name="question" value="` + answer + `">` + answer
        + '</label>';
    });
    quizContainer.innerHTML = thisQuestion.question + '<br>' + answersHTML;
}
showQuestion(questions[currentQuestion]);

submitButton.onclick = function() {
    if (!document.querySelector('input[name=question]:checked')) {
        alert('Please choose an answer to proceed');
        return;
    }
    const playerAnswer = document.querySelector('input[name=question]:checked').value;
    if (playerAnswer === questions[currentQuestion].correct_answer) {
        const thePlayer = getPlayer(USER_KEY);
        thePlayer.score += 1;
        savePlayer(USER_KEY, thePlayer);
    }
    if (++currentQuestion < questions.length)
        showQuestion(questions[currentQuestion]);
    else showResult();

    const theHeader = document.getElementById('header-div');
    console.log(theHeader);
    theHeader.innerHTML = 'boguus';
    updateHeader();
};

function showResult() {

}

// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

//     function showQuestion(questions, quizContainer){
//         // we'll need a place to store the output and the answer choices
//         const output = [];
//         let answers;

//         // for each question...
//         for (let i = 0; i < questions.length; i++){
            
//             // first reset the list of answers
//             answers = [];

//             // for each available answer...
//             for (let letter in questions[i].incorrect_answers){

//                 // ...add an html radio button
//                 answers.push(
//                     '<label>'
//                         + '<input type="radio" name="question' + i + '" value="' + letter + '">'
//                         + letter + ': '
//                         + questions[i].incorrect_answers[letter]
//                     + '</label>'
//                 );
//             }

//             // add this question and its answers to the output
//             output.push(
//                 '<div class="question">' + questions[i].question + '</div>'
//                 + '<div class="answers">' + answers.join('') + '</div>'
//             );
//         }

//         // finally combine our output list into one string of html and put it on the page
//         quizContainer.innerHTML = output.join('');
//     }


//     function showResults(questions, quizContainer, resultsContainer){
        
//         // gather answer containers from our quiz
//         const answerContainers = quizContainer.querySelectorAll('.answers');
        
//         // keep track of user's answers
//         let userAnswer = '';
//         let numCorrect = 0;
        
//         // for each question...
//         for (let i = 0; i < questions.length; i++){

//             // find selected answer
//             userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;
            
//             // if answer is correct
//             if (userAnswer === questions[i].correctAnswer){
//                 // add to the number of correct answers
//                 numCorrect++;
                
//                 // color the answers green
//                 answerContainers[i].style.color = 'lightgreen';
//             }
//             // if answer is wrong or blank
//             else {
//                 // color the answers red
//                 answerContainers[i].style.color = 'red';
//             }
//         }

//         // show number of correct answers out of total
//         resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
//     }

//     // show questions right away
//     showQuestions(questions, quizContainer);
    
//     // on submit, show results
//     submitButton.onclick = function(){
//         showResults(questions, quizContainer, resultsContainer);
//     };

// }