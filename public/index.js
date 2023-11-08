import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import { html } from "https://esm.sh/htm@3.1.1/react";
import menu from './data/menu.js';

const Logo = () => {
  return html`
    <div className="logo">
      <span className="logo--top">Cafe by Tyler</span>
    </div>
  `;
}

const Header = () => {
  return html`
    <header>
      <h1>
        <${Logo} />
        <div className="social-media-links">
          <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" aria-label="Instagram" title="Instagram">
            <span className="fab fa-instagram fa-fw"></span>
          </a>
        </div>
      </h1>
    </header>
  `;
}

const HeroBanner = ({ heading }) => {
  return html`
    <section className="hero-banner">
      <div className="hero-banner-image"></div>
      <div className="hero-banner-content">
        <h2>${heading}</h2>
      </div>
    </section>
  `;
}

const MenuList = ({ type }) => {
  return html`
    <div className="menu-list">
      ${[...menu].filter(menuItem => menuItem.type === type).map(menuItem => {
    return html`
          <div className="menu-item" key=${menuItem.id}>
            <span className="item-name">${menuItem.itemName}</span>
            <span className="price">${menuItem.price}</span>
          </div>
        `
  })}
    </div>
  `;
}

const Home = () => {
  return html`
    <React.Fragment>
      <${HeroBanner} heading="Menu" />
      <section className="main-content menu">
        <h3>Drinks</h3>
        <p className="menu-info"><span className="bold">Milk Selections:</span> Oat... and only oat</p>
        <p className="menu-info"><span className="bold">House Made Syrups:</span> Vanilla, <s>Pumpkin Spice</s></p>
        <p className="menu-info">✧: <span className="italics">house specialty</span></p>
        <h4>Coffee</h4>
        <${MenuList} type="Coffee" />
        <h4>Espresso</h4>
        <${MenuList} type="Espresso" />
        <h4>Tea</h4>
        <${MenuList} type="Tea" />
        <h4>Boozy</h4>
        <${MenuList} type="Boozy" />
      </section>
    </React.Fragment>
  `;
}

const Footer = () => {
  return html`
    <footer>
      <div className="coffee-shop-footer">
        <${Logo} />
        <div className="other">
          <div className="social-media-links">
            <a href="https://www.instagram.com/coffeeartbytyler" target="_blank" aria-label="Instagram" title="Instagram">
              <span className="fab fa-instagram fa-fw"></span>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="app-footer">Forked from <a href="https://autumnchris.github.io/portfolio" target="_blank">Autumn Bullard's</a> amazing <a href="https://github.com/autumnchris/multipage-coffee-shop-site-reactjs" target="_blank">coffee shop example</a>!</div>
    </footer>
  `;
}

const App = () => {
  return html`
      <${Header} />
      <main>
      <${Home} />
      </main>
      <${Footer} />
  `;
}

async function main() {
  ReactDOM.render(html`<${App} />`, document.body);
}

main();
