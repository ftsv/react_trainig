import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFoundView: React.FC = (): JSX.Element => {
    return (
        <>
            <span>{`Page not found :(`}</span>
            <Link to='/'>Back</Link>
        </>
    )
}