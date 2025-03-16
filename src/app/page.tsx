'use server';



export default async function Home() {

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to My Next.js Application
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            This is a sample Next.js page with a counter.
          </p>
        </div>
      </div>
    </main>
  );
}