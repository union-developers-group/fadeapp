export const highlightContainerStyle = `
relative 
flex 
items-center 
justify-center 
w-full 
max-w-screen 
gap-20 
lg:gap-14 
xl:gap-32 
px-4 
sm:px-8 
py-[3.75rem] 
mx-auto 
flex-col 
lg:flex-row
lg:even:flex-row-reverse

after:content-[""] 
after:max-w-[55%]
after:absolute 
after:bg-primary 
after:bottom-0 
after:h-1 
after:w-3/5 
lg:after:w-4/5
after:even:left-0 
after:odd:right-0
after:last:hidden
`

export const imageContainerStyle = `
box-border 
flex 
justify-center 
items-center 
max-w-[80%]
lg:max-w-[50%] 
xl:max-w-full
`
export const imageStyle = `
w-full 
h-full
`
export const textContainerStyle = `
text-white 
text-center 
lg:text-left 
max-w-md 
flex-1
`
export const titleStyle = `
text-4xl 
sm:text-6xl 
lg:text-7xl 
mb-4 
sm:mb-6 
font-bold
`
export const textStyle = `
text-base
lg:text-lg
text-gray-300
`