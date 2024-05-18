import Image from "next/image";
import { Profile } from "./components/mainpage/profile/profile";
// import wrapper from './store/store'
 function Home() {
  return (
    <main className="">
      <Profile></Profile>
    </main>
  );
}

export default Home