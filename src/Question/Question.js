import React from "react";
import {withRouter} from "react-router";
import "./Question.css";

class Question extends React.Component {

    constructor(props) {
        super(props);
        this.myNumber = this.props.params.match.number;
        console.log(this.myNumber);
        this.state = {
            rating: 0,
        }
    }

    componentDidMount(){
        this.setState({rating: this.props.rating})
    }
    
   onStarClicked = (rating) => {
       this.setState({
        rating: rating,
       })
    }

    render() {
        let starsArray = [];
        for (let i = 1; i <= this.state.rating; i++){
           starsArray.push (<i onClick={() => this.onStarClicked (i)} className="question__star fa-solid fa-star"></i>);
        }
        for(let i =this.state.rating + 1; i <= 5; i++){
            starsArray.push (<i onClick={() => this.onStarClicked (i)} className="question__star fa-regular fa-star"></i>);
        }
        return (
            <article className="question">
                <header className="question__header">
                    <h2 class="question__heading">#{this.props.number} {this.props.question}</h2>
                </header>
                <section className="question__section">
                    <p className="question__text">(1 Ster staat voor zéér slecht, 5 sterren staan voor zéér goed)</p>
                    <div className="question__stars">
                        {starsArray}
                    </div>
                </section>
                <footer className="question__footer">
                    <button className="question__button">vorige</button>
                    <button className="question__button">volgende</button>
                </footer>
            </article>
        )
    }

}

export default withRouter (Question);