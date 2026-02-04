
import "client-only"

export const clientSideFunction = () => {
    console.log(
        `use window object,
        use localStorage,
        manipulate DOM elements.`
    )
    return "client result"
}