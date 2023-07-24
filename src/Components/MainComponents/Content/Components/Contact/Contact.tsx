import React, { FormEvent, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import styles from './Contact.module.scss';
import { Col, Grid, Row } from 'GridSystem - typescript';
import { useDarkMode } from 'DarkMode/DarkModeContext';
import { useLanguage } from 'SwitchLanguage/Language';

const cx = classNames.bind(styles);

interface ContactFormData extends FormData {
   Name: string;
   Email: string;
   Phone: string;
   Title: string;
   Message: string;
}
interface ContactInfo {
   title: {
      en: string;
      vi: string;
   };
   description: {
      en: string;
      vi: string;
   };
}

const contactInfoData: ContactInfo[] = [
   {
      title: {
         en: "Let's work together",
         vi: 'Hợp tác cùng nhau',
      },
      description: {
         en: 'Feel free to get in touch with me. I am always willing to accompany you in developing and creating new ideas that align with your vision.',
         vi: 'Hãy liên hệ cho tôi. Tôi luôn sẵn lòng đồng hành cùng với bạn. Phát triển, sáng tạo ý tưởng mới tầm nhìn của bạn.',
      },
   },
];

const Contact: React.FC = () => {
   const scriptURL =
      'https://script.google.com/macros/s/AKfycbzZBVjGp28Io4c5e7IZM0RxA0axh7fFGEfEwk-PHXniVUleyJdz_52NbQD-pwobt0-u/exec';
   const [alertMessage, setAlertMessage] = useState<string>('');
   const [loading, setLoading] = useState<boolean>(false);
   const formRef = useRef<HTMLFormElement>(null);
   const { darkMode } = useDarkMode();
   const { language } = useLanguage();

   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);

      try {
         const formData = new FormData(event.currentTarget) as ContactFormData;
         await axios.post(scriptURL, formData);
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
                  {contactInfoData.map((contactInfo, index) => (
                     <div key={index} className={cx('my-info')}>
                        <h2 className={cx('title')}>
                           {language === 'vi' ? contactInfo.title.vi : contactInfo.title.en}
                        </h2>
                        <span className={cx('title-desc')}>
                           {language === 'vi' ? contactInfo.description.vi : contactInfo.description.en}
                        </span>
                        <a
                           className={cx('info', `${darkMode ? 'darkmode' : ''}`)}
                           href="mailto:pham.m.khang.98@gmail.com"
                        >
                           <span className={cx('icon')}>
                              <FontAwesomeIcon icon={faEnvelope} />
                           </span>
                           Pham.m.khang.98@gmail.com
                        </a>
                        <a className={cx('info', `${darkMode ? 'darkmode' : ''}`)} href="tel:+84779066965">
                           <span className={cx('icon')}>
                              <FontAwesomeIcon icon={faPhone} />
                           </span>
                           +84 779066965
                        </a>
                     </div>
                  ))}
               </Col>
               <Col size={['l-8', 'm-12', 's-12']}>
                  <form ref={formRef} id="contact-form" name="data" onSubmit={handleSubmit}>
                     <h2 className={cx('title')}>{language === 'vi' ? 'Liên hệ' : 'Get in touch'}</h2>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('contact-input', `${darkMode ? 'darkmode' : ''}`)}
                           type="text"
                           id="name"
                           name="Name"
                           required
                           placeholder={`${language === 'vi' ? 'Tên' : 'Name'}`}
                           disabled={loading}
                           spellCheck
                        />
                     </div>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('contact-input', `${darkMode ? 'darkmode' : ''}`, 'email')}
                           type="email"
                           id="email"
                           name="Email"
                           required
                           placeholder={`${language === 'vi' ? 'Email' : 'Email'}`}
                           pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
                           disabled={loading}
                           spellCheck
                        />
                        <input
                           className={cx('contact-input', `${darkMode ? 'darkmode' : ''}`, 'phone')}
                           type="tel"
                           id="phone"
                           name="Phone"
                           required
                           placeholder={`${language === 'vi' ? 'Số điện thoại' : 'Phone number'}`}
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
                           className={cx('contact-input', `${darkMode ? 'darkmode' : ''}`)}
                           type="text"
                           id="title"
                           name="Title"
                           required
                           placeholder={`${language === 'vi' ? 'Chủ đề' : 'Title'}`}
                           disabled={loading}
                        />
                     </div>
                     <div className={cx('contact-group')}>
                        <textarea
                           className={cx('contact-textarea', `${darkMode ? 'darkmode' : ''}`)}
                           id="message"
                           name="Message"
                           required
                           placeholder={`${language === 'vi' ? 'Lời nhắn' : 'Message'}`}
                           disabled={loading}
                        ></textarea>
                     </div>
                     <div className={cx('contact-group')}>
                        <input
                           className={cx('send-btn', `${darkMode ? 'darkmode' : ''}`, { loading })}
                           type="submit"
                           value={
                              loading
                                 ? `${language === 'vi' ? 'ĐANG GỬI...' : 'SENDING...'}`
                                 : `${language === 'vi' ? 'GỬI' : 'SEND'}`
                           }
                        />
                     </div>
                     <span className={cx('alert-message')}>{alertMessage}</span>
                  </form>
               </Col>
            </Row>
         </Grid>
      </section>
   );
};

export default Contact;
