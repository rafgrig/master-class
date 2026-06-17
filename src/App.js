import { useState } from "react";
import { styles } from "./Constants"
import masterClassLogo from "./Asets/masterClassLogo.png"
import Header from "./Header";
import MenuNav from "./MenuNav";


export default function App() {
  const [search, setSearch] = useState("");
  const [isMenuNav, setIsMenuNav] = useState(false)


  return (
    <>
      <Header setSearch={setSearch} setIsMenuNav={setIsMenuNav} />
      <MenuNav isMenuNav={isMenuNav} />
    </>

  );
}
