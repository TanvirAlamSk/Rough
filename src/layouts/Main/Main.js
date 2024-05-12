import React from 'react';
import Herder from '../../components/Herder/Herder';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Herder></Herder>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;