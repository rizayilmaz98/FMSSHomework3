import SearchCity from "./components/SearchCity";
import ShowWeather from "./components/ShowWeather";
import { SearchProvider } from "./context/SearchContext";
function App() {
  return (
    <SearchProvider>
      <SearchCity />
      <ShowWeather />
    </SearchProvider>
  );
}

export default App;
