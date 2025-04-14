import Link from "next/link";

const MenuItem = ({ href, label }) => (
  <li>
    <Link href={href}>
      <p className="text-lg hover:text-[#CF9056] py-2 block transition duration-200 ease-in-out">
        {label}
      </p>
    </Link>
  </li>
);

export default MenuItem;
