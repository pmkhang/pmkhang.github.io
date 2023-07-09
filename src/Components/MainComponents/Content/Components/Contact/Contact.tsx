import React, { FormEvent, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';

const cx = classNames.bind(styles);

const Contact: React.FC = () => {
   const scriptURL =
      'https://script.google.com/macros/s/AKfycbzZBVjGp28Io4c5e7IZM0RxA0axh7fFGEfEwk-PHXniVUleyJdz_52NbQD-pwobt0-u/exec';
   const [alertMessage, setAlertMessage] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(false);
   const formRef = useRef<HTMLFormElement>(null);

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      try {
         await axios.post(scriptURL, new FormData(event.currentTarget));
         handleResetForm();
         setAlertMessage('Thank you for contacting me!');
         alert('Submitted successfully!');
      } catch (error) {
         console.error('Error!', error);
         // Xử lý lỗi
      } finally {
         setLoading(false);
      }
   };

   const handleResetForm = () => {
      if (formRef.current) {
         formRef.current.reset();
      }
   };

   return (
      <section className={cx('wrapper')} id="contact">
         <Grid>
            <Row>
               <Col size={['l-4', 'm-12', 's-12']}>
                  <div className={cx('my-info')}>
                     <h2 className={cx('title')}>Contact for Work</h2>
                     <a className={cx('info')} href="mailto:pham.m.khang.98@gmail.com">
                        <span className={cx('icon')}>
                           <FontAwesomeIcon icon={faEnvelope} />
                        </span>
                        Pham.m.khang.98@gmail.com
                     </a>
                     <a className={cx('info')} href="tel:+84779066965">
                        <span className={cx('icon')}>
                           <FontAwesomeIcon icon={faPhone} />
                        </span>
                        +84 779066965
                     </a>
                  </div>
               </Col>
               <Col size={['l-8', 'm-12', 's-12']}>
                  <form ref={formRef} id="contact-form" name="data" onSubmit={handleSubmit}>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('contact-input')}
                           type="text"
                           id="name"
                           name="Name"
                           required
                           placeholder="Your name"
                           disabled={loading}
                           spellCheck
                        />
                     </div>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('contact-input', 'email')}
                           type="email"
                           id="email"
                           name="Email"
                           required
                           placeholder="Your email"
                           pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
                           disabled={loading}
                           spellCheck
                        />
                        <input
                           className={cx('contact-input', 'phone')}
                           type="tel"
                           id="phone"
                           name="Phone"
                           required
                           placeholder="Your phone number"
                           pattern="(\+\d{1,3}\s?)?(\(\d{1,3}\)\s?)?[\d\s-]{8,}"
                           disabled={loading}
                           onKeyPress={(event) => {
                              const keyCode = event.which ? event.which : event.keyCode;
                              const isValidKey = /[0-9+]/.test(String.fromCharCode(keyCode));
                              if (!isValidKey) {
                                 event.preventDefault();
                              }
                           }}
                        />
                     </div>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('contact-input')}
                           type="text"
                           id="title"
                           name="Title"
                           required
                           placeholder="Your title"
                           disabled={loading}
                        />
                     </div>
                     <div className={cx('contact-group')}>
                        <textarea
                           className={cx('contact-textarea')}
                           id="message"
                           name="Message"
                           required
                           placeholder="Your message"
                           disabled={loading}
                        ></textarea>
                     </div>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('send-btn', { loading })}
                           type="submit"
                           value={loading ? 'SENDING...' : 'SEND'}
                           disabled={loading}
                        />
                     </div>
                  </form>
                  <div className={cx('alert-message')}>
                     <span>{alertMessage}</span>
                  </div>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Contact;
