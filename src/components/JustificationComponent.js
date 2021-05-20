export default function JustificationComponent({nr, justification}) {
  return (
    <div className="text-justify p-4 m-4 bg-gray-100 dark:bg-gray-900">
      <h2 id={justification.id} className="mb-4 font-bold dark:text-gray-400">
        {nr} {justification.claim.capitalize()} <a href={"#" + justification.id}>#</a>
      </h2>
      <div dangerouslySetInnerHTML={{__html: justification.longRefutation}} />
    </div>
  )
}
