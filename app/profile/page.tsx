import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Title, Divider, ActionLink } from "../components";

const getUser = async () => {
  const session = await getServerSession();

  if (!session) {
    return null;
  }

  return {
    user: {
      email: session.user?.email ?? "",
      name: session.user?.name ?? "",
      image: session.user?.image ?? "",
    },
  };
}

export default async function Profile() {
  const data = await getUser();

  if (!data) {
    redirect("/auth/login");
  }

  const { user } = data;

  return (
    <>
      <Title text="Profile" />
      <Divider />
      <div className="flex items-center mb-5">
        { /* eslint-disable-next-line @next/next/no-img-element*/ }
        <img className="w-10 h-10 rounded-full mr-3" src={user.image} alt="Avatar"></img>
        <p className="font-bold text-2xl">{user.name}</p>
      </div>
      <p className="font-mono text-md underline">{user.email}</p>

      <ActionLink type="danger" href="/auth/logout" text="Logout" />
    </>
  )
}
