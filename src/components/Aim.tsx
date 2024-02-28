/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rDQAxuNky1d
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Aim() {
  return (
    <div className="flex bg-slate-600 items-center p-6">
      <div className=" p-10 rounded-lg bg-amber-50">
        <h4 className=" text-3xl text-red-600">Our aim</h4>
        <h2 className="text-7xl font-bold">Excellent Quality</h2>
        <h2 className="text-4xl">Products</h2>
        <p className="text-gray-500 text-2xl">
          Our aim is to supply the best quality products to our valued customers. 
          In order to satisfy our customers, 
          we distribute the highest quality products by utilizing the best available quality guidelines
        </p>
      </div>
      <img
        alt="Image"
        className=" pl-5 w-1/2 aspect-video rounded-lg overflow-hidden object-cover object-center"
        src="/washing.jpg"
        width="100%"
        height="100%"
      />
    </div>
  )
}