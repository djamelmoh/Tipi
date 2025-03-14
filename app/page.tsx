import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Leaf, Lightbulb, MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-900 to-green-700 py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">TERRA</h1>
              <p className="text-xl text-green-100 font-medium">
                Vos territoires, notre expertise, nos actions responsables
              </p>
              <p className="text-green-100 md:text-lg">
                Un cabinet d'expertise composé d'étudiants passionnés par le numérique et l'immobilier, apportant un
                regard neuf sur les enjeux de Responsabilité Sociale et Environnementale (RSE).
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
                  <Link href="/services">
                    Découvrir nos services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-green-800">
                  <Link href="/contact">Nous contacter</Link>
                </Button>
              </div>
            </div>
            <div className="relative lg:block hidden">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Illustration représentant la RSE et l'innovation territoriale"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Expertise */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Notre Expertise</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Nous allions solutions immobilières et innovations digitales pour réduire l'empreinte carbone, accompagner
              le changement et améliorer le bien-être au travail.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Building2 className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Solutions Immobilières</h3>
              <p className="text-muted-foreground">
                Optimisation des espaces sous-occupés et mutualisation des ressources immobilières pour les
                collectivités.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Leaf className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Responsabilité Environnementale</h3>
              <p className="text-muted-foreground">
                Réduction de l'empreinte carbone et développement de solutions durables pour les territoires.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <Lightbulb className="h-10 w-10 text-green-700 mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation Numérique</h3>
              <p className="text-muted-foreground">
                Développement d'outils digitaux sur mesure pour accompagner la transformation des collectivités.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Services */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Nos Offres de Service</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Des solutions complètes pour accompagner les collectivités territoriales dans leurs projets RSE.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-green-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Analyse & Conseil</h3>
              <p className="text-muted-foreground mb-4">
                Analyse approfondie et conseils stratégiques pour identifier de nouvelles perspectives sur vos projets.
              </p>
              <Link
                href="/services#analyse"
                className="text-green-700 font-medium hover:underline inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-green-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Lancement de Projet</h3>
              <p className="text-muted-foreground mb-4">
                Cadrage complet du projet, intégrant l'analyse initiale et la définition d'une solution numérique
                personnalisée.
              </p>
              <Link
                href="/services#lancement"
                className="text-green-700 font-medium hover:underline inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold text-green-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Équipe d'Exécution</h3>
              <p className="text-muted-foreground mb-4">
                Collaboration étroite avec vos agents pour déployer et gérer le projet jusqu'à sa réalisation.
              </p>
              <Link
                href="/services#execution"
                className="text-green-700 font-medium hover:underline inline-flex items-center"
              >
                En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'Usage */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                <MapPin className="mr-1 h-4 w-4" /> Département de L'Yonne
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Cas d'Usage : Ynnov'Tech</h2>
              <p className="text-muted-foreground mb-6">
                Pour répondre aux contraintes budgétaires, écologiques et aux mutations démographiques, nous avons
                développé pour le Département de L'Yonne l'application Ynnov'Tech.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Réservation de postes, d'équipements et de salles dans les espaces mutualisés</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mise en relation pour le covoiturage et optimisation des trajets via l'IA</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Centralisation des besoins via une application alimentée par l'IA</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/case-studies/yonne">
                  Découvrir le projet complet
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Application Ynnov'Tech pour le Département de l'Yonne"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Prêt à transformer votre territoire ?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos projets et découvrir comment TERRA peut vous accompagner dans votre
            démarche RSE et d'innovation territoriale.
          </p>
          <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
            <Link href="/contact">Prendre rendez-vous</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

