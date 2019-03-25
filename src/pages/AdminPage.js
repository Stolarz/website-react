import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = false;

const AdminPage = () => {
    return ( 
        <div>
            <Route render={() => (
            permission ? (<h3>Admin dashboard - good morning</h3>) : (
                <Redirect to="/login" />
            ) 
            )}/>
        </div>
     );
}
 
export default AdminPage;