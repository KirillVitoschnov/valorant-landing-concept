import React from "react";
import  './content.scss'
import phoenixAbilities from '../../images/AbilitiesPhoenix.svg';
import jettAbilities from '../../images/AbilitiesJett.svg';
import sovaAbilities from '../../images/AbilitiesSova.svg';
import sageAbilities from '../../images/AbilitiesSage.svg';

const siteContent = () => {
    return (
        <div className="siteContent">
            <div className="agentsCard">
                <div className="agentsCard__valorantIcon"></div>
                <div className="agentsCard__AGENTS"></div>
                <div className="agentsCard__borderBottom"></div>
            </div>
            <div className="agentsCard">
                <div className="agentsCard__agent-name agentsCard__agent-name-phoenix"></div>
                <div className="agentsCard__agent-country agentsCard__agent-country-UK"></div>
                <div className="agentsCard__player">
                    <div className='agentsCard__phoenix'></div>
                    <div className='agentsCard__agent-skills'>
                        <img width='247px' src={phoenixAbilities} alt=""/>
                    </div>
                </div>
            </div>
            <div className="agentsCard">
                <div className="agentsCard__agent-name agentsCard__agent-name-jett"></div>
                <div className="agentsCard__agent-country agentsCard__agent-country-KOREA"></div>
                <div className="agentsCard__player">
                    <div className='agentsCard__Jett'></div>
                    <div className='agentsCard__agent-skills'>
                        <img width='247px' src={jettAbilities} alt=""/>
                    </div>
                </div>
            </div>
            <div className="agentsCard">
                <div className="agentsCard__agent-name agentsCard__agent-name-sova"></div>
                <div className="agentsCard__agent-country agentsCard__agent-country-RUSSIA"></div>
                <div className="agentsCard__player">
                    <div className='agentsCard__Sova'></div>
                    <div className='agentsCard__agent-skills'>
                        <img width='247px' src={sovaAbilities} alt=""/>
                    </div>
                </div>
            </div>
            <div className="agentsCard">
                <div className="agentsCard__agent-name agentsCard__agent-name-sage"></div>
                <div className="agentsCard__agent-country  agentsCard__agent-country-CHINA"></div>
                <div className="agentsCard__player">
                    <div className='agentsCard__Sage'></div>
                    <div className='agentsCard__agent-skills'>
                        <img width='247px' src={sageAbilities} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default siteContent