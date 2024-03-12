export default function StarSVGComponent({ liked, ...props }: { liked: boolean } & React.SVGProps<SVGSVGElement>) {

  return (
    <>{
      liked
        ? <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          fill="currentColor"
          {...props}
        >
          <path
            className="fill-likeYellow stroke-black stroke-[.5]"
            d="m5.06 20.534 1.674-7.17.034-.148-.114-.099-5.566-4.822 7.332-.634.15-.013.058-.139L11.5.744l2.872 6.764.059.138.15.013 7.33.635-5.565 4.822-.114.099.034.147 1.674 7.17-6.31-3.806-.13-.078-.13.078-6.31 3.808Z"
          />
        </svg>
        : <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          {...props}
        >
          <path
            fill="#404040"
            d="m6.906 17.995 4.594-2.771 4.594 2.807-1.203-5.25 4.047-3.5-5.323-.474L11.5 3.85 9.386 8.771l-5.323.474 4.046 3.536-1.203 5.214Zm-2.224 3.06 1.809-7.749L.478 8.097l7.92-.685L11.5.104l3.102 7.306 7.919.686-6.012 5.209 1.809 7.748L11.5 16.94l-6.818 4.114Z"
          />
        </svg>
    }</>
  )
}