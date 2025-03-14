"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MapPin, Phone, Send, Check } from "lucide-react"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-800 py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-green-100">
              Discutons de vos projets et de comment TERRA peut vous accompagner dans votre démarche RSE.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <Check className="h-8 w-8 text-green-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
                    <p className="text-muted-foreground mb-6">
                      Merci pour votre message. Notre équipe vous contactera très prochainement.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Envoyer un autre message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">Prénom</Label>
                        <Input id="first-name" placeholder="Jean" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Nom</Label>
                        <Input id="last-name" placeholder="Dupont" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="jean.dupont@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organisation</Label>
                      <Input id="organization" placeholder="Nom de votre collectivité" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">Renseignement général</SelectItem>
                          <SelectItem value="project">Projet spécifique</SelectItem>
                          <SelectItem value="partnership">Partenariat</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Décrivez votre projet ou votre demande..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                      <Send className="mr-2 h-4 w-4" /> Envoyer le message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Nos coordonnées</h2>
                <p className="text-muted-foreground mb-6">
                  N'hésitez pas à nous contacter directement par téléphone ou par email, ou à venir nous rencontrer dans
                  nos bureaux.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-green-700 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Adresse</h3>
                      <p className="text-muted-foreground">123 Avenue des Territoires, 75000 Paris</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-700 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:contact@terra-expertise.fr" className="text-green-700 hover:underline">
                        contact@terra-expertise.fr
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-700 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Téléphone</h3>
                      <a href="tel:+33123456789" className="text-green-700 hover:underline">
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-4">Horaires d'ouverture</h2>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="text-muted-foreground">9h00 - 18h00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-muted-foreground">Sur rendez-vous</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-muted-foreground">Fermé</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-xl font-bold tracking-tight mb-4">Besoin d'une réponse rapide ?</h2>
                <p className="text-muted-foreground mb-4">
                  Pour toute demande urgente, n'hésitez pas à nous appeler directement. Notre équipe est disponible pour
                  vous répondre rapidement.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+33123456789">
                    <Phone className="mr-2 h-4 w-4" /> Appelez-nous maintenant
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Nous trouver</h2>
            <p className="text-muted-foreground mt-2">Venez nous rencontrer dans nos bureaux à Paris</p>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[400px]">
            <img
              src="/placeholder.svg?height=400&width=1200&text=Carte"
              alt="Carte de localisation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

