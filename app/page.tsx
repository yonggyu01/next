import Image from "next/image";
import { Profile } from "./components/mainpage/profile/profile";
import { Skill } from "./components/mainpage/skill/Skill";

// import wrapper from './store/store'
 function Home() {
  return (
    <main className="">
      <Profile></Profile>
      <Skill></Skill>
    </main>
  );
}

export default Home