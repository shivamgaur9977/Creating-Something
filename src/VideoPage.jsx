import './VideoPage.css';

export default function Video() {

    return (
        <div className="video-wrapper">
            <video controls poster=".." width={100}>
                <source src="../src/assets/video.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </div>
    )
}