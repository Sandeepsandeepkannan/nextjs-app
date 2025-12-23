

export default  async function Blogid({params,}: {  params: Promise<{ blogid: string }>}){

    const {blogid}= await params

    return <div>
        the blog is is {blogid}
        </div>
}