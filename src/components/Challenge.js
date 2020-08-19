import React, { Component } from 'react';
import { Tabs, Tab, Select, Button } from 'react-materialize';
import { firestore } from '../firebase';

class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",

            karaAnswer: "",
            karaScore: 0,
            
            challengeQuestions: 1,
            challengeHasStarted: false,
            challengeIsFinished: false,

            multiplyMin: null,
            multiplyMax: null,

            randFirstNumber: null,
            randSecondNumber: null
        };

        this.handleResultChange = this.handleResultChange.bind(this);
        this.handleResultSubmit = this.handleResultSubmit.bind(this);

        this.handleMultiplyChange = this.handleMultiplyChange.bind(this);
        this.startChallenge = this.startChallenge.bind(this);
    }

    // Check for changed min and max multiply values
    handleMultiplyChange = (event) => {
        let {id, value} = event.currentTarget;

        value = parseInt(value);

        //Apply min and max multiplies values
        if (id === 'multiplyMin') {
            this.setState({ multiplyMin: value });
        } else if (id === 'multiplyMax') {
            this.setState({ multiplyMax: value + 1 });
        } else if (id === 'solo-multiply') {
            this.setState({ multiplyMin: value });
            this.setState({ multiplyMax: value + 1 });
        }
    }

    // Check for username change
    handleUsernameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    // Initialize first multiply question and display the challenge onscreen
    startChallenge = (event) => {
        this.setState({ randFirstNumber: Math.floor(Math.random() * (this.state.multiplyMax - this.state.multiplyMin) + this.state.multiplyMin) });
        this.setState({ randSecondNumber: Math.floor(Math.random() * (11-1) + 1) });

        this.setState({ challengeHasStarted: true });
    }

    // Check for the changed result value in the challenge
    handleResultChange = (event) => {
        this.setState({ karaAnswer: event.target.value });
    }

    /* onSubmit, validate the result and give a point if it is correct
    When challengeQuestions value is reached, send the karaScore to the database */
    handleResultSubmit = (event) => {
        const firstNumber = this.state.randFirstNumber;
        const secondNumber = this.state.randSecondNumber;
        const result = firstNumber * secondNumber;

        //Convert answer from string to integer
        const answer = parseInt(this.state.karaAnswer)

        //Give a point if the answer is correct
        if (result === answer) {
            this.setState({ karaScore: this.state.karaScore + 1 });
        }
        
        /* ------
        Lignes 86 a 121: code poubelle en bonne et due forme, j'ai honte
        ------ */
        
        if (this.state.challengeQuestions === 20 && result === answer) {

            //Create an object newScore
            let newScore = {
                userName: this.state.userName,
                multiplyMin: this.state.multiplyMin,
                multiplyMax: this.state.multiplyMax - 1,
                karaScore: this.state.karaScore + 1
            }

            // Send the object to the database
            const db = firestore;
            db.collection('rankings').add(newScore);

            //Display End Component
            this.setState({ challengeIsFinished: true });
            

        } else if (this.state.challengeQuestions === 20 && result !== answer) {

            //Create an object newScore
            let newScore = {
                userName: this.state.userName,
                multiplyMin: this.state.multiplyMin,
                multiplyMax: this.state.multiplyMax - 1,
                karaScore: this.state.karaScore
            }

            // Send the object to the database
            const db = firestore;
            db.collection('rankings').add(newScore);

            //Display End Component
            this.setState({ challengeIsFinished: true });

        } else {    
            //Generate new multiplies values for the next question and increment to the next question
            this.setState({ randFirstNumber: Math.floor(Math.random() * (this.state.multiplyMax - this.state.multiplyMin) + this.state.multiplyMin) });
            this.setState({ randSecondNumber: Math.floor(Math.random() * (11-1) + 1) });
            this.setState({ challengeQuestions: this.state.challengeQuestions + 1 });

            //Reset Input Field for the next question
            this.setState({ karaAnswer: "" });
            document.getElementById("challengeForm").reset();
        }

        event.preventDefault();
    }

    ChallengeRendering = () => {
        const challenge = this.state.challengeHasStarted;
        const endChallenge = this.state.challengeIsFinished;

        //When Challenge is NOT finished, display this
        if (challenge === true && endChallenge === false) {
            return (
                <div>
                    <h1 className="center flow-text">It's time to du-du-du-DUEL</h1>
                    <p className="center">Tu gagnes un point par bonne réponse !</p>
                    <span>Question {this.state.challengeQuestions} / 20</span>
                    <hr/>
                    <form id="challengeForm" onSubmit={this.handleResultSubmit}>
                        <div className="row">
                            <div className="col l6 s12 center flow-text">
                                <p>Multiplie : {this.state.randFirstNumber} * {this.state.randSecondNumber}</p>
                            </div>
                            <div className="input-field col l6 s12">
                                <input type="text" id="karaAnswerField" className="validate" name="karaAnswerField" value={this.state.karaAnswer} onChange={this.handleResultChange}></input>
                                <label htmlFor="karaAnswerField"></label>
                                <span class="helper-text">Entre le résultat ici !</span>
                            </div>
                        </div>
                    </form>

                    <br/>

                    <p>Score : {this.state.karaScore} / 20</p>
                </div>
            );
        //When Challenge is finished, display this
        } else if (challenge === true && endChallenge === true ) {
            return (
                <div>
                    <h1 className="center flow-text">C'est fini ! Voici ton score :</h1>
                    <h2 className="center flow-text">{this.state.karaScore} / 20</h2>

                    <p className=" center flow-text">N'hésite pas à aller voir les classements !</p>
                </div>
            );
        //Display before the challenge start
        } else if (challenge === false && endChallenge === false) {
            return (
                <div>
                    <h1 className="center flow-text">Paramètre ton challenge !</h1>
                    <p className="center">Choisis les tables que tu veux travailler</p>
                    <br/>
                    <Tabs className="challenge-tab z-depth-1 tabs-fixed-width">
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Je travaille une table"
                        >
                            <form onSubmit={this.startChallenge}>
                                <div className="row">
                                    <Select
                                        id="solo-multiply"
                                        multiple={false}
                                        onChange={this.handleMultiplyChange}
                                        options={{
                                            classes: '',
                                            dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                            }
                                        }}
                                        value=""
                                        s={12}
                                        l={12}
                                        >
                                        <option
                                            disabled
                                            value=""
                                        >
                                            Je veux travailler ma table de...
                                        </option>
                                        <option value={1}>
                                            Table de 1
                                        </option>
                                        <option value={2}>
                                            Table de 2
                                        </option>
                                        <option value={3}>
                                            Table de 3
                                        </option>
                                        <option value={4}>
                                            Table de 4
                                        </option>
                                        <option value={5}>
                                            Table de 5
                                        </option>
                                        <option value={6}>
                                            Table de 6
                                        </option>
                                        <option value={7}>
                                            Table de 7
                                        </option>
                                        <option value={8}>
                                            Table de 8
                                        </option>
                                        <option value={9}>
                                            Table de 9
                                        </option>
                                        <option value={10}>
                                            Table de 10
                                        </option>
                                    </Select>

                                    <div className="input-field col l9 s12">
                                        <i className="material-icons prefix">face</i>
                                        <input type="text" placeholder="Mon nom" id="userName" className="validate" name="userName" value={this.state.userName} onChange={this.handleUsernameChange}></input>
                                        <label htmlFor="userName">Rentre ton nom ici !</label>
                                    </div>

                                    <div className="col l3 s12 challenge-button" style={{paddingTop: 20 + 'px'}}>
                                        <Button
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                            Commencer
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Tab>

                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Je travaille plusieurs tables"
                        >
                            <form onSubmit={this.startChallenge}>
                                <div className="row">
                                    <Select
                                        id="multiplyMin"
                                        multiple={false}
                                        onChange={this.handleMultiplyChange}
                                        options={{
                                            classes: '',
                                            dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                            }
                                        }}
                                        value=""
                                        s={12}
                                        l={6}
                                        >
                                        <option
                                            disabled
                                            value=""
                                        >
                                            Je veux travailler ma table de...
                                        </option>
                                        <option value={1}>
                                            Table de 1
                                        </option>
                                        <option value={2}>
                                            Table de 2
                                        </option>
                                        <option value={3}>
                                            Table de 3
                                        </option>
                                        <option value={4}>
                                            Table de 4
                                        </option>
                                        <option value={5}>
                                            Table de 5
                                        </option>
                                        <option value={6}>
                                            Table de 6
                                        </option>
                                        <option value={7}>
                                            Table de 7
                                        </option>
                                        <option value={8}>
                                            Table de 8
                                        </option>
                                        <option value={9}>
                                            Table de 9
                                        </option>
                                        <option value={10}>
                                            Table de 10
                                        </option>
                                    </Select>

                                    <Select
                                        id="multiplyMax"
                                        multiple={false}
                                        onChange={this.handleMultiplyChange}
                                        options={{
                                            classes: '',
                                            dropdownOptions: {
                                            alignment: 'left',
                                            autoTrigger: true,
                                            closeOnClick: true,
                                            constrainWidth: true,
                                            coverTrigger: true,
                                            hover: false,
                                            inDuration: 150,
                                            onCloseEnd: null,
                                            onCloseStart: null,
                                            onOpenEnd: null,
                                            onOpenStart: null,
                                            outDuration: 250
                                            }
                                        }}
                                        value=""
                                        s={12}
                                        l={6}
                                        >
                                        <option
                                            disabled
                                            value=""
                                        >
                                            Jusqu'à ma table de ...
                                        </option>
                                        <option value={1}>
                                            Table de 1
                                        </option>
                                        <option value={2}>
                                            Table de 2
                                        </option>
                                        <option value={3}>
                                            Table de 3
                                        </option>
                                        <option value={4}>
                                            Table de 4
                                        </option>
                                        <option value={5}>
                                            Table de 5
                                        </option>
                                        <option value={6}>
                                            Table de 6
                                        </option>
                                        <option value={7}>
                                            Table de 7
                                        </option>
                                        <option value={8}>
                                            Table de 8
                                        </option>
                                        <option value={9}>
                                            Table de 9
                                        </option>
                                        <option value={10}>
                                            Table de 10
                                        </option>
                                    </Select>

                                    <div className="input-field col l9 s12">
                                        <i className="material-icons prefix">face</i>
                                        <input type="text" placeholder="Mon nom" id="userName" className="validate" name="userName" value={this.state.userName} onChange={this.handleUsernameChange}></input>
                                        <label htmlFor="userName">Rentre ton nom ici !</label>
                                    </div>

                                    <div className="col l3 s12 challenge-button" style={{paddingTop: 20 + 'px'}}>
                                        <Button
                                            node="button"
                                            type="submit"
                                            waves="light"
                                        >
                                            Commencer
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </Tab>
                    </Tabs>

                </div>
            );
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col l6 offset-l3 s12">
                        <this.ChallengeRendering />
                    </div>
                </div>
            </div>
        );
    }
}

export default Challenge;