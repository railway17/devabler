/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Menu from "./components/menu";
import Home from "./components/home";
/**
 * We can start our initial App here in the main.js file
 */
const App = () => {
  const [query, setQuery] = useState("");

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   *
   * @returns JSX
   * @memberof App
   */
  return (
    <div className="App">
      <Menu onSearch={(query) => setQuery(query)} />
      <Home searchQuery={query} />
    </div>
  );
};

// Render this out
const root = createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(<App />);
