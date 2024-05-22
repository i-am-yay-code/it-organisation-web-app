import { useState } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BaseForm({formData, setFormData, handleDone}) {
  return (
    <Row className='d-flex flex-row flex-wrap'>
        <Col>        
            <Form>
                <Form.Group className="mb-3" controlId="CRR" >
                    <Form.Label>Коефіцієнт утримання клієнтів (CRR)</Form.Label>
                    <Form.Control value={formData.CRR} onChange={(e) => setFormData({...formData, CRR: e.target.value})} type="number" placeholder="CRR" step={0.01} min={0} max={1}/>
                </Form.Group>
                 <Form.Group className="mb-3" controlId="ROI">
                    <Form.Label>Рентабельність інвестицій (ROI)</Form.Label>
                    <Form.Control value={formData.ROI} onChange={(e) => setFormData({...formData, ROI: e.target.value})} type="number" placeholder="ROI" step={0.01} min={0} max={1}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ETR">
                    <Form.Label>Плинність кадрів (ETR)</Form.Label>
                    <Form.Control value={formData.ETR} onChange={(e) => setFormData({...formData, ETR: e.target.value})} type="number" placeholder="ETR" step={0.01} min={0} max={1}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="chk-1">
                    <Form.Check value={formData.innovation} onChange={(e) => setFormData({...formData, innovation: e.target.value})} type="checkbox" label="Чи впроваджуєте ви на постійній основі новітні рішення, що стосуються вашої галузі?" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="chk-2">
                    <Form.Check value={formData.leader} onChange={(e) => setFormData({...formData, leader: e.target.value})} type="checkbox"label="Чи є ви лідером у вашій галузі (ніші)" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="chk-3">
                    <Form.Check value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} type="checkbox" label="Чи є у вас розвинений бренд, чи працює у вас сарафанне радіо?" />
                </Form.Group> 
            </Form>
            <Button className='btn btn-primary btn-lg' type="submit" onClick={event => handleDone(event)}>
                        Далі
                </Button>
        </Col>
        <Col >
            <img src={require("../img/person.jpg")}></img>
        </Col>
    </Row>
  );
}

export default BaseForm;