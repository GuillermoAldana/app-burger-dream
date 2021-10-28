import React from "react";
import AboutLayout from "./aboutLayout";
import PresentLayout from './presentLayout';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
    return (
        <React.Fragment>
            <PresentLayout />
            <AboutLayout />
        </React.Fragment>
    );
}

export default Home;