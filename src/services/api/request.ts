import { instance } from ".";
import { AxiosRequestConfig } from 'axios';

const getData = async (path: string, config?: AxiosRequestConfig) => (await instance.get(path, config)).data;
const postData = async <T>(path: string, arg: T, config?: AxiosRequestConfig) => (await instance.post(path, arg, config)).data;
const deleteData = async (path: string) => (await instance.delete(path)).data;
const updateData = async <T>(path: string, arg?: T) => (await instance.put(path, arg)).data;

export { getData, postData, deleteData, updateData };
