import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
        <a href='/' class='exit'>
          <svg xmlns='http://www.w3.org/2000/svg' class='icon__yellow' viewBox='0 0 24 24'>
            <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
          </svg>
        </a>

        <h2 class='heading-contact heading-contact__primary u-center-text'>
          Let's Work Together!
          <span class='u-underline__yellow u-underline__top'></span>
          <span class='u-underline__blue u-underline__bottom'></span>
        </h2>

        <h3 class='heading-contact heading-contact__sub u-center-text'>How may I be of assistance?</h3>

        <form ref={form} onSubmit={sendEmail}>
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

          <a class='btn btn--yellow btn--animated contact__button u-center-text'>Submit</a>
        </form>
      </section>
    </React.Fragment>
  );
}

export default Contact;
