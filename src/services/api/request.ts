import { instance } from ".";

const getData = async (path: string, config? : any) => (await instance.get(path, config)).data;
const postData = async (path: string, arg : any, config? : any) => (await instance.post(path, arg, config)).data;
const deleteData = async (path: string) => (await instance.delete(path)).data;
const updateData = async (path: string, arg? : any) =>( await instance.put(path, arg)).data;

export { getData, postData, deleteData , updateData};
