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
  return (
    <div className="form">
      <form action="" method="GET">
        <label for="asset-type">Select asset</label>
        <select name="asset" id="asset-type">
          <option value="eth">ETH</option>
        </select>
        <label for="borrow-amt">Borrow Amount</label>
        <input type="tel" id="borrow-amt" name="borrow-amt" />
        <textarea name="textarea" readOnly></textarea>
        <button type="submit">Execute</button>
      </form>
    </div>
  );
}

function Placeholder() {
  return <div className="placeholder"></div>;
}

export default App;
