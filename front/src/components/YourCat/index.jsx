import React from 'react';
import  cat from "../../citty1.jpg"
import css from './styles.module.scss';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
//import css from './styles.module.scss';

export class _YourCat extends React.Component{
    render(){
        return(
            <div >
                <div className="login-window">
                <div className="log-form">
                    <h2>Login to your account</h2>
                    <form>
                        <input type="text" title="username" placeholder="username"/>
                        <input type="password" title="username" placeholder="password"/>
                        <button type="submit" className="btn">Log In</button>
                        <button type="submit" className="btn">Sign Up</button>
                        <a className="forgot" href="#">Forgot Username?</a>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}


/*
export class _YourCat extends React.Component{
//export class _ToDoList extends React.Component {
    state = {
        loading: false,
    };

    async componentDidMount() {
        this.setState({
            loading: false
        })
    }


    render() {
        // console.log(this.state);
        return (
            <div>
                {this.state.loading ?
                    <div>
                        <div>

                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div> :
                    <p>sdfrgthyu</p>}
            </div>
        )
    }
}

/*
export const CatNames = props => {
    return (
        <div
            className={css.NamesOfCats}
        >
         <p><Good names/p>
        </div>
    )
};
*/
