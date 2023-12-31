import React from 'react';
import Cards from './Cards';
import SideContent from '../components/SideContent';

const HomePage = () => {
    return (
        <div>
            <div className="grid md:grid-cols-12 gap-4">
                <div className="hidden md:block col-start-1 col-end-4">
                    <SideContent></SideContent>
                </div>
                <div className="md:col-start-4 md:col-end-10">
                    <Cards></Cards>
                </div>
                <div className="hidden md:block col-start-10 col-end-13">
                    <SideContent></SideContent>
                </div>
            </div>
        </div>
    );
};

export default HomePage;