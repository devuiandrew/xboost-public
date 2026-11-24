import { CategoryCard } from "./category-card";

export function CategoryList({ categoryList }) {
  return (
    <div className="mt-10 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
      {categoryList.map((item, index) => (
        <CategoryCard key={index} src={item.src} title={item.title} info={item.info} url={item.url} buttonText={item.buttonText} />
      ))}
    </div>
  );
}
