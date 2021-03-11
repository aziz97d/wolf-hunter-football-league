import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetails.css';
import teamImageMale from '../../images/male.png'
import teamImageFemale from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faFlag, faFutbol, faMars, } from '@fortawesome/free-solid-svg-icons';
import Facebook from '../../images/icon/Facebook.png'
import Twitter from '../../images/icon/Twitter.png'
import Youtube from '../../images/icon/YouTube.png'

const TeamDetails = () => {
    const {teamId} = useParams()
    const [teamInfo, setTeamInfo] = useState([])
    const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id='+teamId;
    console.log(url)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamInfo(data.teams[0]))
    },[])
    const {idTeam,strTeam,strTeamLogo,strGender,strSport,strCountry,strTwitter,strYoutube,strFacebook} = teamInfo;
    return (
        <div className="team-details">
            <div className="team-details-header">
                <img src={strTeamLogo} alt=""/>
            </div>
            <div className="team-details-body">
                <div className="team-details-info">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon> Founded : 1992</p>
                    <p><FontAwesomeIcon icon={faFlag}></FontAwesomeIcon> Country : {strCountry}</p>
                    <p><FontAwesomeIcon icon={faFutbol}></FontAwesomeIcon> Sport Type : {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars}></FontAwesomeIcon> Gender : {strGender}</p>
                </div>
                <div className="team-details-image">
                    
                    {
                        strGender === "Female" && <img src={teamImageFemale} alt=""/>
                    }
                    {
                        strGender === "Male" && <img src={teamImageMale} alt=""/>
                    }
                </div>
            </div>
            <div className="team-details-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quidem voluptas doloremque fugit placeat aut dolorem, modi quia quam, illo sapiente possimus animi molestias cupiditate excepturi vitae, doloribus dignissimos nihil deserunt. Laborum est ipsum mollitia optio voluptatum explicabo culpa illo, modi hic, voluptates amet, dolor itaque odio cupiditate delectus iusto.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quidem voluptas doloremque fugit placeat aut dolorem, modi quia quam, illo sapiente possimus animi molestias cupiditate excepturi vitae, doloribus dignissimos nihil deserunt. Laborum est ipsum mollitia optio voluptatum explicabo culpa illo, modi hic, voluptates amet, dolor itaque odio cupiditate delectus iusto.</p>
            </div>
            <div className="team-details-social">
                <a href={"https:/"+strYoutube} className="social-icon" target="_blank"><img src={Youtube} alt=""/></a>
                <a href={"https:/"+strFacebook} className="social-icon" target="_blank"><img src={Facebook} alt=""/></a>
                <a href={"https:/"+strTwitter} className="social-icon" target="_blank"><img src={Twitter} alt=""/></a>
            </div>
        </div>
    );
};

export default TeamDetails;