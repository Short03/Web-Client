import React from 'react'
import Typical from 'react-typical'

function Profile() {
  return (
    <div className='profile-container' >
        <div className='profile-parent' >
            <div className='profile-details'>
                <div className='cloz'>
                    <a href='https://www.facebook.com/adriann.isai/' >
                        <i className='fa fa-facebook-square' ></i>
                    </a>
                    <a href='https://www.twitch.tv/short_conbigote' >
                        <i className="fa fa-twitch"></i>
                    </a>
                    <a href='https://www.instagram.com/adrian.sho/' >
                        <i className='fa fa-instagram' ></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCPPFn0Rm3shzBTEP41sfwXw' >
                        <i className='fa fa-youtube-square' ></i>
                    </a>
                    <a href='https://twitter.com/adrianShort97' >
                        <i className='fa fa-twitter' ></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="higlughted-text">Adrian Short</span>

                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                    <Typical loop = {Infinity}
                    steps={[
                        "Enthusiastic Dev",
                        1000,
                        "Full Stack Developer",
                        1000,
                        "MERN Stack Dev",
                        1000,
                        "Cross plataform v",
                        1000,
                        "React/React Native Dev",
                        1000,
                    ]}
                    />
                        </h1>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile