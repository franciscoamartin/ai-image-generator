import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md ">
      <div className="flex space-x-2 items-center">
        <Image
          src="/images/openai.png"
          alt="logo"
          height={30}
          width={30}
        />
      </div>
      <div>
        <h1>
          The best <span className="text-violet-500">AI</span> Image Generator
        </h1>
        <h2 className="font-bold">
          Powered by DALL-E 2, Chat GPT & Microsoft Azure
        </h2>
      </div>
      <div className="flex text-xs md:text-base divide-x items-center text-gray-500">
        <Link
          className="px-2 font-light text-right"
          href="https://github.com/franciscoamartin"
        >
          More Github projects
        </Link>
        <Link
          className="px-2 font-light text-right"
          href="https://github.com/franciscoamartin/ai-image-generator"
        >
          Github Repo
        </Link>
      </div>
    </header>
  );
}

export default Header;
