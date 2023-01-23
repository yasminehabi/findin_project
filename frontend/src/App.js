
//import './App.css';
import Customer from "./Components/Customer";
import Customers from "./Components/DelCustomer";
import AddCustomer from "./Components/AddCustomer";
import EditCustomer from "./Components/EditCustomer";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import UserAuth from "./Components/userAuth";
import AddUser from "./Components/AddUser";
import User from "./Components/User";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

         <header className="App-header">
             <Routes>

              <Route path="/userauth" element={<UserAuth/>}/>
              <Route path="/Customers" element={<Customers/>}/>
              <Route path="/Customer" element={<Customer/>}/>
              <Route path="/AddUser" element={<AddUser/>}/>
              <Route path="/EditCustomer/:id" element={<EditCustomer/>}/>
            
             </Routes>
        
            
            
        
         </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
