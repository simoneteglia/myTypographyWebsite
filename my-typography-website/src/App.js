import Landing from "./components/Landing";

function App() {
  document.body.style.cursor = "none";
  return (
    <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Landing />
    </div>
  );
}

export default App;
