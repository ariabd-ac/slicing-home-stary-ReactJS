import { About, ContactPerson, Detail, Footer, Hero, ImagePreview, Info, Services } from '.';
import './App.css';

function App() {
  return (
    <div className="container-landing">
      <Hero />
      <Info />
      <Services />
      <ContactPerson />
      <ImagePreview />
      <Detail />
      <About />
      <Footer />
    </div>
  );
}

export default App;
