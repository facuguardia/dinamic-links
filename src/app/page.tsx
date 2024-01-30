import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="w-screen h-screen bg-custom-image bg-no-repeat bg-center px-4">
      <div className="py-8 lg:text-center">
        <h1 className="mb-4 text-4xl text-right lg:text-center font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
          Hola, soy Facu
        </h1>
        <h2 className="mb-4 font-extrabold tracking-tight leading-none text-green-500 text-xl text-right lg:text-center">
          Frontend Developer
        </h2>
        <p className="mb-8 text-lg text-right lg:text-center font-normal text-black lg:text-xl sm:px-16 lg:px-48">
          Mi enfoque es convertir ideas en experiencias digitales cautivadoras,
          garantizando resultados extraordinarios. Si buscas un arquitecto
          digital apasionado, estoy aquí para llevar tu visión al siguiente
          nivel. Hablemos sobre tu proyecto y demos vida a tus ideas...
          <br />
          <br />
          <strong>¡Convierte tu visión en realidad conmigo!</strong>
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
          <Link
            href="https://www.facebook.com/facu.guardia.86/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-black rounded-lg border border-black hover:border-blue-600 hover:text-blue-600 shadow-2xl"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Facebook
          </Link>

          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-black rounded-lg border border-black hover:border-blue-400 hover:text-blue-400"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/facuguardia"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-black rounded-lg border border-black hover:border-black"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Github
          </Link>

          <Link
            href="https://facu-dev.vercel.app/"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-black rounded-lg border border-black hover:border-yellow-500 hover:text-yellow-500"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Portfolio
          </Link>

          <Link
            href="https://bit.ly/wsp-dev"
            target="_blank"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-black rounded-lg border border-black hover:border-green-500 hover:text-green-500"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            WhatsApp
          </Link>
        </div>
        <div className="pt-10">
          <Footer />
        </div>
      </div>
    </section>
  );
}
