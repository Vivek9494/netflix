import React from 'react'
import faqJson from '../fixtures/faq.json'
import Accordion from '../components/accordion/Accordion'

export default function faqContainer() {
  return (
    <Accordion>
        <Accordion.Title>Frequently Asked Questions</Accordion.Title>
        {faqJson.map((item) => (
            <Accordion.Item key={item.id}>
                <Accordion.Header>{item.header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
        ))}
        
    </Accordion>
  )
}
