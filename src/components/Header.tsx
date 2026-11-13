import { clinic } from "../data/clinic";

const links = [
  { href: "#como-funciona", rotulo: "Como funciona" },
  { href: "#equipe", rotulo: "Equipe" },
  { href: "#atendimento", rotulo: "Atendimento" },
  { href: "#duvidas", rotulo: "Dúvidas" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-linha bg-fundo/90 backdrop-blur">
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        <a href="#topo" className="flex flex-col leading-tight">
          <span className="text-lg font-semibold tracking-tight">{clinic.marca}</span>
          <span className="hidden text-xs text-suave sm:block">Nelson Martínez e Dr. Sérgio</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-suave transition hover:text-marca">
              {l.rotulo}
            </a>
          ))}
        </nav>
        <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primario !px-5 !py-2.5 text-[15px]">
          {clinic.botao}
        </a>
      </div>
    </header>
  );
}
