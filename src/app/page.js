import Maincomponent from "src/app/components/maincomponent.js";
import CustomHeader from "src/app/components/customheader.js";
import initFirebase from "../../firebase/initfirebase";

export default function Home() {
  initFirebase();
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <CustomHeader />
      <div className="m-4"></div>
      <Maincomponent />
    </main>
  );
}
