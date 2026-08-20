export type WorkType = "recommended"|"focus"|"meeting"|"events"|"team";
export interface CoworkingSpace { id:string; name:string; image:string; price:string; categories:WorkType[]; }
export interface Plan { name:string; price:string; unit:string; description:string; features:string[]; featured?:boolean; }
export interface Event { day:string; month:string; name:string; category:string; image:string; }
