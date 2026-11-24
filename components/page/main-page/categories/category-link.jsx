import { Link } from "@/app/navigation";

export default function CategoryLink({ slug, children, className }) {
  return (
    <div className={className}>
      <Link
        href={`${slug}`}
        className="block w-full rounded-sm border border-transparent bg-boost-green px-4 py-2 text-center text-lg font-medium uppercase text-black hover:bg-black hover:text-boost-green active:border-boost-green 2xl:text-xl"
      >
        {children}
      </Link>
    </div>
  );
}
