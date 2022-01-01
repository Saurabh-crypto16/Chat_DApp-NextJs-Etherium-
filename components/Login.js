import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative ">
      {/*below css makes the images and button stand on top of background*/}
      <div
        className="flex flex-col absolute z-50 h-4/6 w-full items-center 
        justify-center space-y-4"
      >
        {/*Logo*/}
        <Image
          className="object-cover rounded-full"
          src="https://wallpaperaccess.com/full/1254627.jpg"
          height={175}
          width={175}
        />
        {/*Login Button*/}
        {/* In web 3 for login we have to send a req to metamask wallet and then
        it will authenticate by signing in */}
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-3 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
