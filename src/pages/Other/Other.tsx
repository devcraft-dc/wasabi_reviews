import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import styles from './other.module.scss';
import { Button } from '../../components/Button/Button';
import { getValueFromLS } from '../../utils/getValueFromLS';
import { createTemplate } from '../../utils/createTemplate';

const token = '6217522529:AAHSeO_K1sy7NlTC0aLPmn_m6XQaDrnn_Ls';
const chatId = '-822673453';

const Other = () => {
  const [review, setReview] = useState('');
  const navigate = useNavigate();
  const username = getValueFromLS('name');
  const phone = getValueFromLS('phone number');
  const category = getValueFromLS('category');
  const target = getValueFromLS('target');
  const email = getValueFromLS('email');

  const template = createTemplate({ username, phone, email, review, category, target });

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${template}`;

  const sendMessage = () => {
    if (review.match(/[#&+/\\]/g) === null) {
      navigate('/wasabi_reviews/thanks');
      void fetch(url);
      setReview('');
    }
  };

  return (
    <>
      <textarea
        className={styles.textarea}
        placeholder="Ваш отзыв..."
        name="review"
        value={review}
        cols={2}
        rows={6}
        onChange={(e) => {
          setReview(e.target.value);
        }}
      />
      <div className={styles.buttons}>
        <Button
          onClick={() => {
            navigate('/wasabi_reviews/choose');
          }}
        >
          Назад
        </Button>
        <Button
          onClick={() => {
            sendMessage();
          }}
          disabled={review === ''}
        >
          Отправить
        </Button>
      </div>
    </>
  );
};

export default Other;
