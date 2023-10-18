import React from 'react'
import Header from '../components/header/Header'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function HeaderContainer({children}) {
  return (
      <Header>
        <Header.Frame>
          <Header.Logo to = {ROUTES.HOME} alt="netflix" src={logo} />
          <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>        
        {children}
      </Header>   
  )
}
export default HeaderContainer