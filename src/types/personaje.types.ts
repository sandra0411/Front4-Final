
export default interface Personaje  {

id: number;
name:string;
status?:string;
species?:string;
type?:string;
gender?:string;
origin?:{name:string; url:string;};
location?:{name:string};
image:string;
episode:string[];
url?:string;
created?:string;
key?: number; 

}