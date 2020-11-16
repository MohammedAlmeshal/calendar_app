import "../App.css";
import Calendar from "./Calendar";
import "antd/dist/antd.css";

import store from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar></Calendar>
      </div>
    </Provider>
  );
}

export default App;
