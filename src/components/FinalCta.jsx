import WhatsAppButton from './WhatsAppButton'

export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-14 px-5 pb-20">
      <div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 px-6 py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-lg text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Want a website that actually gets you customers?
        </h2>
        <p className="mt-3 text-blue-100">Message us — we reply fast.</p>
        <div className="mt-8">
          <WhatsAppButton variant="inverted" />
        </div>
      </div>
    </section>
  )
}
