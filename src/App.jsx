import React from 'react';
import countapi from "countapi-js";

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import { About, Banner, Community, Faq, Footer, Header, Join, Pricing, Workouts } from "./components"

const App = () => {
  const [visitors,setVisitors] = useState(0)

  countapi.visits("global").then((result) => {
    setVisitors(result.value);
  });
  // aos initialization
  Aos.init({
    duration:2500,
    delay:400
  })
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer visitors ={visitors}/>
    </div>
  );
};

export default App;
