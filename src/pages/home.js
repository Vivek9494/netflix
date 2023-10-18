import React from 'react'
import HeaderContainer from '../containers/headerContainer'
import JumbotronContainer from '../containers/jumbotronContainer'
import FaqContainer from '../containers/faqContainer'
import Feature from '../components/features/Feature'
import OptForm from '../components/optForm/OptForm'

export default function home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV, </Feature.Title>
          <Feature.SubTitle>programs and more.</Feature.SubTitle>        

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>TRY IT NOW</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer></JumbotronContainer>
      <FaqContainer>
          <OptForm>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>TRY IT NOW</OptForm.Button>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
          </OptForm>
      </FaqContainer>
      </>
  )
}
