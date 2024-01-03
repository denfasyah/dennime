
import Link from "next/link";

const HeaderMenu = ({title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="flex items-center">
        <h1 className="mx-auto text-3xl my-12 text-White font-medium">
          {title}
        </h1>
        <Link href={linkHref} className="absolute lg:ml-28 ml-8 mt-20  hover:text-Purple underline">
        {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
