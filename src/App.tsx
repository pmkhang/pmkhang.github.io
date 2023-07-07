import Content from './Components/MainComponents/Content';
import Footer from './Components/MainComponents/Footer';
import Header from './Components/MainComponents/Header';
import './App.scss';
import { Col, Grid, Row } from './GridSystem - typescript';

function App(): JSX.Element {
   return (
      <div>
         <Grid>
            <Row>
               <Col size={['l-12']}>
                  <div className='header'>
                     <Header />
                  </div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-12']}>
                  <div className='content'><Content /></div>
               </Col>
            </Row>
            <Row>
               <Col size={['l-12']}>
                  <div className='footer'><Footer /></div>
               </Col>
            </Row>
         </Grid>
      </div>
   );
}

export default App;
