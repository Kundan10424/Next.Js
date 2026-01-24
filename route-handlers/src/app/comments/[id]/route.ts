
import {comments } from "../data";


export async function GET(_req: Request, {params}: {params: Promise<{id: string}>}){

    const {id} = await params
    const comment = comments.find(comment => comment.id === parseInt(id))
    return Response.json(comment)
}

export async function PATCH(req: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params
    const body = await req.json()
    const {text} = body

    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id))

    if(commentIndex === -1){
        return Response.json({message: "Comment not found"}, {status: 404})
    }
    comments[commentIndex].text = text;

    return Response.json(comments[commentIndex])
}

export async function DELETE(_req: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params
    const commentIndex = comments.findIndex(comment => comment.id === parseInt(id))

    const deletedComment = comments[commentIndex]

    if(commentIndex === -1){
        return Response.json({message: "Comment not found"}, {status: 404})
    }

    comments.splice(commentIndex, 1)

    return Response.json({message: "Comment deleted successfully", deletedComment})
}