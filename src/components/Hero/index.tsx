import { Button } from 'components/Button'


export const Hero = () => {
  return (
    <section
      role="hero"
      className="flex h-[100vh] w-full flex-col items-start justify-center p-[2rem] md:p-[9.375rem] "
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url('/background.png')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        objectFit: 'contain',
      }}
    >
      <div className="max-w-[27.75rem]">
        <p className="mb-5 text-2xl font-normal text-white">
          Seu treino personalizado, na palma da sua mão, a qualquer hora e
          lugar.
        </p>
        <div>
          <Button>EU QUERO</Button>
          <p className="mt-2 text-sm text-[#CBC8C8]">
            Experimente 7 dias Grátis
          </p>
        </div>
      </div>
    </section>
  )
}
