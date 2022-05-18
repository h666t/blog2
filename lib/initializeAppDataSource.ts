import {AppDataSource} from '../src/data-source';

export const initializeAppDataSource = async () => {
  console.log("fuccccccccccccccccccccccccccccccck");
  if(AppDataSource && !AppDataSource.isInitialized){
    return await AppDataSource.initialize()
  }
}
