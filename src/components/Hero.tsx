import { ArrowsLeftRight, Brain, Pill, Target, VideoCamera, type Icon } from "@phosphor-icons/react";
import type { CSSProperties } from "react";
import { clinic } from "../data/clinic";

/* O palco usa uma grade de 600 x 600. Cada posição abaixo é em "unidades" desse palco,
   então cartões e setas ficam alinhados em qualquer tamanho de tela. */
const pct = (v: number) => `${(v / 600) * 100}%`;
const pos = (x: number, y: number, w: number): CSSProperties => ({ left: pct(x), top: pct(y), width: pct(w) });

const cartoes: { texto: string; icone: Icon; x: number; y: number; w: number; atraso: string }[] = [
  { texto: "Terapia e avaliação neuropsicológica", icone: Brain, x: 0, y: 14, w: 196, atraso: "0.5s" },
  { texto: "Medicação explicada e acompanhada", icone: Pill, x: 404, y: 8, w: 196, atraso: "0.8s" },
  { texto: "Os dois conversam sobre o seu caso", icone: ArrowsLeftRight, x: 214, y: 26, w: 172, atraso: "1.1s" },
  { texto: "Diagnóstico mais claro", icone: Target, x: 0, y: 470, w: 150, atraso: "1.4s" },
  { texto: "Presencial e online", icone: VideoCamera, x: 450, y: 470, w: 150, atraso: "1.6s" },
];

export function Hero() {
  const [nelson, psiquiatra] = clinic.equipe;

  return (
    <section
      id="topo"
      className="container-site grid items-center gap-8 py-8 lg:min-h-[calc(100dvh_-_68px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 lg:py-[2dvh]"
    >
      <div>
        <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
          {clinic.hero.titulo}
        </h1>
        <p className="mt-6 max-w-[34rem] text-lg text-suave">{clinic.hero.apoio}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primario">
            {clinic.botao}
          </a>
          <a href="#equipe" className="btn btn-secundario">
            Conhecer a equipe
          </a>
        </div>
      </div>

      {/* No computador a largura do palco acompanha a altura da tela, para nada ficar cortado */}
      <div className="mx-auto w-full max-w-[620px] lg:max-w-[min(620px,calc(100dvh_-_68px_-_4dvh_-_70px))]">
        <div className="relative aspect-square w-full [container-type:inline-size]">
          {/* Fundo: círculo claro e um aro, para a camisa branca aparecer */}
          <div aria-hidden="true" className="absolute rounded-full bg-marca-claro" style={{ left: pct(36), top: pct(72), width: pct(528), height: pct(528) }} />
          <div aria-hidden="true" className="absolute rounded-full border-2 border-marca/25" style={{ left: pct(14), top: pct(96), width: pct(528), height: pct(528) }} />

          {/* As duas pessoas, coladas na base. O fim das fotos some suavemente. */}
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_88%,transparent)]">
            <img
              src={psiquiatra.recorte}
              alt={psiquiatra.fotoAlt}
              width={630}
              height={785}
              className="absolute bottom-0"
              style={{ left: pct(255), width: pct(342) }}
            />
            <img
              src={nelson.recorte}
              alt={nelson.fotoAlt}
              width={760}
              height={1083}
              {...({ fetchpriority: "high" } as Record<string, string>)}
              className="absolute bottom-0 drop-shadow-[0_14px_18px_rgba(26,34,39,0.22)]"
              style={{ left: pct(20), width: pct(340) }}
            />
          </div>

          {/* Setas e rabiscos (só no computador/tablet) */}
          <svg
            viewBox="0 0 600 600"
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            fill="none"
            stroke="#1F5A6E"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <defs>
              <marker id="ponta" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M1 1 L8 5 L1 9" stroke="#1F5A6E" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            {/* Terapia -> Nelson */}
            <path className="desenho" style={{ animationDelay: "0.7s" }} pathLength={1} d="M58 80 C34 140 78 208 124 240" markerEnd="url(#ponta)" />
            {/* Medicação -> Sérgio */}
            <path className="desenho" style={{ animationDelay: "1s" }} pathLength={1} d="M532 74 C578 130 540 204 498 240" markerEnd="url(#ponta)" />
            {/* Arco entre as duas cabeças, com ponta nas duas extremidades */}
            <path className="desenho" style={{ animationDelay: "1.3s" }} pathLength={1} d="M236 182 C272 118 360 118 396 222" markerStart="url(#ponta)" markerEnd="url(#ponta)" />
            {/* Rabisco sob o cartão do meio */}
            <path className="desenho" style={{ animationDelay: "1.6s" }} pathLength={1} d="M252 96 q8 -9 16 0 t16 0 t16 0 t16 0 t16 0 t16 0" strokeWidth="2.2" />
            {/* Linha tracejada cruzando os dois corpos */}
            <path className="desenho" style={{ animationDelay: "1.8s" }} d="M154 498 C232 566 372 566 446 502" strokeDasharray="2 9" markerStart="url(#ponta)" markerEnd="url(#ponta)" />
          </svg>

          {/* Cartões de benefícios (só no computador/tablet) */}
          {cartoes.map(({ texto, icone: Ic, x, y, w, atraso }) => (
            <p
              key={texto}
              className="cartao-flutua absolute hidden items-center gap-[1.4cqw] rounded-padrao bg-papel px-[2cqw] py-[1.7cqw] text-[clamp(11.5px,2.5cqw,15px)] font-medium leading-snug shadow-suave md:flex"
              style={{ ...pos(x, y, w), animationDelay: atraso }}
            >
              <Ic size="1.45em" weight="regular" aria-hidden="true" className="shrink-0 text-marca" />
              {texto}
            </p>
          ))}
        </div>

        {/* Nomes embaixo de cada pessoa */}
        <div className="mt-2 grid grid-cols-2 gap-4 text-sm md:mt-3">
          <p>
            <span className="block font-medium">{nelson.nome}</span>
            <span className="text-suave">{nelson.funcao}</span>
          </p>
          <p className="text-right">
            <span className="block font-medium">{psiquiatra.nome}</span>
            <span className="text-suave">{psiquiatra.funcao}</span>
          </p>
        </div>

        {/* No celular os cartões viram lista, sem setas */}
        <ul className="mt-6 grid gap-2 md:hidden">
          {cartoes.map(({ texto, icone: Ic }) => (
            <li key={texto} className="flex items-center gap-3 rounded-padrao border border-linha bg-papel px-4 py-3 text-[15px] font-medium">
              <Ic size={22} weight="regular" aria-hidden="true" className="shrink-0 text-marca" />
              {texto}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
