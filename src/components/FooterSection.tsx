import Link from "next/link";

const FooterSection = ({
  title,
  items,
}: {
  title: string;
  items: { title: string; link: string }[];
}) => (
  <div>
    <h3 className="text-24 font-semibold mb-4 text-white-100 font-display">
      {title}
    </h3>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item.title}>
          <Link
            href={item.link}
            className="hover:text-white-800 capitalize text-white-100 font-inter text-16 font-normal  "
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterSection;
