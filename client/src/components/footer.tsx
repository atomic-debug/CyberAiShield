export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div className="text-lg font-bold text-white">RactorIX</div>
            <div className="text-xs text-gray-400">Atomic Solution</div>
          </div>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 RactorIX. All rights reserved. Revolutionizing IT management through AI-driven automation.
        </p>
      </div>
    </footer>
  );
}
