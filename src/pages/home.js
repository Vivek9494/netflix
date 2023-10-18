import React from 'react'
import HeaderContainer from '../containers/headerContainer'
import Feature from '../components/features/Feature'
import OptForm from '../components/optForm/OptForm'
import Accordion from '../components/accordion/accordion'

export default function home() {
  return (
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited films, TV, </Feature.Title>
          <Feature.SubTitle>programs and more.</Feature.SubTitle>        

          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Break />
            <OptForm.Button>TRY IT NOW</OptForm.Button>
          </OptForm>
        </Feature>

        <Accordion>
          
        </Accordion>
      </HeaderContainer>
  )
}
