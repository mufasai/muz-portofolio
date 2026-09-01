import { useEffect, useRef } from 'react';

interface VideoBackgroundProps {
    src: string;
    className?: string;
    opacity?: number;
}

const VideoBackground = ({ src, className = '', opacity = 0.8 }: VideoBackgroundProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75; // Slow motion effect
        }
    }, []);

    return (
        <div className={`absolute inset-0 overflow-hidden ${className}`} style={{ zIndex: 0 }}>
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute min-w-full min-h-full w-full h-full object-cover"
                style={{
                    opacity,
                    filter: 'blur(3px) saturate(1.6) brightness(0.6)',
                }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay gradient untuk blending */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background/90"
            />
        </div>
    );
};

export default VideoBackground;
