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

