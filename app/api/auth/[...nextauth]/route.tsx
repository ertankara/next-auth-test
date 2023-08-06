import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_LOGIN_ID ?? "",
      clientSecret: process.env.GOOGLE_LOGIN_SECRET ?? "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        }
      }
    }),
  ],
  pages: {
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
