import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
        <Image
      src="/images/logo.png"
      width={100}
      height={100}
      alt="Picture of the author"
      className="mx-auto rounded-full"
    />
        </Link>
      </p>
    </header>
  );
}
