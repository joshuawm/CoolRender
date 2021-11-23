import {webkit} from "playwright-webkit"

interface responseContent{
    status:number,
    content:string
}

export class PWRender{
    private browser:any
    constructor(){
        console.log("It's working")    
        
    }
    async start(){
        this.browser =await webkit.launch()
    }

    async GetRender(url:string):Promise<responseContent>{
        let page = await this.browser.newPage()
        let content:string
        let status:number
        try{
            await page.goto(url)
            content=await page.content()
            status=200
        }catch{
            content="Load failed (1) Check the url correct (2)Maybe the server go Wrong"
            status=400
        }
        await page.close()
        let response:responseContent={
            status,
            content
        } 
        return response
    }
    checkURL(url:string):boolean{
        if(/https:\/\/.+/.test(url)){
            return true
        }else{
            return false
        }
    }
    async getRenderedHTML(url:string):Promise<responseContent>{
        if(this.checkURL(url)){
            return await this.GetRender(url)
        }else{
            return {
                status:400,
                content:" "
            }
        }
    }

}

