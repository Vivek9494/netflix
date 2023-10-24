import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderContainer from '../containers/headerContainer'
import FooterContainer from '../containers/footerContainer'
import Form from '../components/form/Form'
import * as ROUTES from '../constants/routes'
import { createUserWithEmailAndPassword, updateProfile, getAuth} from 'firebase/auth'
import { auth } from '../firebase'

export default function Signup() {
    const navigate = useNavigate();
    const [userName, SetUserName] = useState('');
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [Error, SetError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((user) => {
          updateProfile(auth.currentUser,{displayName: userName}).then((res) =>{
            navigate(ROUTES.SIGN_IN);
          }).catch((error) => {
            SetError(error.message);
          })
        }).catch((error) => {
          SetError(error.message)
        })
    }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {Error && <Form.Error>{Error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit} method="POST">
            <Form.Input 
              placeholder="Enter Your Name" value={userName} 
              onChange={({ target }) => { SetUserName(target.value)}}>
            </Form.Input>
            
            <Form.Input 
              placeholder="Email address" value={email} 
              onChange={({ target }) => SetEmail(target.value)}>                
            </Form.Input>
            
            <Form.Input type="password" 
              placeholder="Password" value={password} 
              onChange={({target}) => SetPassword(target.value)}>                
            </Form.Input>
            
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
