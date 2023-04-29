import "../../helper/tree"
const WaveCursor = () => {
    const width = window.innerWidth -10;
    const height = window.innerHeight -10;
        return (
            <canvas id="canvas" width={width} height={height} className="absolute top-0 left-0 -z-10 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-black via-gray-900 to-gray-700"></canvas>
  )
};

export default WaveCursor;
