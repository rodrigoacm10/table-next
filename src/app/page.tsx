import BoxLink from "@/components/box-link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl">Tabela interativa</h1>
      <BoxLink
        link="users"
        title="tabela de usuários"
        text="As informações que constam na tabela são: nome, email e última vez
          visto. E contém diversas funcionalidades"
      />
    </div>
  );
}
