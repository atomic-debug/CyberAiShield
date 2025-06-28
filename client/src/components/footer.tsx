export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className="text-gray-500 text-sm">
          © 2024 RactorIX
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms</a>
        </div>
      </div>
    </footer>
  );
}
