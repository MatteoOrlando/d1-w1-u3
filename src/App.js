//  QUESTO É IL FILE PRINCIPALE DOVE VADO A INSERIRE I VARI JSX COMPONENT
import './App.css';
import ButtonComponent from './ButtonComponet';
// import ImageComponent from './ImageComponent';
import ClassImageComponent from './ClassImageComponent';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <main>
          <div>
            <h1>---U3-W1-D1---</h1>
            <ButtonComponent textToShow="Don't" />
            <ButtonComponent textToShow="Push" />
            <ButtonComponent textToShow="This" />
            <ButtonComponent textToShow="Button!" />
            <ClassImageComponent
              altImage="Red Buttons"
              searchImage="https://cdn.vectorstock.com/i/1000x1000/80/27/big-red-button-vector-8548027.webp"
            />
          </div>
        </main>
      </header>
    </div>
  );
}

export default App;
