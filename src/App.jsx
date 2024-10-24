// import Dropdown from "./componets/Dropdown";
// import DropdownItem from "./componets/DropdownItem";
// import "./App.css";

// const item = [1, 2, 3, 4];

// function App() {
//   return (
//     <div className="App">
//       <div className="content">
//         <Dropdown
//           buttonText="Dropdown"
//           content={
//             <>
//               {ImInsertTemplate.map((item) => (
//                 <DropdownItem key={item}>{`item ${item}`}</DropdownItem>
//               ))}
//             </>
//           }
//         />
//         ;
//       </div>
//     </div>
//   );
// }

// export default App;
import React from "react";
import Stopwatch from "./Stopwatch";

const App = () => {
  return (
    <div>
      <Stopwatch />
    </div>
  );
};

export default App;
