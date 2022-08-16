import classes from './App.module.css';
import Header from './components/Header/Header.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import Content from './components/Content/Content.tsx'
function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Navbar />
      <div className={classes.contentWrapper}>
        <Content />  
      </div>
    </div>
  );
}

export default App;
