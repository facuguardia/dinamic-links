import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <section className="flex items-center justify-center w-screen h-screen px-4 bg-center bg-no-repeat bg-custom-image">
      <div className="py-8 lg:text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-right text-gray-900 lg:text-center md:text-5xl lg:text-6xl">
          Hola, soy Facu
        </h1>
        <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-right text-green-500 lg:text-center">
          Frontend Developer
        </h2>
        <p className="mb-8 text-lg font-normal text-right text-black lg:text-center lg:text-xl sm:px-16 lg:px-48">
          Mi enfoque es convertir ideas en experiencias digitales cautivadoras,
          garantizando resultados extraordinarios. Si buscas un arquitecto
          digital apasionado, estoy aquí para llevar tu visión al siguiente
          nivel. Hablemos sobre tu proyecto y demos vida a tus ideas...
          <br />
          <br />
          <strong>¡Convierte tu visión en realidad conmigo!</strong>
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="https://www.facebook.com/facu.guardia.86/"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black bg-white border border-black rounded-lg shadow-2xl hover:border-blue-600 hover:text-blue-600"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Facebook
          </Link>

          <Link
            href="https://www.linkedin.com/in/facu-guardia/"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black bg-white border border-black rounded-lg hover:border-blue-400 hover:text-blue-400"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            LinkedIn
          </Link>

          <Link
            href="https://github.com/facuguardia"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black bg-white border border-black rounded-lg hover:border-gray-500 hover:text-gray-500"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Github
          </Link>

          <Link
            href="https://facu-dev.vercel.app/"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black bg-white border border-black rounded-lg hover:border-yellow-500 hover:text-yellow-500"
            style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)" }}
          >
            Portfolio
          </Link>

          <Link
            href="https://bit.ly/wsp-dev"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-bold text-center text-black bg-white border border-black rounded-lg hover:border-green-500 hover:text-green-500"
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
