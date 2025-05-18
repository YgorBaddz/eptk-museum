import Link from "next/link";

const MenuItem = ({ href, label }) => (
  <li>
    <Link href={href}>
      <p className="text-lg lg:text-2xl font-semibold hover:text-[#ce7221] py-2 block transition duration-200 ease-in-out">
        {label}
      </p>
    </Link>
  </li>
);

export default MenuItem;
