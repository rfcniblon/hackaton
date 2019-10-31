import React from 'react';
import './Distrib.css';
import ApiMovies from '../ApiMovies';

function Distrib() {
    return (

        <div className="contain">
            <div className="distrib_dessus"></div>
            <div className="distrib_de">
                <div className="distrib_de1">
                </div>
                <div className="distrib_face">
                    <div className="distrib_produit">
                        <ApiMovies id={17} />
                        <ApiMovies id={18} />
                        <ApiMovies id={19} />
                        <ApiMovies id={20} />
                        <div className="distrib_pro">
                            <ApiMovies id={17} />
                            <ApiMovies id={18} />
                            <ApiMovies id={19} />
                            <ApiMovies id={20} />
                            <div className="distrib_pro1">
                                <ApiMovies id={17} />
                                <ApiMovies id={18} />
                                <ApiMovies id={19} />
                                <ApiMovies id={20} />
                                <div className="distrib_pro2">
                                    <ApiMovies id={17} />
                                    <ApiMovies id={18} />
                                    <ApiMovies id={19} />
                                    <ApiMovies id={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Distrib;