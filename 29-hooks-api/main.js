import React,{useState,useEffect,useContext} from "react"
import ReactDOM from "react-dom"

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const ThemeContext = React.createContext(themes.light);

function Counter() {
   const theme = useContext(ThemeContext);
   const [num,update] = useState(0)

   useEffect(()=>{
      console.log("use effect")

       return (n)=>{
           console.log("use effect2")
       }
   })

   return (<div>
      <h1 style={{color:theme.background}}>{num}</h1>
      <button onClick={()=>update(num+1)}>+</button>
   </div>)
}

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Counter />
        </ThemeContext.Provider>
    );
}

ReactDOM.render(<Counter/>,document.querySelector("#app"))
