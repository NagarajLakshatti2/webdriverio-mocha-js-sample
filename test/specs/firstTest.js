

describe('Ecommerce Application', async()=> 
{
    it('Login fail page', async()=>
    {
        // webdriverIo Async (Sync)
        await browser.url("https://sso.teachable.com/secure/9521/identity/login/password")
        console.log(await "Title is "+browser.getUrl())
    }
)
})