import { UserCircle } from "@phosphor-icons/react";

type Props = { src: string; alt: string; className?: string; prioridade?: boolean };

// Se ainda não há foto (src vazio), mostra um espaço reservado bem marcado.
export function Foto({ src, alt, className = "", prioridade = false }: Props) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center gap-2 rounded-padrao border border-dashed border-marca/40 bg-marca-claro text-marca ${className}`}
      >
        <UserCircle size={48} weight="light" aria-hidden="true" />
        <span className="px-3 text-center text-sm">Foto em breve</span>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      width={960}
      height={1280}
      loading={prioridade ? "eager" : "lazy"}
      {...({ fetchpriority: prioridade ? "high" : "auto" } as Record<string, string>)}
      className={`rounded-padrao object-cover object-top shadow-suave ${className}`}
    />
  );
}
