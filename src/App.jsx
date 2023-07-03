import Header from "./components/Header"
import Formulario from "./components/Formulario"
import PatientList from "./components/PatientList"


function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header/>
     <Formulario/>
     <PatientList/>
    </div>
  )
}
export default App
