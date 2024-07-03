import { DataTable } from "@/components/data-table";
import { User, columns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users"
  );

  const data = await res.json();

  return data;
}

export default async function Page() {
  const data = await getUsers();

  return (
    <section className="py-20">
      <div className="container">
        {/* <Button variant="link">voltar</Button> */}
        {/* hover:underline underline-offset-4 */}
        <Link
          className=" flex items-center gap-2  hover:underline underline-offset-4  text-sm block mb-2"
          href="/"
        >
          <FaArrowLeft size={10} />
          voltar
        </Link>
        <h1 className="mb-6 text-3xl font-bold">All users</h1>
        <DataTable columns={columns} data={data} />
      </div>
    </section>
  );
}
