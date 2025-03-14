import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-green-100">
              Des solutions complètes pour accompagner les collectivités territoriales dans leurs projets RSE.
            </p>
          </div>
        </div>
      </section>

      {/* Analyse & Conseil */}
      <section id="analyse" className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                Service 1
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Analyse & Conseil</h2>
              <p className="text-muted-foreground mb-6">
                Notre service d'analyse et de conseil offre une évaluation approfondie de vos projets existants ou à
                venir, avec un focus particulier sur les aspects RSE et l'optimisation des ressources.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Analyse approfondie de vos infrastructures et pratiques actuelles</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Identification des opportunités d'optimisation et d'amélioration</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Recommandations stratégiques personnalisées</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Élaboration de feuilles de route adaptées à vos objectifs</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Service d'analyse et conseil"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lancement de Projet */}
      <section id="lancement" className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1 relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Service de lancement de projet"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                Service 2
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Lancement de Projet</h2>
              <p className="text-muted-foreground mb-6">
                Notre service de lancement de projet prend en charge le cadrage complet de votre initiative, de
                l'analyse initiale à la définition d'une solution numérique personnalisée.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Définition précise des objectifs et des indicateurs de performance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Conception de solutions numériques adaptées à vos besoins</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Planification détaillée des étapes de mise en œuvre</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mobilisation des ressources nécessaires au succès du projet</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe d'Exécution */}
      <section id="execution" className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                Service 3
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Équipe d'Exécution</h2>
              <p className="text-muted-foreground mb-6">
                Notre service d'équipe d'exécution assure une collaboration étroite avec vos agents internes pour
                déployer et gérer le projet jusqu'à sa réalisation complète.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Mise en place d'équipes mixtes avec vos agents internes</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Gestion de projet agile et adaptative</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Suivi opérationnel et reporting régulier</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Transfert de compétences pour assurer l'autonomie de vos équipes</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Demander un devis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Service d'équipe d'exécution"
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

