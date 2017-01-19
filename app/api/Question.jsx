import React, { Component } from 'react';
import axios from 'axios'

class Question extends Component {
  constructor(props){
    super(props);

    this.state = {
      question: [],
      answers: [],
      answers2: [],
      correct_answer: '',
      type: []
    }

  }




  componentWillMount() {
    axios.get('https://opentdb.com/api.php?amount=10')
    .then(response => {
      const questions = response.data.results
      const question1 = questions[0].question
      const correct = questions[0].correct_answer
      const incorrect = questions[0].incorrect_answers
      const qtype = questions[0].type
      const category = questions[0].category
      const length = questions.length


      let arr1 = [correct, incorrect[0], incorrect[1], incorrect[2]];
      let arr2 = [correct, incorrect[0]];

       arr1 = shuffle(arr1);
      function shuffle(arr1) {
        var currentIndex = arr1.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
        while (0 !== currentIndex) {

    // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

    // And swap it with the current element.
        temporaryValue = arr1[currentIndex];
        arr1[currentIndex] = arr1[randomIndex];
        arr1[randomIndex] = temporaryValue;



  }
    return arr1;

}



console.log('hello')
arr2 = shuffle(arr2);
function shuffle(arr2) {
 var currentIndex = arr1.length, temporaryValue, randomIndex;

// While there remain elements to shuffle...
 while (0 !== currentIndex) {

// Pick a remaining element...
 randomIndex = Math.floor(Math.random() * currentIndex);
 currentIndex -= 1;

// And swap it with the current element.
 temporaryValue = arr2[currentIndex];
 arr2[currentIndex] = arr2[randomIndex];
 arr2[randomIndex] = temporaryValue;



}
return arr2;

}

var decodeEntities = (function() {
  // this prevents any overhead from creating the object each time
  var element = document.createElement('div');

  function decodeHTMLEntities (str) {
    if(str && typeof str === 'string') {
      // strip script/html tags
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }


    return str;
  }

  return decodeHTMLEntities;
})();




      this.setState({

        question: decodeEntities(question1),
        answers: decodeEntities(arr1),
        correct_answer: decodeEntities(correct),
        type: qtype,
        answers2: arr2.filter(Boolean),
        category: decodeEntities(category),
        length: length

      })
    })
    .catch(error => {
      console.log('Error: ', error);
    });
  }





  render(){
    return(
      <div className="container">
        <p>{ this.state.question }</p>
        <ul>
          {
          this.state.type === "boolean"  ?
          <div>
            <li><button onClick={ this.checkAnswer } className="button round">A. {this.state.answers2[0]}</button></li>
            <li><button onClick={ this.checkAnswer } className="button round">B. {this.state.answers2[1]}</button></li>
          </div>
          :
          <div>
            <li><button onClick={ console.log('hello') } className="button round">A. {this.state.answers[0]}</button></li>
            <li><button onClick={ this.checkAnswer } className="button round">B. {this.state.answers[1]}</button></li>
            <li><button onClick={ this.checkAnswer } className="button round">C. {this.state.answers[2]}</button></li>
            <li><button onClick={ this.checkAnswer } className="button round">D. {this.state.answers[3]}</button></li>
          </div>
        }
        </ul>
      </div>
    )
  }
}

export default Question;