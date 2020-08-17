import React, { Component } from 'react';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            karaAnswer: 0,
            karaScore: 0,
            randFirstNumber: Math.floor(Math.random() * (10-1) + 1),
            randSecondNumber: Math.floor(Math.random() * (10-1) + 1)
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({ karaAnswer: event.target.value });
    }

    handleSubmit = (event) => {
        const firstNumber = this.state.randFirstNumber;
        const secondNumber = this.state.randSecondNumber;
        const result = firstNumber * secondNumber;

        if (result == this.state.karaAnswer) {
            this.setState({ karaScore: this.state.karaScore + 1 });
        } else {
            this.setState({ karaScore: this.state.karaScore - 1 });
        }

        this.setState({ randFirstNumber: Math.floor(Math.random() * (10-1) + 1) });
        this.setState({ randSecondNumber: Math.floor(Math.random() * (10-1) + 1) });

        event.preventDefault();
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col l6 offset-l3 s12">
                        <h1 className="center flow-text">It's time to du-du-du-DUEL</h1>
                        <p className="center">Tu gagnes un point par bonne réponse, et tu perds un point par mauvaise réponse !</p>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col l6 s12 center flow-text">
                                    <p>Multiplie : {this.state.randFirstNumber} * {this.state.randSecondNumber}</p>
                                </div>
                                <div className="input-field col l6 s12">
                                    <input type="text" id="karaAnswerField" className="validate" name="karaAnswerField" value={this.state.karaAnswer} onChange={this.handleChange}></input>
                                    <label htmlFor="karaAnswerField">Entre le résultat ici !</label>
                                </div>
                            </div>
                        </form>

                        <br/>

                        <p>Score : {this.state.karaScore}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Challenge;