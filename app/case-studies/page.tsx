import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Nos Cas d'Usage
            </h1>
            <p className="text-xl text-green-100">
              Découvrez comment nous avons aidé des collectivités territoriales à relever leurs défis RSE.
            </p>
          </div>
        </div>
      </section>

      {/* Cas d'Usage Principal */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                <MapPin className="mr-1 h-4 w-4" /> Département de L'Yonne
              </div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Ynnov'Tech : Optimisation des espaces et réduction de l'empreinte carbone
              </h2>
              <p className="text-muted-foreground mb-6">
                Pour répondre aux contraintes budgétaires, écologiques et aux mutations démographiques, nous avons
                développé pour le Département de L'Yonne l'application Ynnov'Tech qui accompagne notre recommandation
                visant à optimiser les espaces sous-occupés de la collectivité.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>
                    Mutualisation des espaces sous-occupés pour offrir des espaces de travail aux agents plus proches de
                    leur domicile
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Réduction significative de l'empreinte carbone du département</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Amélioration du bien-être des agents et de l'efficacité opérationnelle</span>
                </li>
              </ul>
              <Button asChild className="bg-green-700 hover:bg-green-800">
                <Link href="/case-studies/yonne">
                  Voir le cas d'usage complet
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

      {/* Autres Cas d'Usage */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Autres Réalisations</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Découvrez d'autres projets que nous avons menés pour des collectivités territoriales.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((caseStudy) => (
              <div
                key={caseStudy}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`/placeholder.svg?height=300&width=500&text=Cas+d'usage+${caseStudy}`}
                  alt={`Cas d'usage ${caseStudy}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 mb-3">
                    <MapPin className="mr-1 h-3 w-3" /> Collectivité
                  </div>
                  <h3 className="font-bold text-lg mb-2">Titre du projet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Description courte du projet et des résultats obtenus pour la collectivité territoriale.
                  </p>
                  <Link
                    href="#"
                    className="text-green-700 font-medium hover:underline inline-flex items-center text-sm"
                  >
                    En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Vous avez un projet similaire ?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos
            objectifs RSE.
          </p>
          <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

