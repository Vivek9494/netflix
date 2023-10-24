import React from 'react'
import HeaderContainer from '../containers/headerContainer'
import JumbotronContainer from '../containers/jumbotronContainer'
import FooterContainer from '../containers/footerContainer'
import FaqContainer from '../containers/faqContainer'
import Feature from '../components/features/Feature'
import OptForm from '../components/optForm/OptForm'

export default function home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>        

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer/>
      <FaqContainer>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>TRY IT NOW</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
      </FaqContainer>
      <FooterContainer></FooterContainer>
      </>
  )
}
