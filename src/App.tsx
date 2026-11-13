import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import {
  Atendimento,
  Confianca,
  Equipe,
  Faq,
  Final,
  Passos,
  Problema,
  Rodape,
  Tratamos,
} from "./components/Secoes";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Confianca />
        <Problema />
        <Passos />
        <Equipe />
        <Tratamos />
        <Atendimento />
        <Faq />
        <Final />
      </main>
      <Rodape />
    </>
  );
}
