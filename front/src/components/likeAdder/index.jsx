import React from 'react';
import PropTypes from 'prop-types';
import v4 from 'uuid';
import css from './styles.module.scss';

export class LikeAdder extends React.Component {
    static propTypes = {
        onCreate: PropTypes.func,
    };

    static defaultProps = {
        onCreate: () => null,
    };

    state = {
        value: 0,
    };

    onCreate = (e) => {
        e.preventDefault();
        if (this.state.value.length === 0) {
            return;
        }
        this.props.onCreate({
            text: this.state.value,
            id: v4()
        });
        this.setState({value: 0})
    };

    render() {
        return (
            <form className={css.likeAdder} onSubmit={this.onCreate}>
                <button className={css.likeButton} type={'submit'}>
                    LIKE
                </button>
            </form>
        )
    }
}