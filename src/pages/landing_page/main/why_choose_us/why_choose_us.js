import React from 'react';
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

const icons = [

  {
    icon: `${authenticity}`,
    h: 'Аутентичность',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 1,
  },
  {
    icon: `${polish}`,
    h: 'Изысканность',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 2,
  },
  {
    icon: `${fairPayment}`,
    h: 'Честная оплата',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 3,
  },
  {
    icon: `${assortment}`,
    h: 'Большой ассортимент',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 4,
  },
  {
    icon: `${delivery}`,
    h: 'Доставка по всему миру',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 5,
  },
  {
    icon: `${qualityAssurance}`,
    h: 'Гарантия качества',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 6,
  },
  {
    icon: `${convenience}`,
    h: 'Удобство в использовании',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 7,
  },
  {
    icon: `${ecology}`,
    h: 'Забота об окружающей среде',
    p: 'Медное перегонное оборудование используется для получения эфирных масел с незапамятных времен.',
    details: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur veritatis quibusdam ducimus ad, dolore, magni, odio quas nemo expedita voluptate omnis excepturi neque temporibus cum repellat? Aperiam deleniti praesentium ad.',
    id: 8,
  },
];
class WhyChooseUs extends React.Component {
  render() {
    return (
      <section className={style.why_choose_us}>
        <h2>почему выбирают нас</h2>
        <ul className={style.ul}>
          {icons.map((item) => <Li key={item.id} icon={item.icon} h={item.h} p={item.p} details={item.details} />)}
        </ul>
      </section>
    );
  }
}
export default WhyChooseUs;
