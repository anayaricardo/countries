import React from 'react';
import { connect } from 'react-redux';
// import {swapToCards} from '../actions/actions.js'
import style from './CSS/TableBar.module.css';

export function TableBar({cards}){
    const {hide, bar, topBar, divOrder} = style
    return(
        <div className={cards ? hide : bar}>
            <div className={topBar}>
                
                <div className={divOrder}>
                    <p>Country flag</p>
                </div>
                <div className={divOrder}>
                    <p>Country name</p>
                </div>
                <div className={divOrder}>
                    <p>Contentinent</p>
                </div>
            </div>
        </div>
    );
};


// const mapStateToProps = (state) =>  {
//     return {
//         cards:state.swapToCards

//     }
// }

// export default connect(mapStateToProps,{swapToCards})(TableBar)