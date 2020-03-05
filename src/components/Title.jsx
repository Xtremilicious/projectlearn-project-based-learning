import React from 'react';

export default function Title({name, title}) {
    return (
        <div className='row mx-0'>
            <div className="col-10 mx-auto my-4 text-center text-title">
                <h1 className='text-capitalize font-weight-bold'>{name} <strong className='text-red'>{title}</strong></h1>
            </div>
        </div>
    )
}
