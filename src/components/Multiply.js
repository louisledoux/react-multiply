import React from 'react';
import { Navbar, Icon, Table, Tabs, Tab } from 'react-materialize';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Challenge from './Challenge';
import Ranking from './Ranking';

const Multiply = () => {
    return (
        <Router>
            <header>
                <Navbar
                    alignLinks="left"
                    brand={<Link to="/" className="brand-logo">Multiply</Link>}
                    centerLogo
                    id="mobile-nav"
                    menuIcon={<Icon>menu</Icon>}
                    options={{
                        draggable: true,
                        edge: 'left',
                        inDuration: 250,
                        onCloseEnd: null,
                        onCloseStart: null,
                        onOpenEnd: null,
                        onOpenStart: null,
                        outDuration: 200,
                        preventScrolling: true
                    }}
                >
                    <Link to="/tutorial">Mes Tables de Multiplication</Link>
                    <Link to="/challenge">Time to Exercice !</Link>
                    <Link to="/rankings">Classements</Link>
                </Navbar>
            </header>

            <main>
                <Switch>
                    <Route path="/tutorial"><Tutorial /></Route>
                    <Route path="/challenge"><Challenge /></Route>
                    <Route path="/rankings"><Ranking /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </main>
        </Router>
    );
}

export default Multiply;

export const Home = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col l12 s12">
                    <div className="center">
                        <h1 className="flow-text">Multiply - Un petit site pour ses tables de multiplication</h1>
                    </div>
                    <hr/>
                    <div className="center flow-text">
                        <p>Bien le bonjour les Jeunes !</p>
                        <p>Voici un petit programme pour que vous puissiez travailler vos tables de multiplication.</p>
                        <p>Enjoy ! <Icon>sentiment_very_satisfied</Icon></p>
                        <img alt="clones multiplying" style={{maxWidth: 100 + '%'}} src="https://media1.tenor.com/images/d2c1871e3eaa3579eee2e794fdc56393/tenor.gif?itemid=15938044"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Tutorial = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col l12 s12">
                    <h2 className="center flow-text">Tables de multiplication</h2>
                    <Tabs className="tab-multiply z-depth-1 tabs-fixed-width">
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 1"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1 x 1
                                                </td>
                                                <td>
                                                    1
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 2
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 3
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 4
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 5
                                                </td>
                                                <td>
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 6
                                                </td>
                                                <td>
                                                    6
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 7
                                                </td>
                                                <td>
                                                    7
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 8
                                                </td>
                                                <td>
                                                    8
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 9
                                                </td>
                                                <td>
                                                    9
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1 x 10
                                                </td>
                                                <td>
                                                    10
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 2"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    2 x 1
                                                </td>
                                                <td>
                                                    2
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 2
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 3
                                                </td>
                                                <td>
                                                    6
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 4
                                                </td>
                                                <td>
                                                    8
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 5
                                                </td>
                                                <td>
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 6
                                                </td>
                                                <td>
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 7
                                                </td>
                                                <td>
                                                    14
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 8
                                                </td>
                                                <td>
                                                    16
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 9
                                                </td>
                                                <td>
                                                    18
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 10
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 3"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    3 x 1
                                                </td>
                                                <td>
                                                    3
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 2
                                                </td>
                                                <td>
                                                    6
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 3
                                                </td>
                                                <td>
                                                    9
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 4
                                                </td>
                                                <td>
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 5
                                                </td>
                                                <td>
                                                    15
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 6
                                                </td>
                                                <td>
                                                    18
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 7
                                                </td>
                                                <td>
                                                    21
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 8
                                                </td>
                                                <td>
                                                    24
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 9
                                                </td>
                                                <td>
                                                    27
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    3 x 10
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 4"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    4 x 1
                                                </td>
                                                <td>
                                                    4
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 2
                                                </td>
                                                <td>
                                                    8
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 3
                                                </td>
                                                <td>
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 4
                                                </td>
                                                <td>
                                                    16
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 5
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 6
                                                </td>
                                                <td>
                                                    24
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 7
                                                </td>
                                                <td>
                                                    28
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 8
                                                </td>
                                                <td>
                                                    32
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 9
                                                </td>
                                                <td>
                                                    36
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    4 x 10
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 5"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    5 x 1
                                                </td>
                                                <td>
                                                    5
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 2
                                                </td>
                                                <td>
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2 x 3
                                                </td>
                                                <td>
                                                    15
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 4
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 5
                                                </td>
                                                <td>
                                                    25
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 6
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 7
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 8
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 9
                                                </td>
                                                <td>
                                                    45
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    5 x 10
                                                </td>
                                                <td>
                                                    50
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 6"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    6 x 1
                                                </td>
                                                <td>
                                                    6
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 2
                                                </td>
                                                <td>
                                                    12
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 3
                                                </td>
                                                <td>
                                                    18
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 4
                                                </td>
                                                <td>
                                                    24
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 5
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 6
                                                </td>
                                                <td>
                                                    36
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 7
                                                </td>
                                                <td>
                                                    42
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 8
                                                </td>
                                                <td>
                                                    48
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 9
                                                </td>
                                                <td>
                                                    54
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    6 x 10
                                                </td>
                                                <td>
                                                    60
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 7"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    7 x 1
                                                </td>
                                                <td>
                                                    7
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 2
                                                </td>
                                                <td>
                                                    14
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 3
                                                </td>
                                                <td>
                                                    21
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 4
                                                </td>
                                                <td>
                                                    28
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 5
                                                </td>
                                                <td>
                                                    35
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 6
                                                </td>
                                                <td>
                                                    42
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 7
                                                </td>
                                                <td>
                                                    49
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 8
                                                </td>
                                                <td>
                                                    56
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 9
                                                </td>
                                                <td>
                                                    63
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    7 x 10
                                                </td>
                                                <td>
                                                    70
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 8"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    8 x 1
                                                </td>
                                                <td>
                                                    8
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 2
                                                </td>
                                                <td>
                                                    16
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 3
                                                </td>
                                                <td>
                                                    24
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 4
                                                </td>
                                                <td>
                                                    32
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 5
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 6
                                                </td>
                                                <td>
                                                    48
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 7
                                                </td>
                                                <td>
                                                    56
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 8
                                                </td>
                                                <td>
                                                    64
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 9
                                                </td>
                                                <td>
                                                    72
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    8 x 10
                                                </td>
                                                <td>
                                                    80
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 9"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    9 x 1
                                                </td>
                                                <td>
                                                    9
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 2
                                                </td>
                                                <td>
                                                    18
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 3
                                                </td>
                                                <td>
                                                    27
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 4
                                                </td>
                                                <td>
                                                    36
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 5
                                                </td>
                                                <td>
                                                    45
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 6
                                                </td>
                                                <td>
                                                    54
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 7
                                                </td>
                                                <td>
                                                    63
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 8
                                                </td>
                                                <td>
                                                    72
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 9
                                                </td>
                                                <td>
                                                    81
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    9 x 10
                                                </td>
                                                <td>
                                                    90
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                        <Tab
                            options={{
                                duration: 300,
                                onShow: null,
                                responsiveThreshold: Infinity,
                                swipeable: false
                            }}
                            title="Table 10"
                        >
                            <br/>
                            <div className="row">
                                <div className="col l6 offset-l3 s12">
                                    <Table hoverable>
                                        <thead>
                                            <tr>
                                                <th data-field="multiplication">
                                                    Multiplication
                                                </th>
                                                <th data-field="resultat">
                                                    Resultat
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    10 x 1
                                                </td>
                                                <td>
                                                    10
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 2
                                                </td>
                                                <td>
                                                    20
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 3
                                                </td>
                                                <td>
                                                    30
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 4
                                                </td>
                                                <td>
                                                    40
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 5
                                                </td>
                                                <td>
                                                    50
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 6
                                                </td>
                                                <td>
                                                    60
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 7
                                                </td>
                                                <td>
                                                    70
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 8
                                                </td>
                                                <td>
                                                    80
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 9
                                                </td>
                                                <td>
                                                    90
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    10 x 10
                                                </td>
                                                <td>
                                                    100
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}