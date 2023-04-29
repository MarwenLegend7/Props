import './App.css';
import { Profile } from './profile/profile';
import cat from "./cat.jpg"
const App = () => {
  
  const fullname =  "Marwen Aouinti"
  const bio =  "Unknown"
  const profession =  "Student"
  const hundlename = (fullname) => {
    alert(`Profile name : ${fullname}`)
  }
  return (
    <div className='App' >
      <Profile fullname={fullname} bio={bio} profession={profession}  >
        <img style={{
          width: "300px",
          height:"300px"
        }} src={cat} alt="cat" />
        <div>
          <button type='button' onClick={()=>{hundlename(fullname)}} >Profile Name</button>
        </div>
      </Profile>
    </div>
  );
}

export default App;
