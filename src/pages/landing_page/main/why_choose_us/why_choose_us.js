import React from 'react';
import { useTranslation } from 'react-i18next';
import style from './why_choose_us.module.css';
import Li from './li/li';
import assortment from '../../../../img/icons/why_choose_us/assortment.png';
import authenticity from '../../../../img/icons/why_choose_us/authenticity.png';
import convenience from '../../../../img/icons/why_choose_us/convenience.png';
import delivery from '../../../../img/icons/why_choose_us/delivery.png';
import ecology from '../../../../img/icons/why_choose_us/ecology.png';
import fairPayment from '../../../../img/icons/why_choose_us/fair_payment.png';
import polish from '../../../../img/icons/why_choose_us/polish.png';
import qualityAssurance from '../../../../img/icons/why_choose_us/quality_assurance.png';

function WhyChooseUs() {
  const { t } = useTranslation();
  const icons = [

    {
      icon: `${authenticity}`,
      h: `${t('why_choose_us.authenticity')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 1,
    },
    {
      icon: `${polish}`,
      h: `${t('why_choose_us.sophistication')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 2,
    },
    {
      icon: `${fairPayment}`,
      h: `${t('why_choose_us.fair_payment')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 3,
    },
    {
      icon: `${assortment}`,
      h: `${t('why_choose_us.a_large_assortment')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 4,
    },
    {
      icon: `${delivery}`,
      h: `${t('why_choose_us.worldwide_shipping')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 5,
    },
    {
      icon: `${qualityAssurance}`,
      h: `${t('why_choose_us.uality_assurance')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 6,
    },
    {
      icon: `${convenience}`,
      h: `${t('why_choose_us.ease_of_use')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 7,
    },
    {
      icon: `${ecology}`,
      h: `${t('why_choose_us.caring_for_the_environment')}`,
      p: `${t('why_choose_us.text')}`,
      details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
      id: 8,
    },
  ];
  
  return (
    <section className={style.why_choose_us}>
      <h2>{t('why_choose_us.why_choose_us_header')}</h2>
      <ul className={style.ul}>
        {icons.map((item) => <Li key={item.id} icon={item.icon} h={item.h} p={item.p} details={item.details} />)}
      </ul>
    </section>
  );
}
export default WhyChooseUs;
