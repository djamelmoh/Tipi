import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              À propos de TERRA
            </h1>
            <p className="text-xl text-green-100">
              Un cabinet d'expertise composé d'étudiants passionnés, apportant un regard neuf sur les enjeux de RSE pour
              les collectivités territoriales.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Notre Mission</h2>
              <p className="text-muted-foreground mb-6">
                Chez TERRA, notre mission est d'accompagner les collectivités territoriales dans leur transition vers
                des pratiques plus responsables et durables. En alliant notre expertise en immobilier et en numérique,
                nous proposons des solutions innovantes qui répondent aux enjeux environnementaux, sociaux et
                économiques actuels.
              </p>
              <p className="text-muted-foreground mb-6">
                Nous croyons fermement que les territoires ont un rôle crucial à jouer dans la lutte contre le
                changement climatique et dans l'amélioration de la qualité de vie des citoyens. C'est pourquoi nous nous
                engageons à fournir des conseils stratégiques et des outils numériques adaptés qui permettent aux
                collectivités de réduire leur empreinte carbone, d'optimiser leurs ressources et de renforcer leur
                attractivité.
              </p>
              <p className="text-muted-foreground">
                Notre approche combine rigueur analytique, créativité et pragmatisme pour développer des solutions sur
                mesure qui répondent aux besoins spécifiques de chaque territoire.
              </p>
            </div>
            <div className="relative">
              <div className="bg-green-50 rounded-2xl p-6 shadow-lg">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="L'équipe TERRA en réunion"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Notre Équipe</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Une équipe d'étudiants passionnés par le numérique et l'immobilier, apportant un regard neuf sur les
              enjeux de RSE.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Membre+${member}`}
                  alt={`Membre de l'équipe ${member}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">Nom Prénom</h3>
                  <p className="text-sm text-muted-foreground">Poste / Spécialité</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Nos Valeurs</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Les principes qui guident notre approche et notre travail au quotidien.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Nous cherchons constamment de nouvelles approches et solutions pour répondre aux défis des collectivités
                territoriales.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Responsabilité</h3>
              <p className="text-muted-foreground">
                Nous nous engageons à promouvoir des pratiques durables et responsables dans tous nos projets.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-muted-foreground">
                Nous croyons en la force du travail d'équipe et de la co-construction avec nos clients pour des
                résultats optimaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Travaillons ensemble</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Vous souhaitez en savoir plus sur notre approche ou discuter de vos projets ? N'hésitez pas à nous contacter
            pour échanger.
          </p>
          <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50">
            <Link href="/contact">
              Nous contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

