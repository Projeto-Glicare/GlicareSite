type TypeCardProps = {
  tipo: string;
  children: React.ReactNode;
};

export default function TypeCard({ tipo, children }: TypeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
        {tipo}
      </h2>
      <div className="text-gray-800 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  );
}
