import Accordion from 'react-bootstrap/Accordion';
import AnswerAccordeonItem from './advise';

function AnswersAccordeon({data}) {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen className='mt-5 mb-5'>
              {data.map((item) => (
                item.visible && <AnswerAccordeonItem itemKey={item.metricNo} name={item.name} text={item.text} caseText={item.case}></AnswerAccordeonItem>
        ))}
    </Accordion>
  );
}

export default AnswersAccordeon;
