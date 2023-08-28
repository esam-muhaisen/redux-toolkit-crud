import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { Provider } from "react-redux";
import Store from "../Store/Store";

export default function Root() {
  return (
    <Provider store={Store}>
      <div>
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </Provider>
  );
}
