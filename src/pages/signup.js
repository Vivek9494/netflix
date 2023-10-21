import React, { useState } from 'react'
import HeaderContainer from '../containers/headerContainer'
import FooterContainer from '../containers/footerContainer'
import Form from '../components/form/Form'
import * as ROUTES from '../constants/routes'

export default function Signup() {
    const{name, SetName} = useState('');
    const{email, SetEmail} = useState('');
    const{password, SetPassword} = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input placeholder="Enter Your Name" value={name} onChange={({ target }) => SetName(target.value)}></Form.Input>
            <Form.Input placeholder="Email address" value={email} onChange={({ target }) => SetEmail(target.value)}></Form.Input>
            <Form.Input type="password" placeholder="Password" value={password} onChange={({target}) => SetPassword(target.value)}></Form.Input>
            <Form.Button type="submit">Sign Up</Form.Button>
          </Form.Base>    
          <Form.Text>Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign in now.</Form.Link></Form.Text>
          <Form.SmallText>This page is protected by Google reCAPCTHA to ensure that you are not a bot. Learn more.</Form.SmallText>
                
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
