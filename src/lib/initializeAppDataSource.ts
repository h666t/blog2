import {AppDataSource} from '../data-source';


export const initializeAppDataSource = async () => {
  console.log(AppDataSource.isInitialized);
  if(!AppDataSource.isInitialized){
    return await AppDataSource.initialize()
  }
}
