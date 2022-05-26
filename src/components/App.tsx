import { Provider } from "react-redux";
import { store } from "../state";
import RepositoriesList from "./RepositoriesList";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Titles</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;
