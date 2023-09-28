// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Body />
//     </div>
//   );
// }

// function Header() {
//   return (
//     <div className="header">
//       <HeaderButton title="Open" />
//       <HeaderButton title="Close" />
//       <HeaderButton title="Boost" />
//     </div>
//   );
// }

// function HeaderButton({ title }) {
//   return <button className="header-btn">{title}</button>;
// }

// function Body() {
//   return (
//     <div className="body">
//       <Form />
//       <Placeholder />
//       <Placeholder />
//     </div>
//   );
// }

// function Form() {
//   return (
//     <div className="form">
//       <form action="" method="GET">
//         <label for="asset-type">Select asset</label>
//         <select name="asset" id="asset-type">
//           <option value="eth">ETH</option>
//         </select>
//         <label for="borrow-amt">Borrow Amount</label>
//         <input type="tel" id="borrow-amt" name="borrow-amt" />
//         <textarea name="textarea" readOnly></textarea>
//         <button type="submit">Execute</button>
//       </form>
//     </div>
//   );
// }

// function Placeholder() {
//   return <div className="placeholder"></div>;
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <HeaderButton title="Open" />
      <HeaderButton title="Close" />
      <HeaderButton title="Boost" />
    </div>
  );
}

function HeaderButton({ title }) {
  return <button className="header-btn">{title}</button>;
}

function Body() {
  return (
    <div className="body">
      <Form />
      <Placeholder />
      <Placeholder />
    </div>
  );
}

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [displayedValue, setDisplayedValue] = useState("");
  
  // We will use useRef to maintain the timer reference.
  const timerRef = React.useRef(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log("Input changed:", e.target.value);  // Debugging line
  };

  useEffect(() => {
    console.log("useEffect triggered with inputValue:", inputValue);  // Debugging line
    
    if (inputValue !== displayedValue) {
      // Clear any existing timeout
      if(timerRef.current) {
        clearTimeout(timerRef.current); 
      }
      
      timerRef.current = setTimeout(() => {
        console.log("Setting displayedValue to", inputValue);  // Debugging line
        setDisplayedValue(inputValue);
      }, 1000);
    }
    
    // Cleanup on unmount
    return () => {
      if(timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [inputValue]);

  return (
    <div className="form">
      <form action="" method="GET">
        <label htmlFor="asset-type">Select asset</label>
        <select name="asset" id="asset-type">
          <option value="eth">ETH</option>
        </select>
        <label htmlFor="borrow-amt">Borrow Amount</label>
        <input
          type="tel"
          id="borrow-amt"
          name="borrow-amt"
          value={inputValue}
          onChange={handleInputChange}
        />
        <textarea name="textarea" readOnly value={displayedValue}></textarea>
        <button type="submit">Execute</button>
      </form>
    </div>
  );
}

function Placeholder() {
  return <div className="placeholder"></div>;
}

export default App;


