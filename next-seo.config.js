const title = 'Fadeapp - Seu Parceiro de atividade'
const description =
  'Construa seu shape sem atrapalhar a sua rotina. Seu treino personalizado, na palma da sua mão, a qualquer hora e lugar.'
const url = 'https://fadeapp.vercel.app/'

export const SEO = {
  title,
  description,
  canonical: url,
  openGraph: {
    type: 'website',
    locale: 'pt-BR',
    url: url,
    siteName: 'fadeapp',
    title,
    description,
    images: [
      {
        url: 'https://fadeapp.com/banner.jpg',
        alt: 'Banner fadeapp',
        largura: 850,
        altura: 425,
      },
    ],
  },
}
