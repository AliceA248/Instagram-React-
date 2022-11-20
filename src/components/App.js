import ReactDOM from "react-dom";
import FundoMobile from "./FundoMobile";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Stories from "./Stories";

function Logo() {
    return (
        <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
        </div>
    )
}


function LogoMobile() {
    return (
        <div class="logo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
        </div>

    )
}

function InstagramMobile() {
    return (
        <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
        </div>

    )
}

function Pesquisa() {
    return (
        <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
        </div>

    )
}

function Icone() {
    return (
        <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>

    )
}

function IconeMobile() {
    return (
        <div class="icones-mobile">
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    )
}


export default function App() {
    return (
        <div class="app">
            <div class="navbar">
                <div class="container">
                    <Logo />
                    <LogoMobile />
                    <InstagramMobile />
                    <Pesquisa />
                    <Icone />
                    <IconeMobile />
                </div>
            </div>
            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>
                <Sidebar />
                <FundoMobile />
                </div>
            </div>

    )
}


const element = document.querySelector(".root");
ReactDOM.render(<App />, element);

