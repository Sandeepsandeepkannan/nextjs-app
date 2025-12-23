import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler=NextAuth({
    providers:[
         CredentialsProvider({name:"email",
            credentials:{ 
                username:{label:"Username",type:"text",placeholder:"name"},
                password:{label:"Password",type:"password"}
            }, async authorize(credentials) {
        const username = credentials?.username
        const password = credentials?.password

        if (username === "admin" && password === "123") {
          return { id: "1", name: "Admin", email: "admin@test.com" }
        }

        return null
}})]
})



export { handler as GET, handler as POST }