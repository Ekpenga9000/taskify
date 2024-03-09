import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <h1 className="text-6xl font-bold">Welcome to my Todo List</h1>
        <Image
          src="/todo-list.svg"
          alt="Todo List"
          width={300}
          height={300}
        />
      </header>
      <section>
        
       </section>
    </main>
  );
}
