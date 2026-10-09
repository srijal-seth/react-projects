import conf from "../conf/conf";
import { ID, Client, Query, Storage, TablesDB } from "appwrite";

class Service{

    client = new Client()
    databases
    bucket

    constructor(){
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);
        this.tablesDB = new TablesDB(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.tablesDB.createRow(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status, 
                    userId
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: CreatePost :: error", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.tablesDB.updateRow(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("AppWrite Service :: UpdatePost :: error", error)
        }
    }

    async deletePost(slug){
        try {
            return await this.tablesDB.deleteRow(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("AppWrite Service :: DeletePost :: error", error)
            return false
        }
    }
    
    async getPost(slug){
        try {
            return await this.tablesDB.getRow(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("AppWrite Services :: GetPost :: error", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal('status', 'active')]){
        try {
            return await this.tablesDB.listRows(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("AppWrite Service :: GetPosts :: error", error)
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.getFile(
                conf.appWriteBucketId,
                ID.unique,
                file
            )
            return true
        } catch (error) {
            console.log("AppWrite :: UploadFile :: error", error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                appWriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("AppWrite Services :: DeleteFiles :: error", error)
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.bucket.getFilePreview(
                conf.appWriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("AppWrite Service :: GetFilePreview :: error", error)
        }
    }
}


const service = new Service()

export default service