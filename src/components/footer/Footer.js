import React from 'react'
import { Break, Column, Container, Link, Row, Text } from './footerStyle';
export default function Footer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Body = function FooterBody({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({children, ...restProps}){
    return <Break />;
};

Footer.Row = function FooterRow({children, ...restProps}){
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({children, ...restProps}){
    return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>;
};