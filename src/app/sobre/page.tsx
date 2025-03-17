export default function Sobre() {
    return (
        <main className="flex flex-col items-center justify-center bg-gray-100 dark:bg-black min-h-screen mt-[-6rem] px-6 py-12">
            <div className="max-w-3xl text-center">
                <h1 className="text-[72px] sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug break-words mt-20 sm:mt-12">
                    Henrique Grigoletto 
                    <span className="block sm:inline"> - Motion Designer</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed">
                    Aqui você pode conhecer melhor o meu trabalho, explorar meus projetos, acessar minhas redes sociais, entrar em contato comigo e descobrir um pouco mais sobre mim.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Atuo como <strong>Motion Designer</strong> há cerca de um ano e estou sempre em busca de evolução profissional — seja por meio de cursos, e-books, workshops ou eventos da área.
                </p>
                <p className="mt-4 text-lg leading-relaxed">
                    Estou disponível para contratações e freelas, com foco principal em animação 2D.
                </p>
            </div>
        </main>
    );
}
