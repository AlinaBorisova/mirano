import {Header} from "./modules/Header/Header";
import {Footer} from "./modules/Footer/Footer";
import {Goods} from "./modules/Goods/Goods";
import {Filter} from "./modules/Filter/Filter";
import {Hero} from "./modules/Hero/Hero";
import {Subscribe} from "./modules/Subscribe/Subscribe";
import {Order} from "./modules/Order/Order";


export const App = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Filter />
      <Goods />
      <Subscribe />
    </main>
    <Footer />
    <Order />
  </>
)
