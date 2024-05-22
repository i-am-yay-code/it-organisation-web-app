import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FirstScreen() {
  return (
    <Container >
      <Row>
          <div class="jumbotron mb-5">
            <h1 class="display-4">ОПТИМІЗАЦІЯ ВИБОРУ ЗАХОДІВ ДЛЯ ОРГАНІЗАЦІЇ СИСТЕМИ УПРАВЛІННЯ ПІДПРИЄМСТВ ІТ СЕКТОРУ</h1>
            <br/>
            <br/>
            <p class="lead text-center">Як забезпечити ефективне функціонування та розвиток компаній в умовах тривалої невизначеності? </p>
            <p class="lead text-center">Які управлінські підходи допоможуть зберегти людський капітал та експертизу? </p>
            <p class="lead text-center">Як адаптувати системи менеджменту до нових реалій?</p>
            <br/>
            <p className='text-center'><strong>Цей вебсайт створений для того, щоб спробувати відповісти на ці питання. Прошу, заповніть потрібні поля і отримайте консультативні дані, бізнес-кейси та іншу корисну інформацію, що нам вдалося зібрати.</strong></p>
        </div>
      </Row>
    </Container>
  );
}

export default FirstScreen;