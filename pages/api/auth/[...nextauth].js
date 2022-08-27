import NextAuth from 'next-auth/next';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID ,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google ") {
        return profile.email_verified 
      }
      return true // Do different verification for other providers that don't have `email_verified`
    },
  },
  pages: {
    // signIn: '/',
    signOut: '/',
    error: '/404', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  }
});