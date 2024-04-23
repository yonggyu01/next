import { config } from "../model"


export const siteConfig:config = {
	name: "new_nextproject",
	description: "넥스트로 만든 블로그와 기술면접 준비페이지",
	navItems: [
		{
			label: "AboutMe",
			href: "/",
		},
        {
            label : "Timeline",
            href: ""
        },
        {
            label : "Interview",
            href: "/interview"
        },
        {
            label : "Blog",
            href: "/blog"
        }
    
    ]
    }
