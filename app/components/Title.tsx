type Props = {
  text: string;
}

export const Title = (props: Props) => {
  return (
    <h1 className="capitalize mb-4 text-4xl font-extrabold leading-none text-center tracking-tight text-gray-900 md:text-5xl lg:text-6xl">{props.text}</h1>
  )
}
