import WhatsAppButton from './WhatsAppButton'

export default function FinalCta() {
  return (
    <section id="contact" className="scroll-mt-14 bg-blue-600 py-16">
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 className="mx-auto max-w-md text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Want a website that actually gets you customers?
        </h2>
        <div className="mt-7">
          <WhatsAppButton variant="inverted" />
        </div>
      </div>
    </section>
  )
}
