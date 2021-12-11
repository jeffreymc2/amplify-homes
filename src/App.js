import './App.css';
import { NavBar, MarketingFooter, CardBCollection, HeroLayout1 } from './ui-components'

function App() {
  return (
    <div className="App">
      <NavBar width={"100vw"}/>
      <HeroLayout1/>
      <CardBCollection isPaginated itemsPerPage={3}/>
      <MarketingFooter width={"100vw"}/>
    </div>
  );
}

export default App;