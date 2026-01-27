export const dynamic = "force-static"

export async function GET(){
    const categories = [
        { id: 1, name: "Technology" },
        { id: 2, name: "Health" },
        { id: 3, name: "Finance" },
        { id: 4, name: "Education" }
    ]
    return Response.json(categories);
}