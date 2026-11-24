type Props = {
  src: string;
  onLoadedData: () => void;
  isLoading: boolean;
};

const VideoPlayer = ({ src, onLoadedData, isLoading }: Props) => (
  <video
    playsInline
    autoPlay
    loop
    muted
    preload="metadata"
    className={`flex h-full w-full object-contain ${isLoading ? "hidden" : "visible"}`}
    onLoadedData={onLoadedData}
  >
    <source src={src} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
);

export default VideoPlayer;
