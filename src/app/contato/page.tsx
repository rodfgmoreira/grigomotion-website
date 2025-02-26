import Link from "next/link";
import { Mail, Linkedin, Instagram, Image } from "lucide-react";

export default function Contatos() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-black mt-[-6rem] px-6 py-10">
      <h1 className="text-3xl font-bold text-center">
        Henrique Grigoletto - Editor de Vídeo e Motion Designer
      </h1>
      <p className="text-2xl font-normal text-center mb-6">grigomotion@gmail.com</p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="mailto:grigomotion@gmail.com"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Mail className="w-6 h-6 text-blue-500" />
          <span className="text-lg font-medium">Email</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/grigomotion/"
          target="_blank"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Linkedin className="w-6 h-6 text-blue-700" />
          <span className="text-lg font-medium">LinkedIn</span>
        </Link>

        <Link
          href="https://www.behance.net/grigomotion"
          target="_blank"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Image className="w-6 h-6 text-blue-600" />
          <span className="text-lg font-medium">Behance</span>
        </Link>

        <Link
          href="https://www.instagram.com/grigo.motion"
          target="_blank"
          className="flex items-center gap-3 bg-white dark:bg-gray-800 px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <Instagram className="w-6 h-6 text-pink-500" />
          <span className="text-lg font-medium">Instagram</span>
        </Link>
      </div>
    </main>
  );
}
