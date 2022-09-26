import React from 'react'
import WhyIcon from '../icons/whyprobot-circle.png'
import ShakehandsIcon from '../icons/shakehands.svg'
import HandIcon from '../icons/handicon.svg'
import ResponderIcon from '../icons/respondericon.svg'
import AntiraidIcon from '../icons/antiraid.svg'
import MultilanguageIcon from '../icons/multilanguage.svg'
import UptimeIcon from '../icons/uptimeicon.svg'
import './WhyProbot.css'

const WhyProbot = () => {
    return (
        <section className='whyprobot'>
            <div className='left-why'>
                <div className="txt-container">
                    <h4><span></span><div>Why</div> ProBot</h4>
                    <p>A very customizable multipurpose bot for welcome image, In-depth logs, Social commands, Music, Moderation and many more ...</p>
                </div>
                <div className='ball'>
                    <img src={WhyIcon} alt="" />
                </div>
            </div>
            <div className="center-why">
                <div>
                    <img src={ShakehandsIcon} alt="" />
                    <h6>Best Welcomer</h6>
                    <p>Give your new members a heartwarming welcome with our ready-to-use and fully customizable designs</p>
                </div>
                <div>
                    <img src={HandIcon} alt="" />
                    <h6>Auto Moderation</h6>
                    <p>A highly advanced automod system that detects bad behaviors and takes action on them</p>
                </div>
                <div>
                    <img src={ResponderIcon} alt="" />
                    <h6>Auto Responder</h6>
                    <p>Let the bot respond to any trigger words</p>
                </div>
            </div>
            <div className="right-why">
                <div>
                    <img src={AntiraidIcon} alt="" />
                    <h6>Anti-raid Protection</h6>
                    <p>Detect and take automatic actions upon server raids</p>
                </div>
                <div>
                    <img src={MultilanguageIcon} alt="" />
                    <h6>MultiLingual</h6>
                    <p>ProBot now supports more than 30 languages!</p>
                </div>
                <div>
                    <img src={UptimeIcon} alt="" />
                    <h6>99.99% Uptime</h6>
                    <p>No need to worry about downtimes, ProBot is online!</p>
                </div>
            </div>
        </section>
    )
}

export default WhyProbot