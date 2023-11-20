import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="bg-gray-700 px-4">
      <div className="h-screen text-center pt-14">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Facundo Guardia
        </h1>
        <h2 className="mb-4 font-extrabold tracking-tight leading-none text-green-500 text-xl">
          Frontend Developer
        </h2>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          Apasionado por la tecnología y el desarrollo web. Me encanta aprender
          cosas nuevas y poder aplicarlas en mis proyectos.
          <br />
          <br />
          Te dejo mis redes sociales para que puedas contactarme.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link
            href="https://www.facebook.com/facu.guardia.86/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-blue-600 hover:text-blue-600"
          >
            Facebook
          </Link>

          <Link
            href="https://www.instagram.com/facu_guardia/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-orange-500 hover:text-orange-500"
          >
            Instagram
          </Link>

          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-blue-400 hover:text-blue-400"
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/facuguardia"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-black"
          >
            Github
          </Link>

          <Link
            href="https://facuguardia.netlify.app/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-yellow-500 hover:text-yellow-500"
          >
            Proyectos
          </Link>

          <Link
            href="https://bit.ly/3yxOSR4"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border hover:border-green-500 hover:text-green-500"
          >
            Contacto
          </Link>
        </div>
      <div className="pt-16">
        <Footer />
      </div>
      </div>
    </section>
  );
}
