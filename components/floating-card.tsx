export default function FloatingCard({
  className,
  title,
  data,
}: {
  className: string;
  title: string;
  data: string;
}) {
  return (
    <div className={`${className} rounded-2xl border-2 border-[#FF694D] p-6`}>
      <h1 className="text-center text-4xl tracking-tighter text-[#FF694D]">{title}</h1>
      <div className="text-center text-5xl tracking-tight text-[#FF694D]">{data}</div>
    </div>
  );
}
