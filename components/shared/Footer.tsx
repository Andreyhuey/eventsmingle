import Image from "next/image";
import { Link } from "next-view-transitions";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex flex-between flex-col gap-4 p-5 text-center md:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/favicon.ico"
            alt="logo"
            width={38}
            height={18}
          />
        </Link>
        <p>2024 EventsMingle. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
