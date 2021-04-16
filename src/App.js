
import React, { createContext } from 'react';
// import HookCounterChangetittle from "./03_useEffect/02_useEffect订阅和取消订阅"

// import MultiEffectHookDemo from "./03_useEffect/03_useEffect一起使用"

// import ContextHookDemo from "./04_useContext/01_useContext的使用"
import Home from "./05_useReducer/home"


export const UserContext = createContext();
export const ThemeContext = createContext();


function App() {
 
  return (
    <div className="App">
      {/* <HookCounterChangetittle></HookCounterChangetittle> */}
      {/* <MultiEffectHookDemo></MultiEffectHookDemo> */}

      {/* <UserContext.Provider value={{name:"11",age:"18"}}> 
        <ThemeContext.Provider value={{fontSize:"18px"}}>
        <ContextHookDemo></ContextHookDemo>
        </ThemeContext.Provider>

      </UserContext.Provider> */}

      <Home></Home>
      
    </div>
  );
}

export default App;
