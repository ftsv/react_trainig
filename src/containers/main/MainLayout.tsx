import React from 'react';
import {Link, Outlet} from 'react-router-dom';

const MainLayout: React.FC = (): JSX.Element => {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to='/'>Main Page</Link></li>
                    <li><Link to='/react-table'>react-table page</Link></li>
                    <li><Link to='/account/add'>Add Account</Link></li>
                    <li><Link to='/account/list'>List Accounts</Link></li>
                    <li><Link to='/account/1'>View Account</Link></li>
                    <li><Link to='/something-else'>Not Found</Link></li>
                </ul>
            </nav>
            {/* By looking at the code above, you may have noticed that React Router supports nested routing
            where you can define routes for different parts of your application with different layouts.
            This is possible because of the <Outlet /> component, which is a placeholder for the elements
            that should be rendered on the child routes / paths. */}
            <Outlet />
        </>
    );
};

export default MainLayout;