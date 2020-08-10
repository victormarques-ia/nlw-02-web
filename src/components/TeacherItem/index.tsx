import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { TeacherItemBlock, Header, Footer} from './styles'
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <TeacherItemBlock>
      <Header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>
      <p>{teacher.bio}</p>
      <Footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={handleCreateNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
          type="button"
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </Footer>
    </TeacherItemBlock>
  );
};

export default TeacherItem;
