import './HeavyComponent.css'; // Big CSS file imported normally

console.log("HeavyComponent.jsx imported!");

const HeavyComponent = () => {
  console.log('HeavyComponent rendered');
  return (
    <div className="heavy-container">
      <h2>I am a heavy component!</h2>
      <p>Loaded lazily with CSS</p>
    </div>
  );
}

export default HeavyComponent;
