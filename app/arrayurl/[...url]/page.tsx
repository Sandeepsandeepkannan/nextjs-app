

export default  async function Arurl({params,}: {  params: Promise<{ url: string }>}){

   const {url}= await params

    return <div>
        The url is {url} 
    </div>
} 