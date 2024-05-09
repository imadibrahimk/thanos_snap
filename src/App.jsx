import { useState } from "react";
import InfinityGauntlet from "react-thanos-snap";
import Card from "./Card";
import "./App.css";
import { Thanos } from "react-thanos";
// import { display } from "html2canvas/dist/types/css/property-descriptors/display";


function App() {
  const [snap, setSnap] = useState(false);

  return (
    <>

          {/* <Card/> */}
        {/* <div style={{ display: "flex" }}> */}
        <InfinityGauntlet snap={snap}>
          <Card />
        </InfinityGauntlet>

          {/* <Card /> */}

          {/* </div> */}
        
        {/* <div >

        </div> */}


      
      <div className="snapButton">
        <Thanos
          onSnap={() => setSnap(!snap)}
          onSnapReverse={() => setSnap(snap)}
        />
      </div>

    </>
  );
}

export default App;
