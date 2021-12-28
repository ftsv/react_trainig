import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const AccountLayout: React.FC = (): JSX.Element => {
    return (
        <div style={{backgroundColor: 'yellow'}}>
            <div>
                с этого места начинается AccountLayout
            </div>
            <div>
            начало атутлета
            </div>
            <Outlet />
            <div>
            конец аутлета
            </div>
            <br />
            <button>
                <Link to='/'>Back</Link>
            </button>
        </div>
    );
};

export default AccountLayout;