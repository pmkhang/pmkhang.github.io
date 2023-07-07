import Content from './Components/MainComponents/Content';
import Footer from './Components/MainComponents/Footer';
import Header from './Components/MainComponents/Header';
import './App.scss';

function App(): JSX.Element {
   return (
      <div className="wrapper">
         <div className="header">
            <Header />
         </div>
         <div className="content">
            <Content />
         </div>
         <div className="footer" id="footer">
            <Footer />
         </div>
      </div>
   );
}

export default App;
