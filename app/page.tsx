export default function Home() {
  return (
    <div className="mx-auto flex min-h-[calc(100dvh---spacing(18))] w-full gap-4 lg:w-5xl">
      <div className="bg-base-color border-border grow lg:border-x">
        <div className="flex items-center justify-between p-4">
          <h1 className="text-xl font-bold lg:text-3xl">掲示板</h1>
          <button className="text-primary border-primary h-8 rounded-full border px-4 font-bold lg:hidden">
            投稿をフィルタ
          </button>
        </div>
      </div>
      <div className="bg-base-color border-border hidden w-2xs p-4 lg:block lg:border-x"></div>
    </div>
  );
}
