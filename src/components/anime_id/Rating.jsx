import { FaStar } from "react-icons/fa";
const Rating = ({score}) => {
  return (
    <>
        <p className="mb-2 flex text-White text-lg">
          <FaStar className="ml-1 mr-2" />
          {score}
        </p>
    </>
  )
}

export default Rating