import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./scenes/index";
import { theme, ThemeProvider } from "src/client/theme/index";
import { Provider } from "react-redux";
import store from "src/client/store/index";
import registerServiceWorker from "./registerServiceWorker";
import "./styles";
import { EN, StringsContext } from "./strings/index";

registerServiceWorker();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* TODO: should be filled dinamically based on browser language */}
    <StringsContext.Provider value={{ strings: EN }}>
      <Provider store={store}>
        <App />
      </Provider>
    </StringsContext.Provider>
  </ThemeProvider>,
  document.getElementById("root") as HTMLElement
);
