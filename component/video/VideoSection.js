import { NafiabContext } from '@/context/NafiabContext'
import React, { useContext } from 'react'

const VideoSection = () => {
    const { handleVideoShow } = useContext(NafiabContext)
    return (
        <div className="video-area bg-default pt-140 pt-140 pb-215 about-video-section" data-overlay="7">
            <div className="container">
                <div className="ba-video-content">
                    <div className="text-center pb-55">
                        <div className="ba-video-icon wow fadeInUp" data-wow-delay=".1s">

                        </div>
                    </div>
                    <div className="ba-video-content text-center">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection