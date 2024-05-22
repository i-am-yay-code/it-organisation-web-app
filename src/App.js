import { Button, Container, Row } from 'react-bootstrap';
import BaseForm from './components/Form';
import Navigation from './components/navbar';
import FirstScreen from './components/firstscreen';
import AnswersAccordeon from './components/advisesAccordeon';
import { useState } from 'react';
import data from './data.json'
import ScoreScreen from './components/score';
import RefreshButton from './components/refreshButton';

function App() {

  const [appData, setAppData] = useState(data.data);

  const [formData, setFormData] = useState({
    CRR: 0,
    ROI: 0,
    ETR: 0,
    innovation: false,
    leader: false,
    brand: false
})

const [metric, setMetric] = useState(0);

const calculateMetric = () => {
  let metric = 0;

  metric = parseFloat(formData.CRR) + parseFloat(formData.ROI) + (1 - parseFloat(formData.ETR));

  if (formData.innovation){
    metric++;
  }
  if (formData.leader){
    metric++;
  }
  if (formData.brand){
    metric++;
  }

  setMetric(metric);
}

const [toggleAnswers, setToggleAnswers] = useState(false);

const toggleAnswersPage = (event) => {
    if (!toggleAnswers){
      let TempAppData = appData;

      TempAppData = resetAnswersPageVisibility(TempAppData);
  
      TempAppData[0].visible = (formData.CRR < 1 ? true : false);
      TempAppData[1].visible = (formData.ROI < 1 ? true : false);
      TempAppData[2].visible = (formData.ETR < 1 ? true : false);
      TempAppData[3].visible = (formData.innovation ? false : true);
      TempAppData[4].visible = (formData.leader ? false : true);
      TempAppData[5].visible = (formData.brand ? false : true);
  
      calculateMetric()
      setAppData(TempAppData);
      setToggleAnswers(true);
    }
}

const resetAnswersPageVisibility = (TempAppData) =>{
  
  TempAppData[0].visible = false;
  TempAppData[1].visible = false;
  TempAppData[2].visible = false;
  TempAppData[3].visible = false;
  TempAppData[4].visible = false;
  TempAppData[5].visible = false;
  
  return(TempAppData);
}

  return (
        <div className="App">
        <header className="App-header">
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>
            <Navigation></Navigation>
            <Container>
              <FirstScreen></FirstScreen>
              <BaseForm formData={formData} setFormData={setFormData} handleDone={toggleAnswersPage}></BaseForm>
              <ScoreScreen visible={toggleAnswers} metricValue={metric}></ScoreScreen>
              <AnswersAccordeon data={appData}></AnswersAccordeon>
              <RefreshButton visible={toggleAnswers}></RefreshButton>
            </Container>
      </header>
    </div>
  );
}

export default App;
