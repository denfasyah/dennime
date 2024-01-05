
const Genre = ({key,title}) => {
  return (
    <div>
        <span
              key={key}
              className="text-md border-2 mt-2 border-purple-700 rounded-r-2xl rounded-bl-2xl px-2 text-White py-1 rounded-md mr-2"
            >
              {title}
            </span>
    </div>
  )
}

export default Genre