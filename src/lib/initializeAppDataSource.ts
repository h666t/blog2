import {AppDataSource} from '../data-source';


export const initializeAppDataSource = async () => {
  if(!AppDataSource.isInitialized){
    return await AppDataSource.initialize()
  }
}
