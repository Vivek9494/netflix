import React from 'react'
import {Link as ReactRouterLink} from 'react-router-dom';
import { Background, NavLinkButton, Logo, Container } from './styles/style';

export default function Header({children, ...restProps}) {
  return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container { ...restProps}>{children}</Container>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (<ReactRouterLink to={to}><Logo { ...restProps} /></ReactRouterLink>);
};

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
  return <NavLinkButton { ...restProps}>{children}</NavLinkButton>;
};