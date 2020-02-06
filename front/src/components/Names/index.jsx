import React from 'react';
import PropTypes from 'prop-types';
import css from './styles.module.scss';
import  cat from "../../citty3.jpg"
import cats from '../../cats.jpg'

export class _Names extends React.Component{
render(){
return(
<div class = "NamesList">

    <span>
    <h1 className='Intro'>Top Kitten Names</h1>
    <p>This wonderful mild and beautiful creatures deserve unique and pleasant-sounding names. Look through out
    list of top names to come up with one that perfectly fits your kitten.</p><p>Our forty favorite kitten names for 2020 are:</p>
    <ol><li>Patches</li><li>Sadie</li><li>Nala</li><li>Simba</li><li>Rosie</li><li>Panda</li><li>Beanie</li><li>Sunny</li>
        <li>Callie</li><li>Addy</li><li>Sophie</li><li>Max</li><li>Gizmo</li><li>Misty</li><li>Jazz</li><li>Buddy</li><li>Sass</li>
        <li>Miley</li><li>Rainbow</li><li>Zeus</li><li>Zoro</li><li>Daisy</li><li>Pumba</li><li>Lovey</li><li>Zoe</li>
        <li>Chester</li><li>Annie</li><li>Buttons</li><li>Roxy</li><li>Colors</li><li>Tiffy</li><li>India</li>
        <li>Savannah</li><li>Mojito</li><li>Zucchini</li><li>Biscuit</li><li>Romeo</li><li>Lily</li>
        <li>Sahara</li><li>Garfield</li></ol>
    </span>
    <img src={cat} className="cat_img" alt="image of cat" />



</div>
);
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
