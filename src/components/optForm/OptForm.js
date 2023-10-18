import React from 'react'
import { Container, Input, Text, Break, Button} from './style'

export default function OptForm({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};

OptForm.Text = function OptFormText ({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>;
};

OptForm.Input = function OptFormInput({...restProps}){
    return <Input {...restProps}></Input>;
};

OptForm.Break = function OptFormBreak({children, ...restProps}){
    return <Break {...restProps} />;
};

OptForm.Button = function OptFormButton({children, ...restProps}){
    return (<Button {...restProps}>
        {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>);
};