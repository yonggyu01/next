import Image from "next/image";
import { Profile } from "./components/mainpage/profile/profile";
import main from './style/mainpage.module.scss'
import Side from "./components/mainpage/side/side";
import Explorer from "./components/mainpage/explorer/explorer";
// import wrapper from './store/store'
 function Home() {
  return (
    <main className={main.gridwrap}>
      <Side></Side>
      <Explorer/>
      <Profile></Profile>
    </main>
  );
}

export default Home