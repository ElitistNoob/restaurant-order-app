// Hooks
import GlobalStyle from "./Components/Styles/GlobalStyle";
import { useContext } from "react";
import { Helmet } from "react-helmet";
// Components
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Modal from "./Components/Modal";
// Context
import { Context } from "./Context";

function App() {
  const { isModalOpen } = useContext(Context);
  return (
    <>
      <Helmet>
        <title>My Diner App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200&family=Smythe&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>
        <Menu />
        <Order />
        {isModalOpen && <Modal />}
      </main>
    </>
  );
}

export default App;
