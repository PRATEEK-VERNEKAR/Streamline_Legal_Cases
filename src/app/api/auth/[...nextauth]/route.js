import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

export const authOptions={
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials:{},

            async authorize(credentials){
                
                const {email,password}=credentials;
                
                try{
                    await connect();
                    const user=await User.findOne({email});

                    if(!user){
                        return null;
                    }

                    const passwordMatch=await bcrypt.compare(password,user.password);

                    if(!passwordMatch){
                        return null;
                    }
                    return user;
                }
                catch(err){
                    console.log(err);
                }
            }
        })
    ],

    session:{
        strategy:'jwt',
    },
    secret:process.env.NEXTAUTH_SECRET,
    pages:{
        signIn:"/login",
    },
};

const handler=NextAuth(authOptions);

export {handler as GET,handler as POST};