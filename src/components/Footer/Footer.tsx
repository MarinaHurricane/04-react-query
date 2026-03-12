export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
      <p>Powered by the TMDB API</p>
      <p className="mt-1">
        Built by Maryna Ishchenko ·{" "}
        <a
          href="https://github.com/MarinaHurricane"
          className="underline hover:text-white"
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
