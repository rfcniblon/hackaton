import React from 'react';
import './Navbar.css';


class Navbar1 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <img className="logo mob-2 tab-2 dsk-2" src="./imagesNavbar/verrecrane.jpg" alt="" />
                    <p className="title1 mob-8 tab-8 dsk-8">Movie drinks</p>
                </div>
            </div>

        );
    }
       
}

export default Navbar1;

