export default function Home() {
  return (
    <section className="mobile:hidden laptop:flex justify-center relative w-full laptop:visible">
      <h1 className="absolute left-[-9999px] w-px h-px overflow-hidden">
        Welcome to Cat Social Network
      </h1>
      <div className="w-full h-[840px] laptop:h-[768px] bg-lightPink rounded-2.5xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-full bg-contain scale-[1.1] laptop:scale-[1.07] bg-center bg-no-repeat bg-main"></div>
    </section>
  );
}
