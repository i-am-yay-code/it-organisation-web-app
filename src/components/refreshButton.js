import { Row, Button } from "react-bootstrap";

const RefreshButton = ({visible}) => {

    const refreshPage = () => {
        window.location.reload(false);
      }
      
    return(
        visible &&
        <Row className="m-5">
            <Button className='btn btn-primary btn-lg' onClick={refreshPage}>Очистити сторінку</Button>
        </Row>
    );
}

export default RefreshButton;