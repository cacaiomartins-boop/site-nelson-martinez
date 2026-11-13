import { CaretDown, Star } from "@phosphor-icons/react";
import { clinic } from "../data/clinic";
import { Foto } from "./Foto";
import { Icone } from "./Icone";

/* Faixa logo abaixo do hero: linhas separadas por divisórias, sem cartões */
export function Confianca() {
  const itens = [
    { forte: `${clinic.nota} no Doctoralia`, fraco: `${clinic.opinioes} opiniões de pacientes`, estrela: true },
    { forte: "CRP 12/25608", fraco: "Psicólogo e neuropsicólogo" },
    { forte: "Presencial e online", fraco: "Balneário Camboriú e todo o Brasil" },
    { forte: "3 idiomas", fraco: "Português, espanhol e italiano" },
  ];
  return (
    <section aria-label="Credenciais" className="border-y border-linha bg-papel">
      <div className="container-site grid grid-cols-2 gap-y-6 py-7 md:grid-cols-4 md:divide-x md:divide-linha">
        {itens.map((i) => (
          <div key={i.forte} className="md:px-6 md:first:pl-0 md:last:pr-0">
            <p className="flex items-center gap-1.5 font-medium">
              {i.estrela && <Star size={18} weight="fill" className="text-marca" aria-hidden="true" />}
              {i.forte}
            </p>
            <p className="text-sm text-suave">{i.fraco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Texto grande + lista em linhas */
export function Problema() {
  const { titulo, itens } = clinic.problema;
  return (
    <section className="tela container-site py-14 lg:py-[4dvh]">
      <h2 className="titulo-secao max-w-[22ch] md:max-w-[26ch]">{titulo}</h2>
      <ul className="mt-8 divide-y divide-linha border-y border-linha lg:mt-[4dvh]">
        {itens.map((i) => (
          <li key={i.titulo} className="grid gap-2 py-5 md:grid-cols-[2rem_1fr_1.4fr] md:items-center md:gap-8 lg:py-[2.4dvh]">
            <Icone nome={i.icone} size={28} className="text-marca" />
            <h3 className="text-xl font-medium">{i.titulo}</h3>
            <p className="text-suave">{i.texto}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* Título fixo à esquerda e passos à direita */
export function Passos() {
  return (
    <section id="como-funciona" className="tela bg-marca-claro py-14 lg:py-[4dvh]">
      <div className="container-site grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <div className="md:self-center">
          <h2 className="titulo-secao">Um caminho só, com os dois profissionais</h2>
          <p className="mt-5 max-w-[30rem] text-suave">
            Você não precisa descobrir sozinho a quem recorrer primeiro. Nós organizamos o caminho.
          </p>
          <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primario mt-8">
            {clinic.botao}
          </a>
        </div>
        <ol className="space-y-6 lg:space-y-[3dvh]">
          {clinic.passos.map((p) => (
            <li key={p.titulo} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-papel text-marca shadow-suave">
                <Icone nome={p.icone} size={24} />
              </span>
              <div>
                <h3 className="text-xl font-medium">{p.titulo}</h3>
                <p className="mt-1 text-suave">{p.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Dois perfis lado a lado, foto + texto */
export function Equipe() {
  return (
    <section id="equipe" className="tela container-site py-14 lg:py-[4dvh]">
      <h2 className="titulo-secao">Quem cuida de você</h2>
      <div className="mt-8 grid gap-12 lg:mt-[4dvh] lg:grid-cols-2 lg:gap-10">
        {clinic.equipe.map((m) => (
          <article key={m.id} className="grid items-start gap-5 sm:grid-cols-[auto_1fr] sm:gap-6">
            <Foto src={m.foto} alt={m.fotoAlt} className="aspect-[4/5] w-[min(240px,28dvh)] min-w-[140px] lg:max-xl:w-[150px] lg:max-xl:min-w-0" />
            <div>
              <h3 className="text-xl font-semibold leading-tight xl:text-2xl">{m.nome}</h3>
              <p className="mt-1 text-marca">{m.funcao}</p>
              {m.registro && <p className="text-sm text-suave">{m.registro}</p>}
              <p className="mt-3 text-[15px] text-suave xl:text-[16px]">{m.texto}</p>
              <ul className="mt-3 space-y-1.5 border-t border-linha pt-3 text-[14px] xl:text-[15px]">
                {m.pontos.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marca" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* Lista corrida de temas */
export function Tratamos() {
  return (
    <section className="tela border-y border-linha bg-papel py-14 lg:py-[4dvh]">
      <div className="container-site">
        <h2 className="titulo-secao max-w-[24ch]">O que tratamos</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {clinic.tratamos.map((t) => (
            <li key={t} className="rounded-full border border-linha bg-fundo px-5 py-2.5 text-[16px]">
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[40rem] text-suave">
          Não achou o seu caso? Conte pelo WhatsApp e dizemos se podemos ajudar.
        </p>
      </div>
    </section>
  );
}

/* Dados à esquerda; fachada e mapa à direita, numa altura que cabe na tela */
export function Atendimento() {
  return (
    <section id="atendimento" className="tela container-site py-14 lg:py-[4dvh]">
      <h2 className="titulo-secao">Onde e como atendemos</h2>
      <div className="mt-8 grid gap-10 lg:mt-[4dvh] lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {clinic.atendimento.map((a) => (
              <li key={a.titulo}>
                <Icone nome={a.icone} size={28} className="text-marca" />
                <h3 className="mt-2 font-medium">{a.titulo}</h3>
                <p className="text-[15px] text-suave">{a.texto}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-linha pt-5">
            <p className="font-medium">Consultório em Balneário Camboriú</p>
            <p className="text-suave">
              {clinic.endereco.linha1}
              <br />
              {clinic.endereco.linha2}
            </p>
          </div>
        </div>
        <div className="grid gap-4 lg:h-[min(420px,54dvh)] lg:grid-rows-[auto_1fr]">
          <img
            src="/img/fachada.jpg"
            alt="Fachada do edifício do consultório, na Rua 3300, em Balneário Camboriú"
            loading="lazy"
            width={714}
            height={1258}
            className="h-40 w-full rounded-padrao object-cover object-[50%_46%] lg:h-[min(150px,19dvh)]"
          />
          <iframe
            title="Mapa do consultório"
            src={clinic.endereco.mapa}
            loading="lazy"
            className="h-64 w-full rounded-padrao border border-linha lg:h-full lg:min-h-0"
          />
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="duvidas" className="tela bg-marca-claro py-14 lg:py-[4dvh]">
      <div className="container-site grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
        <h2 className="titulo-secao">Dúvidas frequentes</h2>
        <div className="divide-y divide-marca/15 border-y border-marca/15">
          {clinic.faq.map((f) => (
            <details key={f.p} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium">
                {f.p}
                <CaretDown size={20} aria-hidden="true" className="shrink-0 text-marca transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 max-w-[60ch] text-suave">{f.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Chamada final: junto com o rodapé ocupa uma tela */
export function Final() {
  return (
    <section className="container-site flex flex-col items-center justify-center py-16 text-center lg:min-h-[calc(100dvh_-_68px_-_190px)] lg:py-[4dvh]">
      <h2 className="titulo-secao max-w-[20ch]">Comece pela primeira consulta</h2>
      <p className="mt-5 max-w-[34rem] text-suave">
        Fale com a gente pelo WhatsApp e combine o melhor horário, presencial ou online.
      </p>
      <a href={clinic.whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primario mt-8">
        {clinic.botao}
      </a>
    </section>
  );
}

export function Rodape() {
  return (
    <footer className="border-t border-linha bg-papel">
      <div className="container-site grid gap-8 py-10 text-[15px] md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold">{clinic.marca}</p>
          <p className="mt-1 text-suave">Nelson Martínez, CRP 12/25608</p>
          <p className="text-suave">Dr. Sérgio, psiquiatra</p>
        </div>
        <div className="text-suave">
          <p>{clinic.endereco.linha1}</p>
          <p>{clinic.endereco.linha2}</p>
          <p className="mt-2">WhatsApp {clinic.telefoneExibido}</p>
        </div>
        <p className="text-suave">{clinic.aviso}</p>
      </div>
    </footer>
  );
}
