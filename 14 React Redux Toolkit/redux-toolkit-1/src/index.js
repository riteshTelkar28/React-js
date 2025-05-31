import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import SlideBarLeft from "./components/SliderBarLeft";
import SlideBarRight from "./components/SlideBarRight";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from './store/store';

function MyComponent() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Header />
        </div>
        <div style={{ height: "420px" }}>
          <SlideBarLeft />
          <SlideBarRight />
        </div>
        <div>
          <Footer />
        </div>
      </Provider>
    </>
  );
}

createRoot(document.getElementById("root")).render(<MyComponent />);
