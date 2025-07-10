import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  return (
    <header className="bg-primary h-[70px]">
      <div className="mx-auto flex h-full w-9/10 items-center justify-between lg:w-5xl">
        <Link href="/" className="font-bold text-white lg:text-2xl">
          マイクラ募集掲示板
        </Link>
        <Link href="/account">
          <FontAwesomeIcon icon={faCircleUser} size="2xl" inverse />
        </Link>
      </div>
    </header>
  );
}
