import conf from '../config/Config'
import {Client, ID, Databases, Storage, Query} from 'appwrite'

export class Services{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);  
    }

    async createPost({title, slug, content, featuredImage,status, userId}){
        try{
           return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,
            }
        )
        }catch(error){
            console.log("Appwrite services :: createpost :: error",error);
        }
    }

    async updatePost(slug, {title, content, featuredImage,status}){
         try{
            return await this.databases.updateDocument(
              conf.appwriteDatabaseId,
              conf.appwriteCollectionId,
              slug,
              {
                title,
                content,
                featuredImage,
                status,
              }  
            )
         }catch(error){
            console.log("Appwrite services :: updatepost :: error",error);
         }
    }

    async deletePost(slug){
        try{
         await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,    
            slug
        )
          return true
        }catch(error){
            console.log("Appwrite services :: deletePost :: error",error);
            return false
        }
    }

    async getPost(slug){
        try{
           return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
           )
        }catch(error){
            console.log("Appwrite services :: getpost :: error",error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
            try{
               return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
               )
            }catch(error){
                console.log("Appwrite services :: getposts :: error",error);
                return false
            }
    }
     
    async uploadFile(file){
        try{
          return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
          )
        }catch(error){
            console.log("Appwrite services :: uploadFile :: error",error);
            return false
        }
    }

    async deleteFile(fileId){
        try{
           await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
           )
           return true
        }catch(error){
            console.log("Appwrite services :: deleteFile :: error",error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Services()
export default service