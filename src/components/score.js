import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ScoreScreen({metricValue, visible}) {
  return (
    visible &&
    <Container>
      <Row>
          <div class="jumbotron mb-5">
            <h1 class="display-3">Значення вашої об'єднаної метрики - {metricValue}</h1>
            <br/>
            <br/>
            <p class="lead text-center">Ми можемо запропонувати Вам таку корисну інформацію:</p>
        </div>
      </Row>
    </Container>
  );
}

export default ScoreScreen;