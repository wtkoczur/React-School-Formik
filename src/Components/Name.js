import React from 'react';
import style from './style'

const Name = ({change, blur, data}) => {
    return(
        <div>
            <label htmlFor="firstName"><span style={style.span}>Name</span></label>
            <input
                name="firstName"
                type="text"
                onChange={change}
                onBlur={blur}
                value={data}
                style={style.radius}
            />

         </div>
    )
}

export default Name;