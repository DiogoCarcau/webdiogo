import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>React e Next.js</h1>
      <p>
        Seja Bem-Vindo à minha aplicação em React e Next.js,
        estas são algumas das tecnologias mais utilizadas
        e vou dar um cheirinho de como brilhar nestas tecnologias!
      </p>

      {/* Link para a página Counter */}
      <Link href="/counter">Ir para a página do count</Link>
    </>
  );
}
