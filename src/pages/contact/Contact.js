import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aaumhk8', 'template_mrolsuf', form.current, 'jeKp1RzE4ute-dsCA').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <React.Fragment>
      <section class='contact'>
        <Link href='/' class='exit'>
          <CloseIcon class='icon__light' />
        </Link>

        <h2 class='heading-contact heading-contact__primary u-center-text'>
          Let's Work Together!
          <span class='u-underline__yellow u-underline__top'></span>
          <span class='u-underline__blue u-underline__bottom'></span>
        </h2>

        <h3 class='heading-contact heading-contact__sub u-center-text'>How may I be of assistance?</h3>

        <form ref={form} onSubmit={sendEmail} class='contact__form'>
          <input type='hidden' name='_next' value='https://essodillon.github.io/DP_Portfolio/thanks' />

          <div class='contact__name'>
            <label class='contact__label' for='name'>
              Name:
            </label>

            <input class='contact__input contact__input__first' type='text' id='name' name='name' required />
          </div>

          <div class='contact__email'>
            <label class='contact__label' for='email'>
              Email:
            </label>

            <input class='contact__input contact__input__first' type='email' id='email' name='email' required />
          </div>

          <div class='contact__message'>
            <label class='contact__label' for='message'>
              Message:
            </label>

            <textarea class='contact__input contact__input__second' type='text' id='message' name='message' required></textarea>
          </div>

          <input class='btn btn--yellow btn--animated contact__button u-center-text' type='submit' value='Submit' />
        </form>
      </section>
    </React.Fragment>
  );
}

export default Contact;
