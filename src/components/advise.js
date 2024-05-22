import {Accordion}  from "react-bootstrap";
import Case from "./case";

function AnswerAccordeonItem({itemKey, name, text, caseText}) {
    return (
        <Accordion.Item eventKey={itemKey}>
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>
                {text.split('\n').map(line => <p>{line}</p>)}
                <Case caseText={caseText}></Case>
        </Accordion.Body>
      </Accordion.Item>
    );
  }

export default AnswerAccordeonItem