import React, { Component } from 'react';
import { firestore } from '../firebase';
import  { Table } from 'react-materialize';

class Ranking extends Component {

    // Initialisation du state des classements avec un Array vide
    constructor(props) {
        super(props);
        this.state = {
            rankings: []
        };
    }

    updateRanking = () => {
        const db = firestore;

        db.collection('rankings').get()
        .then((snapshot) => {
            let rankings = [];
            snapshot.forEach((doc) => {
                let ranking = Object.assign({id: doc.id}, doc.data());
                rankings.push(ranking);
            });
            this.setState({
                rankings: rankings
            });
        })
        .catch((error) => {
            console.log('Erreur !', error);
        })
    }

    //Mise a jour du classement au chargement de la page
    componentDidMount() {
        this.updateRanking();
    }

    singleRanking = (props) => {

        if (props.ranking.multiplyMin === props.ranking.multiplyMax) {
            return (
                <tr>
                    <td>
                        {props.ranking.userName}
                    </td>
                    <td>
                        La table de {props.ranking.multiplyMin}
                    </td>
                    <td>
                        {props.ranking.karaScore} / 20
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>
                        {props.ranking.userName}
                    </td>
                    <td>
                        La table de {props.ranking.multiplyMin} à {props.ranking.multiplyMax}
                    </td>
                    <td>
                        {props.ranking.karaScore} / 20
                    </td>                    
                </tr>
            );
        }
    }

    renderList() {
        return this.state.rankings.map((ranking, i) => (
            <this.singleRanking key={i+1} ranking={ranking} />
        ));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col l8 offset-l2 s12">
                        <h1 className="center flow-text">Tableau des scores</h1>
                        <br/>
                        <Table>
                            <thead>
                                <tr>
                                    <th data-field="username">
                                        Joueur
                                    </th>
                                    <th data-field="multiply">
                                        A travaillé...
                                    </th>
                                    <th data-field="score">
                                        Score
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderList()}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        );
    }

}

export default Ranking;