import React, { Fragment } from "react";

const Card = ({name, email, id}) => {
    return (
        <Fragment>            
            <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
                <img src={`https://robohash.org/robo${id}?200x200`} alt='robots' /> 
                <div>
                    <h2>{ name }</h2>
                    <p>{ email }</p>
                </div>            
            </div>
        </Fragment>
    );
}

export default Card;