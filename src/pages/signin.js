import React, { useState } from 'react'
import HeaderContainer from '../containers/headerContainer'
import FooterContainer from '../containers/footerContainer'
import Form from '../components/form/Form'
import * as ROUTES from '../constants/routes'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function Signin() {
  //const { firebase } = useContext(FirebaseContext);
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const [Error, SetError] = useState('');

  const isInvalid = email === '' || password === '';

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      console.log(userCredentials);
    }).catch((error) => {
      SetError(error);
    })
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          <Form.Base onSubmit={handleSubmit} method="POST">
            {Error ? <Form.Text>Error</Form.Text> : null}
            <Form.Input placeholder="Email address" value={email} onChange={({ target }) => SetEmail(target.value)}></Form.Input>
            <Form.Input type="password" placeholder="Password" value={password} onChange={({target}) => SetPassword(target.value)}></Form.Input>
            <Form.Button type="submit">SignIn</Form.Button>
          </Form.Base>    
          <Form.Text>New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link></Form.Text>
          <Form.SmallText>This page is protected by Google reCAPCTHA to ensure that you are not a bot. Learn more.</Form.SmallText>
                
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
