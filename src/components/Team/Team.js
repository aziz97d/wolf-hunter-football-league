import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Team = (props) => {
    const {idTeam,strTeam,strTeamLogo,strGender,strSport} = props.team;
    return (
        <div className='team'>
            <img src={strTeamLogo} alt=""/>
            <h2>{strTeam}</h2>
            <p>Sport Type {strSport}</p>
            <Link className="explore-button" to={"/teamDetails/"+idTeam}>Explore <FontAwesomeIcon icon={faArrowRight} /></Link>
        </div>
    );
};

export default Team;