import Link from "next/link";
import classNames from "classnames";

type Props = {
  text: string;
  href: string;
  type?: "regular" | "danger";
}

export const ActionLink = (props: Props) => {
  const isDanger = props.type === "danger";

  return (
  <Link href={props.href} role="button" className={classNames("capitalize text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center m-10", isDanger ? "hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-10" : "hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800")}>
    {props.text}
      <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
  </Link>
  )
}