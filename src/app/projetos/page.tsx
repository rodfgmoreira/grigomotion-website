export default function Projetos() {
  const projetos = [
    {
      nome: "AirBnB",
      descricao: "Um lugar que você vai amar viver - AIRBNB - Estudo",
      video: "/videos/AIRBNB.mp4",
    },
    {
      nome: "Monify",
      descricao: "Maratona 10.0 de After Effects do @levymotion",
      video: "/videos/MONIFY.mp4",
    },
    {
      nome: "Na cozinha",
      descricao: "Projeto de estudo feito na Maratona 9.0 de After Effects do @levymotion",
      video: "/videos/NA_COZINHA_FINAL.mp4",
    },
    {
      nome: "Apresentação Rodrigo Moreira",
      descricao: "Vídeo de apresentação de serviços @rodfgmoreira",
      video: "/videos/RODGUIN_SITE_VIDEO.mp4",
    },
    {
      nome: "Stages",
      descricao: "Vídeo publicitário para a marca @getstages",
      video: "/videos/STAGES_final.mp4",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-black py-10 px-5 md:px-20">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        Meus Projetos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {projeto.nome}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {projeto.descricao}
            </p>
            <video controls className="w-full mt-4 rounded-lg">
              <source src={projeto.video} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
        ))}
      </div>
    </main>
  );
}
