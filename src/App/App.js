import { Switch, Route } from "react-router-dom";

import Intro from "../Intro/Intro";
import Question from "../Question/Question";

import questions from "./data/questions";

import "./App.css"

const App = () => {
    
    let questionsToBeRendered = questions.map(questionObject=> {
        return <Question key={questionObject.number} number={questionObject.number} question={questionObject.question} rating={questionObject.rating} />;

    })
    return(
        <>
            <switch>
                <Route path="/vraag/:number" component={Question}/>
                <Route path="/" component={Intro}/>
            </switch>
        </>
    );
}

export default App;