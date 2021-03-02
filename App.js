import React, {useState} from 'react';
import './App.css';
import data from './data';
import SingleQuestion from './Question';



function App() {

  //need a state to store question from data 
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Questions and Answers About Login</h3>
          <section className="info">
            
            {/* Maps all the items in the questions state and return single question*/}
            {/* The properties are passed there so singlequestion can use them in their component space*/}

            {
              questions.map((question) =>{
                 return <SingleQuestion key={questions.id}{...question}/>;
              })
            }
          </section>
      </div>
    </main>
    
  );
}

export default App;
