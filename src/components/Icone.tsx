import {
  ArrowsLeftRight,
  ChatCircleText,
  Chats,
  ClipboardText,
  Compass,
  MapPin,
  Pill,
  Stethoscope,
  Translate,
  VideoCamera,
  Wallet,
  type IconProps,
} from "@phosphor-icons/react";

const mapa = {
  ArrowsLeftRight,
  ChatCircleText,
  Chats,
  ClipboardText,
  Compass,
  MapPin,
  Pill,
  Stethoscope,
  Translate,
  VideoCamera,
  Wallet,
};

export type NomeIcone = keyof typeof mapa;

export function Icone({ nome, ...props }: { nome: string } & IconProps) {
  const Comp = mapa[nome as NomeIcone];
  if (!Comp) return null;
  return <Comp weight="regular" aria-hidden="true" {...props} />;
}
