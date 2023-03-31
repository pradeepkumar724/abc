import './App.css';
import RoutesComponent from './components/firstProject/FirstProject';
import ShopProducts from './components/shopProducts/ShopProducts';
import AmazonShowProducts from './components/amazonShowProducts/AmazonShowProducts';

function App() {
  return (
    <div className="App">
        {/* <AmazonShowProducts/> */}
        <ShopProducts/>
        {/* <RoutesComponent/> */}
    </div>
  );
}

export default App;
