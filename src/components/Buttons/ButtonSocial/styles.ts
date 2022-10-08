export const ButtonSocialContainerStyle = `
flex 
flex-col 
items-center 
gap-4
`
export const ImgBoxStyle = `
relative
flex 
h-16 
w-16 
items-center 
justify-center 
rounded-full 
bg-primary 

transition-all
duration-300
ease-in-out

hover:scale-105

before:absolute
before:rounded-full
before:content-['']
before:w-0
before:h-0
before:transition-all
before:ease-in-out
before:duration-300

before:bg-black/30

hover:before:w-full
hover:before:h-full
hover:before:border-2
hover:before:border-primary
`
export const ImgStyle = `
max-w-[2.625rem]
h-auto
`
export const TextStyle = `
text-sm 
font-medium 
capitalize 
text-white
`
