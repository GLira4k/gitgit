import React from 'react';
import { Button } from 'antd';

function TextButton({ texto, type }){
    return(
        <>
            <Button type={type}>{texto}</Button>
        </>
    )
};