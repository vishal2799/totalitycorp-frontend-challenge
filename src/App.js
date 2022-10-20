import './App.css';
import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Footer from './components/Footer/Footer';
import data from './data';

function App() {
  return (
    <>
      <div className='App'>
        <Header />
        <div className='app__itemsContainer'>
          {data.map((d) => {
            return (
              <Item
                title={d.title}
                desc={d.desc}
                descLink=''
                backgroundImg={d.backgroundImg}
                leftBtnTxt={d.leftBtnTxt}
                leftBtnLink=''
                rightBtnTxt={d.rightBtnTxt}
                rightBtnLink=''
                twoButtons={d.twoButtons}
                first={d.first}
              />
            );
          })}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
