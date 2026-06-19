import { useState, useEffect } from "react";
import { styles } from "./Constants"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firestore'
import masterClassLogo from "./Asets/masterClassLogo.png"
import Header from "./Header";
import MenuNav from "./MenuNav";


export default function App() {
  const [search, setSearch] = useState("");
  const [isMenuNav, setIsMenuNav] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header setSearch={setSearch} setIsMenuNav={setIsMenuNav} setUser={setUser} />
      <MenuNav isMenuNav={isMenuNav} />
    </>

  );
}
