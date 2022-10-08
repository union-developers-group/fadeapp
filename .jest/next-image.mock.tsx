export const nextImageMock = jest.mock(
  "next/image",
  () =>
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function Image({src, alt}: any) {
          // eslint-disable-next-line @next/next/no-img-element
          return <img src={src} alt={alt} />
      }
)