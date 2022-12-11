export const CarouselTemplateStyle = `
inline-block 
h-full 
after:absolute 
after:top-[25.2rem] 
after:right-[-1.8rem] 
after:z-[-10] 
after:block 
after:h-[0.25rem] 
after:w-[5.875rem] 
after:bg-primary 
last:after:hidden 
md:ml-[1.875rem]
md:after:top-[6.1rem] 
md:after:right-[-1.875rem] 
md:after:w-[12.625rem]
`

export const CarouselContainer = `
flex
max-w-full
mt-[3rem]
md:mt-[1.75rem]
`
export const Carousel = `
 overflow-hidden
 max-w-[1200px]
 flex
 md:justify-around
 bg-[#212948]
 h-[36.25rem]  
 py-[2rem]
 md:py-[0rem]
 md:h-[29.25rem]
 md:items-center
`

export const CarouselInner = `
whitespace-nowrap transition ease flex
`

export const ArrowContainer = `
hidden cursor-pointer lg:flex mr-[4.25rem]
`
export const CarouselItem = `
m-0 mr-[4rem] w-full md:mr-0 md:pl-[4rem] 
`

export const CarouselSlide = `
ease flex h-full w-full transition items-end
`
