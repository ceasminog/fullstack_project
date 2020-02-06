import React from 'react';
import './App.css';
import cat1 from './cats.jpg'
import cat from "./flower_cat.jpg"
import c1 from "./c1.jpg"
import c2 from "./c2.jpg"
import c3 from "./c3.jpg"


const sleep = (ms) =>
    new Promise(resolve => setTimeout(resolve, ms));

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), beg_date: new Date(), loaded: false};
    }

    componentDidMount() {
        this.state.loaded = true
        this.timerID = setInterval(
            () => this.tick(),
            2000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        if (!this.state.loaded) {
            return (

                <div className="wrap">
                    <div className="loading">
                        <div className="bounceball"></div>
                        <div className="text">NOW LOADING</div>
                    </div>
                </div>
            );
        }
        sleep(1000)
        return (

            <div className="App">
                <header className="App-header">
                    <div className="poster">
                        <img src={cat} className="poster_cat" alt="image of cat"/>
                        <p className="poster_text">ADOPT US. </p>
                        <p className="poster_text2">WE NEED YOUR HELP.</p>

                    </div>

                    <p className='Intro'>
                        Cats Available for Adoption
                    </p>
                    <div className="Adoption-page">
                        <div className="List_of_cats">
                            <span  align="center">
                                 <img className="list_el" src={c1}></img>

                            </span>
                            <span  align="center">
                                <img className="list_el" src={c2}></img>
                            </span>
                            <span  align="center" >
                                <img className="list_el" src={c3}></img>
                            </span>
                        </div>
                        <div className="List_of_cats">
                            <span  align="center" className="button_el">
                               <a className="example_a" align="center" href="mycat" target="_blank"
                                  rel="nofollow noopener">Fill adoption form</a>
                            </span>
                            <span  align="center"  className="button_el">
                               <a className="example_a" href="mycat" target="_blank"
                                                                           rel="nofollow noopener">Fill adoption form</a>
                            </span>
                            <span  align="center"  className="button_el">

                                <a className="example_a" href="mycat" target="_blank"
                                   rel="nofollow noopener">Fill adoption form</a>
                            </span>
                        </div>
                        <img src={cat1} alt="image of cat"/>
                    </div>
                </header>
            </div>
        );

    }
}

function App() {
    return (
        <div>
            <Loader/>
        </div>
    );
}
//                        <button className="poster_button">Adopt</button>
//ReactDOM.render(<App />, document.getElementById('root'));
/*
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="poster">
                    <img src={cat} className="poster_cat" alt="image of cat"/>
                    <p className="poster_text">ADOPT US. </p>
                    <p className="poster_text2">WE NEED YOUR HELP.</p>
                </div>
                <div className="Adoption-page">
                    <p class='Intro'>
                        Cats Available for Adoption
                    </p>
                    <div className="List_of_cats">
                <span className="list_el">
                      <img src={cat1}  alt="image of cat"/>
                </span>
                    </div>
                </div>
            </header>
        </div>
    );
}*/

export default App;
// <img src={cat2} className="App-logo" alt="logo" />
// <a href="shareyourcat">adopt</a>
