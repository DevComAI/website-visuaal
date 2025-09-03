import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              Visuaal
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Votre agence digitale créative spécialisée dans la création de sites web, 
              le design UX/UI et le marketing digital. Transformons ensemble votre vision 
              en réalité digitale.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </Link>
              <Link 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                Instagram
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Produits</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/dooh" className="text-gray-300 hover:text-white transition-colors">
                  DOOH
                </Link>
              </li>
              <li>
                <Link href="/products/screen" className="text-gray-300 hover:text-white transition-colors">
                  Écrans Interactifs
                </Link>
              </li>
              <li>
                <Link href="/products/holo" className="text-gray-300 hover:text-white transition-colors">
                  Hologrammes
                </Link>
              </li>
              <li>
                <Link href="/products/studio" className="text-gray-300 hover:text-white transition-colors">
                  Studio de Création
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Nos Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Rue de la Digital</p>
              <p>75001 Paris, France</p>
              <p>+33 1 23 45 67 89</p>
              <p>contact@visuaal.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Visuaal. Tous droits réservés.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/legal/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/legal/politique-confidentialite" className="text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/legal/cgv" className="text-gray-400 hover:text-white transition-colors">
                CGV
              </Link>
              <Link href="/legal/conditions-utilisation" className="text-gray-400 hover:text-white transition-colors">
                Conditions d&apos;utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer