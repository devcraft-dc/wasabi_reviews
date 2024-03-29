import { useState } from 'react';

import styles from './userinfo.module.scss';
import { LinkButton } from '../../components/LinkButton/LinkButton';

import PhoneInput from '@/components/PhoneInput/PhoneInput';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  function handleNameInput(value: string) {
    const formattedName = value.replace(/[^a-zA-Z0-9\u0400-\u04FF-"' ]/, '');
    setName(formattedName);
  }

  const saveInLS = () => {
    if (name !== '') {
      localStorage.setItem('name', name);
    } else {
      localStorage.removeItem('name');
    }
    if (phoneNumber !== '') {
      localStorage.setItem('phone', phoneNumber);
    } else {
      localStorage.removeItem('phone');
    }
    if (email !== '') {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Введите ваши данные <br /> (по желанию)
      </h2>

      <div className={styles.input_container}>
        <input
          className={styles.first_input_element}
          maxLength={40}
          type="text"
          placeholder="Ваше имя..."
          value={name}
          onChange={(e) => {
            handleNameInput(e.target.value);
          }}
        />
      </div>

      <div className={styles.input_container}>
        <PhoneInput
          className={styles.phone_input}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
        />
      </div>

      <div className={styles.input_container}>
        <input
          className={styles.last_input_element}
          type="email"
          placeholder="Ваша электронная почта..."
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <LinkButton to="/choose" onClick={saveInLS}>
        Далее
      </LinkButton>
    </div>
  );
};

export default UserInfo;
