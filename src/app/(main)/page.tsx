export default function HomePage() {
  return (
    <div className="flex flex-col relative">
      <section>
        <div className="mx-auto w-full container px-4 lg:px-20 flex flex-col pt-12 pb-24 md:py-20 items-center">
          <span className="flex w-full flex-col items-center justify-center text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:max-w-4xl text-balance">
              Web Dev Insights
            </h1>
            <p className="text-balance text-muted-foreground">
              Discover, explore, and engage with new perspectives and stories
              about development
            </p>
          </span>
        </div>
      </section>
    </div>
  );
}
