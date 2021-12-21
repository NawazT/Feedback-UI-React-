import LoadingGif from "../assets/loading-gif.gif"
function LoadingSpinner() {
    return (
      <img src={LoadingGif} alt="Loading..." style ={{
          width: "100%", margin: "auto",
          display: "block"
      }} />
    )
}

export default LoadingSpinner
