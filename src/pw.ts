import {webkit} from "playwright-webkit"

export class PWRender{
    private browser:any
    constructor(){
        console.log("It's working")    
        
    }
    async start(){
        this.browser =await webkit.launch()
    }
    async GetRender(url:string):Promise<string>{
        let page = await this.browser.newPage()
        await page.goto(url)
        let content:string=await page.content()
        return content
    }
    checkURL(url:string):boolean{
        if(/https:\/\/.+/.test(url)){
            return true
        }else{
            return false
        }
    }
    async getRenderedHTML(url:string):Promise<string>{
        if(this.checkURL(url)){
            return await this.GetRender(url)
        }else{
            return "Wrong URL in the query"
        }
    }

}

