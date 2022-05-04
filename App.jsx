import React from 'react';
import { CssBaseline } from '@material-ui/core';
import NavBar from './components/navbar';
import Leftbar from './components/leftbar';
import Feed from './components/feed';

const App = () => {
    return (
        <>
            <CssBaseline />
            <div>
                <Leftbar />
                <NavBar />
                <Feed />

            </div>
        </>
    );
}
export default App;