import React from 'react'
import { Container, Input, Link, Submit, Text, TextSmall, Title, Base } from './formStyle'

export default function Form({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps}) {
    return <Base { ...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>;
};

Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps}>{children}</Input>;
};

Form.Button = function FormButton({children,...restProps}){
    return <Submit {...restProps}>{children}</Submit>
};

Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
};

Form.SmallText = function FormSmallText({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>;
}

Form.Link = function FormLink({to, children}){
    return <Link to={to}>{children}</Link>;
}