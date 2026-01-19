//src/pages/Home.page.tsx
import Example from "../components/Navbar.component";
import AddHours from "../components/AddHours.component";
import WorkedHours from "../components/WorkedHours.component";


export default function HomePage() {
  return (
    <>
    <Example/>
    <main className="min-h-screen bg-linear-to-b from-white to-gray-100">
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-12 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Home Page</h1>
          <p className="text-gray-600">Welcome to the Home Page!</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <AddHours/>
        <WorkedHours  />
      </section>
    </main>
    </>
  )
}