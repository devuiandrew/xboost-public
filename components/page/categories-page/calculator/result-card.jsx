export const ResultCard = ({ value, description }) => {
  return (
    <div className="bg-boost-dark p-6 rounded-lg text-center ring ring-boost-green overflow-hidden">
      <p className="text-5xl font-bold text-boost-green mb-2">{value}</p>
      <p className="text-sm text-boost-light">{description}</p>
    </div>
  );
};
