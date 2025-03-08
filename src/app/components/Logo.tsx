import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link className="flex items-center" href="/">
      <Image
        className="mr-2 size-12 p-2"
        src="/favicon.svg"
        alt="JM logo"
        width={300}
        height={300}
      />
    </Link>
  );
}
