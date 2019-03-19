const timeStart = 100;
document.querySelector('#timer').textContent = ('TIMER = ' + timeStart);

setTimeout(_ => {
  console.log('times up!')
}, 5000)


let score = 0;
let myquestions = [
	{
		question: "What is 2+2?",
		answers: {
			a: '3',
			b: '4',
			c: '100'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is 30+10?",
		answers: {
			a: '40',
			b: '5',
			c: '20'
		},
    correctAnswer: 'a'
  },
  {
  question: "What is 2+3?",
		answers: {
			a: '0',
			b: '5',
			c: '20'
		},
		correctAnswer: 'b'
	}
];

for(var i = 0; i < myquestions.length; i++) {
  let response = (myquestions[i].question);
  document.createElement('button').append(response); //this is not working
console.log(response);

  let multiAnswer = (myquestions[i].answers);
  document.createElement('li').append(myquestions[i].answers); //this is not working

  console.log(multiAnswer);


  if (response == myquestions[i].answer){
    score++;
    // alert ('correct!');
  }else {
    // alert('wrong');
  }
}
document.querySelector('#score').textContent = ("Score: " + score)


clearTimeout()


//title


//time counter

// let time = 0
// let timeIsOut = false
// let myTimer

// const compTime = _ => {
//   let minutes = Math.floor(time / 60)
//   let seconds = time % 60
//   minutes = `${minutes}`.length < 2 ? `0${minutes}` : `${minutes.toString()[0]}${minutes.toString()[1]}`
//   seconds = `${seconds}`.length < 2 ? `0${seconds}` : `${seconds.toString()[0]}${seconds.toString()[1]}`
//   return `${minutes}:${seconds}`
// }

// const stopper = _ => {
//   if (timeIsOut) {
//     clearInterval(myTimer)
//     timeIsOut = false
//   }
// }
// const starter = _ => {
//   if (!timeIsOut) {
//     timeIsOut = true
//     myTimer = setInterval(() => {
//       time++
//       document.querySelector('#display').textContent = compTime()
//     }, 1000)
//   }
// }
// const resetter = _ => {
//   time = 0
//   document.querySelector('#display').textContent = '00:00'
// }

// document.addEventListener('click', e => {
//   if (e.target.className === 'swAction') {
//     switch (e.target.id) {
//       case 'stop':
//         stopper()
//         break
//       case 'reset':
//         resetter()
//         break
//       case 'start':
//         starter()
//         break
//     }
//   }
// })


////question
// score = 0






// let question1 = `What is this?`
// document.querySelector('#question1').textContent = question1

// const question1Answer = [`bob`, `amy`, `sue`]
// console.log(question1Answer)

// let answer = question1Answer[0]
// console.log

// for (let i = 0; i < question1Answer.length; i++) {
// let answerButton = document.createElement('button');
// answerButton.textContent = question1Answer[i];
// document.querySelector('#answer').append(answerButton);
// }
// console.log(question1Answer[0])

// // create on click event listener
// document.addEventListener('click', e => {
//     if(answer === question1Answer[0]) {
//         score++;
//         document.querySelector('#score').textContent = 'Your score: '+ score;
        
        

//      }else {




//      }

// })
  








////choices
//finish game

//question object
// //[
//     {questionId, isCorrect

//     }
// ]
// question objects

// [
//  { questionId, isCorrect}
// ]

// render questions
// create question tag (What is something?)
// render choices (data-value = true or false)

// whenver we click a choice
// set the clicked one to look different
// set all others to go back to default
// modify the question object to have value for whether they answered right or wrong

// whenever finish game button is clicked OR the timer runs out
// iterate over questions, count up isCorrect
