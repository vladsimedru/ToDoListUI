import { ITask } from "../task/task";

export interface IToDoList{
    id:number;
    name:string;
    tasks:ITask[];
}