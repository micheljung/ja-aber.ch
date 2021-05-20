export default function NavigationComponent({data}) {
  let nr = 1;
  return (
    <div className="p-4 m-4 bg-gray-100 dark:bg-gray-900">
      {data.map(category => {
        return (
          <div key={"cat-" + category.id}>
            <h1 id={"cat-" + category.id} className="text-lg font-bold dark:text-gray-300">{category.title}</h1>
            <ol start={nr} className="list-decimal list-inside grid gap-2 my-4">
              {category.justifications.map(justification => {
                nr++
                return <li key={nr}><a href={"#" + justification.id}>{justification.claim.capitalize()}</a></li>
              })}
            </ol>
          </div>
        )
      })}
    </div>
  )
}
