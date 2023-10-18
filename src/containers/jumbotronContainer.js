import React from 'react'
import Jumbotron from '../components/jumbotron/Jumbotron'
import jumbotronJson from '../fixtures/accordion.json'

export default function jumbotronContainer() {
  return (
    <Jumbotron.Container>
        {jumbotronJson.map((item) => (
            <Jumbotron key={item.id} direction={item.direction}>
                <Jumbotron.Pane>
                    <Jumbotron.Title>{item.title}</Jumbotron.Title>
                    <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
                </Jumbotron.Pane>
                <Jumbotron.Pane>
                    <Jumbotron.Image src={item.image} alt={item.alt} />
                </Jumbotron.Pane>
            </Jumbotron>
        ))}
    </Jumbotron.Container>
  );
}
