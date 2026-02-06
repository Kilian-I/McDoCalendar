//src/pages/Error.page.tsx

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl text-gray-600 mt-4">Oups ! Page introuvable.</p>
      
      <a 
        href="/" 
        className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
      >
        Retour à l'accueil
      </a>
    </div>
  );
};

export default ErrorPage;