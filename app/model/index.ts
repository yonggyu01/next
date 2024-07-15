export interface config {
    name: string,
    description : string,
    navItems:{
        label : string,
        href : string
    }[]
}

export type Steemitdata ={
    blog : string,
    entry_id : number,
    comment : body,
    reblogged_on : string
}

export type SteemitResult = {
    id  : String,
    jsonrpc : string,
    result :[] 
}
export interface body {
    author : string
    body : string
    json_metadata : string
    title: string
    created: string
}

export type Imode =  "blog" | "vsc"

export interface sidebarlist {
    content : string,
    title : string,
    toggle? : boolean,
    action?:(value:boolean) => void,
    href:string
   
}
export type colortheme = 'light' | 'dark'
export interface filenames {
        title: string;
        src: React.JSX.Element;
        href : string;
    }

export type noticeboard ={
    userid : string,
    content : string,
    create? : string,
    id?:string
}

type noticeboardOptional = {
   readonly userid : string,
   readonly content : string,
   readonly create? : string,
    id?:string
}

export type Ifetch = {
    msg : string,
    data: noticeboard
}

type myna = Ifetch['msg']

type Options<T> = {
    [P in keyof T]? : T[P]
}

type myFetch = Options<Ifetch>

const yong:myFetch = {
    msg : 'hi'
} 

type Typename<T> =  T extends string 
? 'string' 
: T extends number
? 'number' 
: 'number' ;
