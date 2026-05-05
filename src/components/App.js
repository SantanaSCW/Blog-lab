import React, { useState } from "react";

function App() {
  // 1. ADD THIS STATE AT THE TOP OF THE FUNCTION
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    // 2. USE A TERNARY OPERATOR TO SWITCH THE CLASS NAME
    <div className={isDarkMode ? "App dark" : "App light"}>
      <header>
        <h1>My Blog / Shopping App</h1>
        
        {/* 3. ADD THIS BUTTON - THE TEXT MUST CHANGE DYNAMICALLY */}
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      
      {/* Rest of your components like <About /> or <ItemList /> */}
    </div>
  );
}

export default App;