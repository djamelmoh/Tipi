import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Calendar, Users, Building2 } from "lucide-react"

export default function YonneCaseStudyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full bg-green-700/30 px-3 py-1 text-sm font-medium text-white mb-6">
              <MapPin className="mr-1 h-4 w-4" /> Département de L'Yonne
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Ynnov'Tech : Optimisation des espaces et réduction de l'empreinte carbone
            </h1>
            <p className="text-xl text-green-100">
              Comment nous avons aidé le Département de l'Yonne à optimiser ses espaces sous-occupés et à réduire son
              empreinte carbone.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="container px-4 md:px-6 py-3 mx-auto">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/" className="hover:text-green-700 transition-colors">
              Accueil
            </Link>
            <span className="mx-2">/</span>
            <Link href="/case-studies" className="hover:text-green-700 transition-colors">
              Cas d'usage
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Département de l'Yonne</span>
          </div>
        </div>
      </div>

      {/* Contexte */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                Contexte
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Le défi du Département de l'Yonne</h2>
              <p className="text-muted-foreground mb-4">
                Le Département de l'Yonne faisait face à plusieurs défis majeurs :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>
                    Des contraintes budgétaires limitant les investissements dans de nouvelles infrastructures
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Des objectifs écologiques ambitieux nécessitant une réduction de l'empreinte carbone</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Des mutations démographiques et des changements dans les habitudes de travail</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Des espaces sous-occupés, notamment dans les collèges du département</span>
                </li>
              </ul>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Carte du Département de l'Yonne"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
              Notre Solution
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">L'application Ynnov'Tech</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous avons développé une solution innovante pour optimiser les espaces sous-occupés et réduire l'empreinte
              carbone du département.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Mutualisation des espaces</h3>
              <p className="text-muted-foreground">
                Transformation des espaces sous-occupés des collèges en espaces de travail pour les agents du
                département, plus proches de leur domicile.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Calendar className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Système de réservation</h3>
              <p className="text-muted-foreground">
                Plateforme permettant de réserver des postes, des équipements et des salles dans les espaces mutualisés.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Covoiturage intelligent</h3>
              <p className="text-muted-foreground">
                Mise en relation pour le covoiturage et optimisation des trajets via l'intelligence artificielle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interface de l'application Ynnov'Tech"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                Fonctionnalités
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Une application complète et intuitive</h2>
              <p className="text-muted-foreground mb-6">
                L'application Ynnov'Tech centralise tous les besoins résultant du changement via une interface alimentée
                par l'intelligence artificielle.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Réservation de postes, d'équipements et de salles en quelques clics</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mise en relation pour le covoiturage et optimisation des trajets</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Offre servicielle aux alentours ou dans le bâtiment</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Calcul du bilan carbone et personnalisation du profil utilisateur</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Reporting sur l'utilisation des espaces et scénarios futurs à l'aide de l'IA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
              Résultats
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Impact et bénéfices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Les résultats obtenus grâce à la mise en place de notre solution pour le Département de l'Yonne.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">-30%</div>
              <p className="text-muted-foreground">Réduction des émissions de CO2 liées aux déplacements</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">+25%</div>
              <p className="text-muted-foreground">Augmentation de la satisfaction des agents</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">40%</div>
              <p className="text-muted-foreground">Taux d'utilisation des espaces auparavant sous-occupés</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="text-4xl font-bold text-green-700 mb-2">15%</div>
              <p className="text-muted-foreground">Économies réalisées sur les coûts d'infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto bg-green-50 rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-green-200">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Portrait du responsable du projet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <blockquote className="text-lg italic text-muted-foreground mb-4">
                  "La solution proposée par TERRA a transformé notre approche de l'organisation du travail. Non
                  seulement nous avons réduit notre empreinte carbone, mais nous avons également amélioré le bien-être
                  de nos agents tout en optimisant l'utilisation de nos infrastructures existantes."
                </blockquote>
                <div className="font-medium">Nom du responsable</div>
                <div className="text-sm text-muted-foreground">Poste, Département de l'Yonne</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <Button asChild variant="outline" className="mb-4 sm:mb-0">
              <Link href="/case-studies">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux cas d'usage
              </Link>
            </Button>
            <Button asChild className="bg-green-700 hover:bg-green-800">
              <Link href="/contact">Discuter de votre projet</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

