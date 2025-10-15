// 1. Elimina esta línea por completo
// import LazyLoad from 'react-lazyload';

import { lazy, Suspense } from 'react';

const Hero = lazy(() => import('./components/hero/Hero'));
const Services = lazy(() => import('./components/services/Services'));
const Portfolio = lazy(() => import('./components/portfolio/Portfolio'));
const Contact = lazy(() => import('./components/contact/Contact'));

const App = () => {
  return (
    <div className='container'>
      {/* 2. Deja solo Suspense. El componente Hero ya es "lazy" por definición. */}
      <Suspense fallback={'loading...'}>
        <section id='#home'>
          <Hero />
        </section>
      </Suspense>

      <Suspense fallback={'loading...'}>
        <section id='#services'>
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={'loading...'}>
        <Portfolio />
      </Suspense>

      <Suspense fallback={'loading...'}>
        <section id='#contact'>
          <Contact />
        </section>
      </Suspense>
    </div>
  );
};

export default App;
