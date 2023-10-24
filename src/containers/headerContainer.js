import React, { useState } from 'react'
import Header from '../components/header/Header'
import UserHeader from '../components/header/UserHeader'
import * as ROUTES from '../constants/routes'
import logo from '../logo.svg'

function HeaderContainer({children}) {
  const authUser = localStorage.getItem("authUser");
  const user = JSON.parse(authUser);
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <Header user={user.uid}>
        <Header.Frame>
          <Header.Logo to = {ROUTES.HOME} alt="netflix" src={logo} />

          {!authUser && <Header.ButtonLink to = {ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>}
          {authUser && <>
                        <UserHeader.Frame>
                          <UserHeader>
                            <UserHeader.Link to = {ROUTES.BROWSE}>Home</UserHeader.Link>
                            <UserHeader.Link to = {ROUTES.GENRE_TV}>TV Shows</UserHeader.Link>
                            <UserHeader.Link to = {ROUTES.GENRE_MOVIE}>Movies</UserHeader.Link>
                            <UserHeader.Link to ="">News & Popular</UserHeader.Link>
                            <UserHeader.Link to ="">My List</UserHeader.Link>
                            <UserHeader.Link to ="">Browse by Languages</UserHeader.Link>                      
                          </UserHeader>
                        </UserHeader.Frame>
                        <UserHeader.Frame>
                          <UserHeader.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} ></UserHeader.Search>
                          <UserHeader.Profile>
                            <UserHeader.Picture src="#" />
                            <UserHeader.Dropdown>
                              <UserHeader.Frame>
                                  <UserHeader.Picture/>
                                  <UserHeader.TextLink>{user.displayName}</UserHeader.TextLink>
                              </UserHeader.Frame>
                            </UserHeader.Dropdown>
                            <UserHeader.Dropdown>
                              <UserHeader.Link to='#'>Manage profiles</UserHeader.Link>
                              <UserHeader.Link to="#">Transfer Profile</UserHeader.Link>
                              <UserHeader.Link to="#">Account</UserHeader.Link>
                              <UserHeader.Link to="#">Help Center</UserHeader.Link>                            
                              <UserHeader.Frame>
                                  <UserHeader.TextLink>Sign out</UserHeader.TextLink>
                              </UserHeader.Frame>
                            </UserHeader.Dropdown>
                          </UserHeader.Profile>
                        </UserHeader.Frame>
                      </>
          }
        </Header.Frame>  
        {authUser && <UserHeader.Banner></UserHeader.Banner>}      
        {children}
      </Header>   
  )
}
export default HeaderContainer