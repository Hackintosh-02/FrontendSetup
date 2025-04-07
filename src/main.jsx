import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "@/app/store";
import ToastProvider from "@/components/ui/toast/toast-provider";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
);
