export default function Home() {
  return (
    <section className="flex justify-center relative w-full">
      <h1 className="absolute left-[9999px] w-px h-px overflow-hidden">
        Welcome to Cat Social Network
      </h1>
      <div className="w-[680px] h-[840px] bg-lightPink rounded-2.5xl"></div>
      <div className="absolute top-0 left-0 w-full h-[900px] bg-cover bg-no-repeat bg-[url(../../public/home-bg2x.png)]"></div>
    </section>
  );
}
