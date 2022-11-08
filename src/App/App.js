import { Routes, Route } from "react-router-dom";

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
            <Routes>
                <Route path="/" element={<Intro/>}/>
                <Route path="/vraag/:number" element={<Question/>}/>
            </Routes>
        </>
    );
}

export default App;