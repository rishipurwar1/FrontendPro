import Image from "next/image"

import Loader from "../../assets/icons/loading.svg"

const Spinner = () => {
  return (
    <div className="absolute top-2 left-1/2">
      <Image width={80} height={80} src={Loader} alt="loader" />
    </div>
  )
}

export default Spinner
