import React from 'react';
import { Link } from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className='footer'>
      <p className='paragraph margin u-center-text'>
        Did we just become best friends? Yep. Now come say hi so we can get in touch!
      </p>

      <a href='/contact' className='btn btn--dark btn--animated'>
        Contact Me
      </a>

      <div className='icons__row'>
        <Link href='https://twitter.com/DillonPolley'>
          <TwitterIcon class='icon__dark' />
        </Link>
        <Link href='https://github.com/ESSODillon'>
          <GitHubIcon class='icon__dark' />
        </Link>
        <Link href='https://www.instagram.com/therealdillonpolley/'>
          <InstagramIcon class='icon__dark' />
        </Link>
        <Link href='https://www.linkedin.com/in/dillon-polley-a9586418b/'>
          <LinkedInIcon class='icon__dark' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
