import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.scss';

export const LikeItem = props => {
    return (
        <form
            className={css.LikeItem}
        >
            <div>
                {props.text}
            </div>
            <button
                className={css.removeButton}
                onClick={(e) => {
                    e.preventDefault();
                    props.onRemove();
                }}
            >
                Remove
            </button>
        </form>
    )
};

LikeItem.propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    onRemove: PropTypes.func,
};

LikeItem.defaultProps = {
    id: '',
    text: '',
    onRemove: () => null,
};