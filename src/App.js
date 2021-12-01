import React,{useState} from 'react';
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance" 
};

var dataToString = Object.keys(emojiDictionary);

function App() {

  const [result,setResult] = useState("");

  function inputTextHandler(event){
    const inputText = event.target.value;
    var meaning = emojiDictionary[inputText];
    
    if(meaning === undefined){
      meaning = "try something else";
    }

    setResult(meaning);
  }

  function emojiClickHandler(item){
    var meaning = emojiDictionary[item];
    setResult(meaning);
  }

  return (
    <div className="App">
      <header>Emojify</header>
      <input onChange={inputTextHandler} />
      <h2>{result}</h2>
      {
        dataToString.map((item) =>{
          return <span onClick={() =>emojiClickHandler(item)} key={item}>{item}</span>
        })
      }
      <h4>Click on any emoji to check its meaning</h4>
    </div>
  );
}

export default App;
