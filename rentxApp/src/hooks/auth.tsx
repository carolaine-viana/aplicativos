import React, {createContext, useState, useContext, ReactNode, useEffect} from 'react';
import api from '../services/api';
import {database} from '../database';
import {User as ModelUser} from '../database/model/User';

interface User {
    id: string; //watermelo
    user_id: string; //api
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    token: string;
}

interface SignInCredentials{
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    signIn: (credencials: SignInCredentials) => Promise<void>;
    signOut: () => Promise<void>;
    updatedUser: (user: User) => Promise<void>;
    loading: boolean;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({children}: AuthProviderProps){
    const [data, setData] = useState<User>({} as User);
    const [loading, setLoading] = useState(true)

    async function signIn({email, password}: SignInCredentials){
        try{
            const response = await api.post('/sessions', {
                email,
                password
            })
    
           //console.log(response.data); 
           const {token, user} = response.data;

           //colocar no header de todas as requisicoes um cabecalho
           //api.defaults.headers.authorization = `Bearer ${token}`;           
           api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

           const userCollection = database.get<ModelUser>('users');

           await database.write(async () => {
               await userCollection.create((newUser) => {
                    newUser.user_id = user.id, //o id igual o user de response.data
                    newUser.name = user.name,
                    newUser.email = user.email,
                    newUser.driver_license = user.driver_license,
                    newUser.avatar = user.avatar,
                    newUser.token = token
               })
           })
           setData({...user, token});

        }catch(error: any){
            throw new Error(error);
        }
        
    }

    async function signOut(){
        try{
            const userCollection = database.get<ModelUser>('users');
            await database.write(async () => {
                const userSelected = await userCollection.find(data.id) //id do banco
                await userSelected.destroyPermanently();
            });
            setData({} as User);

        }catch(error: any){
            throw new Error(error)
        }
    }

    async function updatedUser(user: User) {
        try {
          const userCollection = database.get<ModelUser>('users');
          await database.write(async () => {
            const userSelected = await userCollection.find(user.id);
            await userSelected.update(( userData ) => {
              userData.name = user.name,
              userData.driver_license = user.driver_license,
              userData.avatar = user.avatar
            });
          });
          setData(user);
        } catch (error: any) {      
          throw new Error(error);
        }
      }


    useEffect(() => {
        async function loadUserData() {
            const userCollection = database.get<ModelUser>('users');
            const response = await userCollection.query().fetch();
           
            if(response.length > 0) { //se o user ta logado
                const userData = response[0]._raw as unknown as User; //pego o 1 user logado
                api.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
                setData(userData)
                setLoading(false)
            }
            //console.log("usuario logado", response)
        }
        loadUserData();
    }, [])


    return (
        <AuthContext.Provider value={{user: data, signIn, signOut, updatedUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

function userAuth(): AuthContextData{
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider, userAuth};