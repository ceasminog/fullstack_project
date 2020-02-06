import React from 'react';
import css from './styles.module.scss';
import {LikeItem} from "../../components/like_";
import {LikeAdder} from "../../components/likeAdder";
import {connect} from "react-redux";
import {addLike, removeLike} from "../../actions";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


const getData = async () => {
    return {
        data: {
            todoList: [
                {
                    id: '0',
                }
            ]
        }
    }
};

export class _LikeList extends React.Component {
    state = {
        todoList: [],
        loading: true,
    };

    async componentDidMount() {
       let { data } = await getData();
    }

    onRemove = (id) => {
        this.setState(prevState => ({
            likeList: prevState.likeList.filter(item => item.id !== id)
        }))
    };

    render() {
        // console.log(this.state);
        return (<p>sdfgthyju</p>

        )
    }
}

export const LikeList = connect(
    store => ({
        id: store.id,
    }),
    dispatch => ({
        addLike(item) {
            dispatch(addLike(item));
        },
        removeLike(id) {
            dispatch(removeLike(id));
        }
    })
)(_LikeList);
