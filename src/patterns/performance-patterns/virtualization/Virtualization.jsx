import Virtualization_Impl from "./pattern/Virtualization_Impl"

const Virtualization = () => {
    return (
        <div>

    <h1>React Virtualization</h1>

      <p>
        List virtualization is a performance technique used to efficiently
        render large lists. Instead of rendering every item in the list at
        once, virtualization only renders the items that are currently visible
        in the viewport.
      </p>

      <p>
        This approach can significantly reduce the number of DOM elements
        created and updated, resulting in better performance and lower memory
        usage when working with large datasets.
      </p>

      <p>
        In this example, the list contains many items, but only the visible
        portion is rendered at a time. Scroll through the list to see
        virtualization in action.
      </p>

            <Virtualization_Impl />
        </div>
    )
}

export default Virtualization