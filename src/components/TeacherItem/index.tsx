import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/60486864?s=460&u=203b6e6e08ca75627b35e05461e2daeffdc406ce&v=4"
          alt="Victor Silva"
        />
        <div>
          <strong>Victor Silva</strong>
          <span>Matemática</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
        <br />
        <br />
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries,
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
