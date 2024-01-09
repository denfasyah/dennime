
import Link from "next/link";

const HeaderSection = ({title, linkHref, linkTitle }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="lg:container lg:text-2xl md:text-2xl sm:text-xl text-lg  ml-10 mb-8 mt-10 text-White font-medium">
          {title}
        </h1>
        <Link href={linkHref} className="text-xs mt-3 mr-10 lg:mr-28 underline hover:text-Purple">
        {linkTitle}
        </Link>
      </div>
    </div>
  );
};

export default HeaderSection;
