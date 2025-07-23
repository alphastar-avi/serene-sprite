import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen">
      <article className="max-w-4xl mx-auto px-4 py-20">
        <Link href="/blog" className="inline-flex items-center text-sage hover:text-sage/80 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        <header className="mb-12">
          <div className="text-sage mb-4">March 15, 2024</div>
          <h1 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">The Science Behind Mindful Breathing</h1>
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Mindful breathing practice"
              fill
              className="object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <div className="text-lg text-charcoal/80 leading-relaxed space-y-6">
            <p>
              In our fast-paced world, the simple act of breathing consciously has become a powerful tool for
              transformation. Recent scientific research has revealed the profound impact that mindful breathing can
              have on our nervous system, mental clarity, and overall well-being.
            </p>

            <h2 className="text-2xl font-serif text-charcoal mt-8 mb-4">The Physiology of Breath</h2>
            <p>
              When we breathe mindfully, we activate the parasympathetic nervous system—our body's natural relaxation
              response. This shift from the sympathetic "fight or flight" mode to the parasympathetic "rest and digest"
              state creates measurable changes in our physiology.
            </p>

            <p>
              Studies have shown that controlled breathing practices can lower cortisol levels, reduce blood pressure,
              and improve heart rate variability—a key marker of resilience and health.
            </p>

            <h2 className="text-2xl font-serif text-charcoal mt-8 mb-4">Simple Techniques to Get Started</h2>
            <p>
              Begin with the 4-7-8 technique: Inhale for 4 counts, hold for 7, and exhale for 8. This simple practice
              can be done anywhere and provides immediate calming effects.
            </p>

            <p>
              Remember, consistency is more important than perfection. Even five minutes of mindful breathing daily can
              create lasting positive changes in your life.
            </p>
          </div>
        </div>
      </article>
    </main>
  )
}
