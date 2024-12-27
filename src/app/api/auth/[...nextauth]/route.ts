import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { usersDB } from "../usersDb";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = usersDB.find((u) => u.email === credentials.email);
        if (!user) return null;
        console.log("idiosiojdf: " + usersDB);

        if (user.password !== credentials.password) {
          return null;
        }

        return {
          id: user.email,
          name: user.email,
          email: user.email,
          role: user.role || "user",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth",
    signOut: "/", 
    error: "/auth/error", 
    verifyRequest: "/auth/verify",
    newUser: "/welcome",
  },

  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
