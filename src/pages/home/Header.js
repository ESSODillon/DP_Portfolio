import React from 'react';
import SpeakerPictureBoth from '../../assets/Speaker_Picture_Both.png';
import { Link } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='heading-primary'>Dillon Polley</h1>

        <p className='heading-sub u-bold-text u-center-text'>{'<Full Stack Developer />'}</p>

        <div className='header__buttons u-margin-top-medium'>
          <a href='#section-about' className='btn btn--yellow btn--animated'>
            Who Am I?
          </a>

          <a href='/contact' className='btn btn--yellow btn--animated'>
            Contact Me
          </a>
        </div>
      </div>

      <img className='header__speaker' src={SpeakerPictureBoth} alt='Dillon with megaphone' />

      <div className='header__icons'>
        <Link href='https://twitter.com/DillonPolley'>
          <TwitterIcon class='icon__light' />
        </Link>
        <Link href='https://github.com/ESSODillon'>
          <GitHubIcon class='icon__light' />
        </Link>
        <Link href='https://www.instagram.com/therealdillonpolley/'>
          <InstagramIcon class='icon__light' />
        </Link>
        <Link href='https://www.linkedin.com/in/dillon-polley-a9586418b/'>
          <LinkedInIcon class='icon__light' />
        </Link>
      </div>
    </header>
  );
}

export default Header;
