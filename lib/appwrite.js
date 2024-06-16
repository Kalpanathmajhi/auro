import { Avatars, Client } from 'react-native-appwrite';
import { Account,Databases } from 'react-native-appwrite';
import { ID } from 'react-native-appwrite';
import SignIn from '../app/(auth)/sign-in';
export const config = {
    endPoint: "https://cloud.appwrite.io/v1",
    platform: "com.kalpanath.kalpanathai",
    projectId: "666bf292002c159fe3e5",
    databaseId: "666bf49b000294efb44c",
    userCollectionId: "666bf4cd0038979a1cb9",
    videoCollectionId: "666bf5050002a9983271",
    storageId: "666bf81b00153e1d2028",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endPoint)
    .setProject(config.projectId)
    .setPlatform(config.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases()

export async function createUser(email, password, username) {
    try {
      const newAccount = await account.create(
        ID.unique(),
        email,
        password,
        username
      );
  
      if (!newAccount) throw Error;
  
      const avatarUrl = avatars.getInitials(username);
  
      await signIn(email, password);
  
      const newUser = await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        ID.unique(),
        {
          accountId: newAccount.$id,
          email: email,
          username: username,
          avatar: avatarUrl,
        }
      );
  
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  }
export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password)
        return session
    } catch (error) {
        throw new Error(error)
    }
}


