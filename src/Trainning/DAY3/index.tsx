import React, { Component } from 'react';

const Toggle = ({onClick = () => {}, children}:any) => {
    return (
        <button onClick = {onClick}>{children}</button>
    )
}

export {Toggle}

