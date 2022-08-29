import { Button } from 'components/Button'


const img = '/background.png'

export const Hero = () => {
  return (
    <section
      role="hero"
      data-testid="background"
      className="flex h-[100vh] w-full flex-col items-start justify-center p-[2rem] bg-blend-overlay md:p-[9.375rem] "
      style={{
        background: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        objectFit: 'contain',
      }}
    >
      <div className="flex w-[27.75rem] flex-col items-center justify-center md:items-start md:justify-start  ">
        <p className="mb-5 text-center text-2xl font-normal text-white md:text-left ">
          Seu treino personalizado, na palma da sua mão, a qualquer hora e
          lugar.
        </p>

        <div className="flex flex-col last:items-center">
          <Button>EU QUERO</Button>
          <p className="mt-2 text-sm text-[#CBC8C8]">
            Experimente 7 dias Grátis
          </p>
        </div>
      </div>
    </section>
  )
}
