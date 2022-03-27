import {AppDataSource} from '../src/data-source';

export const initializeAppDataSource = async () => {
  if(!AppDataSource.isInitialized){
    return await AppDataSource.initialize()
  }
}
