import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import { Header, HeaderTopBar, HeaderContent} from './styles'

interface PageHeaderProps {
  title: string;
  description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <Header>
      <HeaderTopBar>
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </HeaderTopBar>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children}
      </HeaderContent>
    </Header>
  );
};

export default PageHeader;
