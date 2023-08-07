import { ReactNode } from "react"

type Props = {
  children: ReactNode;
};

export const PageContainer = (props: Props) => {
  return (
    <main className="mx-auto flex justify-center items-center flex-col my-auto max-w-[400px] p-2 relative top-20">
      {props.children}
    </main>
  )
}