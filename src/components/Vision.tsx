/**
 * v0 by Vercel.
 * @see https://v0.dev/t/i5rAQ4DiGU2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <section className="w-full py-12 lg:py-24">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:gap-10 md:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision</h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            Our vision is to create a world where everyone has access to information and can connect with others.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-12 lg:grid-cols-3 lg:gap-0">
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 border-gray-200 dark:border-gray-800">
              <img
                alt="Circle"
                className="rounded-full"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
            </div>
            <div className="space-y-2 text-center">
              <div className="font-semibold">Vision One</div>
              <p className="text-sm text-gray-500 md:text-base/relaxed xl:text-sm/relaxed dark:text-gray-400">
                This is a description of our first vision. It's a bold and inspiring statement about what we aim to
                achieve.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 border-gray-200 dark:border-gray-800">
              <img
                alt="Circle"
                className="rounded-full"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
            </div>
            <div className="space-y-2 text-center">
              <div className="font-semibold">Vision Two</div>
              <p className="text-sm text-gray-500 md:text-base/relaxed xl:text-sm/relaxed dark:text-gray-400">
                This is a description of our second vision. It's a bold and inspiring statement about what we aim to
                achieve.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="rounded-full border border-gray-200 border-gray-200 dark:border-gray-800">
              <img
                alt="Circle"
                className="rounded-full"
                height="80"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "80/80",
                  objectFit: "cover",
                }}
                width="80"
              />
            </div>
            <div className="space-y-2 text-center">
              <div className="font-semibold">Vision Three</div>
              <p className="text-sm text-gray-500 md:text-base/relaxed xl:text-sm/relaxed dark:text-gray-400">
                This is a description of our third vision. It's a bold and inspiring statement about what we aim to
                achieve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}