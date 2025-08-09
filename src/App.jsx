import PasswordGenerator from "./components/PasswordGenerator.jsx";
import SpotlightCard from "./components/SpotlightCard/SpotlightCard.jsx";
const App = () => {
  return (
    <div>
      <SpotlightCard>
        <PasswordGenerator />
      </SpotlightCard>
    </div>
  );
};

export default App;
