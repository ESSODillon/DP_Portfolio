import React from 'react';
import { Link } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function Thanks() {
  return (
    <React.Fragment>
      <section class='thanks'>
        <Link href='/' class='exit'>
          <CloseIcon class='icon__light' />
        </Link>

        <h2 class='heading-contact heading-contact__primary u-center-text'>
          Thank You!
          <span class='u-underline__yellow u-underline__top'></span>
          <span class='u-underline__blue u-underline__bottom'></span>
        </h2>

        <h3 class='heading-thanks heading-thanks__sub u-center-text'>I appreciate you reaching out! I'll be in touch shortly.</h3>
      </section>
    </React.Fragment>
  );
}

export default Thanks;
