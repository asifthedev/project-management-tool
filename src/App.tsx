function App() {
  return (
    <>
      <main className="flex h-screen gap-14">
        <section id="sidebar" className="bg-[#100e0c] w-1/4 p-10">
          <h1 className="text-white font-medium text-2xl mb-4">
            Your Projects
          </h1>
          <button className="text-white font-normal py-1.5 px-3.5 rounded bg-[#322e2a]">
            + Add Project
          </button>
        </section>
        <section id="main" className="bg-white"></section>
      </main>
    </>
  );
}

export default App;
