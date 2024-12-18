'use strict';


//Select all required elements
const start_btn = document.querySelector(".start_btn button")
const info_box = document.querySelector(".info_box")
const exit_btn = document.querySelector(".buttons .quit")
const continue_btn = info_box.querySelector(".buttons .restart")
const quiz_box = document.querySelector(".quiz_box")
const result_box = document.querySelector(".result_box")
const option_list = document.querySelector(".option_list")
const time_line = document.querySelector("header .time_line")
const timeText = document.querySelector(".timer .time_left_txt")
const timeCount = document.querySelector(".timer .timer_sec")

//if the "Start Quiz" button is clicked
start_btn.onclick = ()=>{
    info_box.classList.add('activeInfo');  
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}


//if you choose the continue button
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo")
    quiz_box.classList.add("activeQuiz") //show the quiz
    showQuestions(0);//this call the show question function
    queCounter(1);
    startTimer(30) // this call the startTimer function
    startTimerLine(0); //this call the startTimerLine function
}


let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show the quiz box
    result_box.classList.remove("activeResult") // hide the result box
    timeValue = 30
    que_count = 0
    que_numb = 1
    userScore = 0
    widthValue = 0
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); // call the startTimer function
    startTimerLine(widthValue); // call the startTimerLine function
    timeText.textContent = "Time Left" ; // change the text of timeText to time left
    next_btn.classList.remove("show") //hide the next button
}

// if quit quiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que")

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++ //increment the question count value
        que_numb++ //increment the question number value
        showQuestions(que_count) 
        queCounter(que_numb)
        clearInterval(counter) //clear counter
        clearInterval(counterLine) //clear counterLine
        startTimer(timeValue); //calling startTimer function
        startTimerLine(widthValue)
        timeText.textContent = "Time Left" //change the timeText to time left
        next_btn.classList.remove("showw") //hide the next button
    }else{
        clearInterval(counter)
        clearInterval(counterLine)
        showResult();
    }
}

function showQuestions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new span and div tag for question and option and passing the value using array
    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag = '<div class="option"><span>' + questions[index].options[0] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[1] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[2] + '</span></div>'
    + '<div class="option"><span>' + questions[index].options[3] + '</span></div>'
    que_text.innerHTML = que_tag; //adding new span tag inside que_tag
    option_list.innerHTML = option_tag //adding new div tag inside option_tag

    const option = option_list.querySelectorAll(".option");

    //set onclick attribute to all available options
    for(let i=0; i<option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }

}

//creating the new div tags for icons
let tickIconTag = '<div class="icon tick"><i class="fa-solid fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicks on an answer
function optionSelected(answer){
    clearInterval(counter)
    clearInterval(counterLine)
    let userAns = answer.textContent; //getting the option selected by the user
    let correcAns = questions[que_count].answer //getting the correct answer from the array
    const allOptions = option_list.children.length; //getting all option items

    if(userAns == correcAns){
        userScore++
        answer.classList.add("correct") //add green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag) // add tick icon 
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore)
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon tag to incorrect selected option
        console.log("Wrong Answer");

        for(let i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){
                option_list.children[i].setAttribute("class", "option correct") // add green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                console.log("Auto selected correct answer")
            }
        }
    }
    for(let i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled") //once user select an option, disable question
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    info_box.classList.remove("activeInfo") //hide info box
    quiz_box.classList.remove("activeQuiz") //hide quiz box
    result_box.classList.add("activeResult") //show result box

    const scoreText = result_box.querySelector(".score_text")

    if(userScore > 6){
        //create a new span tag and pass the user score number and total question number
        let scoreTag = '<span>and congrats! , you got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag; //adding new span tag inside score_text; 

    }else if(userScore > 4){
        let scoreTag = '<span>and nice, You got <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;

    }else{
        let scoreTag = '<span>and sorry, You got only <p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //changing the value of time count with time value
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero; // add a 0 before time value
        }
        if(time < 0){
            clearInterval(counter);
            timeText.textContent = "Time off"; //change the time text with time off
            const allOptions = option_list.children.length //getting all options items
            let correcAns = questions[que_count].answer //getting the correct answer
            for(let i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){
                    option_list.children[i].setAttribute("class", "option correct")
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time off: Auto selected correct answer")
                }
            }
            for(let i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled") //once user select an option, disable question
            }
            next_btn.classList.add("show"); //show the next button if user selected any option
        
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time++;
        time_line.computedStyleMap.width = time + "px"; //increasing width of time_line with px by time value
        if(time > 549){
            clearInterval(counterLine)
        }
    }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCountTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCountTag //adding new span tag inside bottom_ques_counter
}

