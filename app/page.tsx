export default function Home() {
  return (
   <div className="bg-[#F2F3F2] w-full h-screen flex flex-col items-center justify-center relative overflow-hidden">

      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute top-0 -left-28"></div>
      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute top-20 right-28"></div>
      <div className="w-64 bg-[#FEFEFF] rounded-full h-64 absolute bottom-0 left-28"></div>

      <h1 className="text-2xl text-[#FF694D] ">2025</h1>
      <h1 className="text-7xl text-[#FF694D] font-bold">You committed. A lot</h1>
      
      <h2 className="text-5xl text-[#FF694D] mt-12">Your development journey deserves recognition.</h2>

      <div className="flex">
      <input type="text" placeholder="Github Username" className="w-42 placeholder-[#D9D9D9] underline-offset-4  text-xl mt-18  border-b focus:border-b-2 border-[#FF694D] outline-none p-1" />
      <button></button>
      </div>
   </div>
  );
}
