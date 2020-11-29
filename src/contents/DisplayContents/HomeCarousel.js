import React from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import img1 from '../../source/img/menu1/mobile_main_video_poster_1.png'
import img2 from '../../source/img/menu1/mobile_main_video_poster_2.png'
import img3 from '../../source/img/menu1/mobile_main_video_poster_3.png'
import img4 from '../../source/img/menu1/mobile_main_video_poster_4.png'

class HomeCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { image: img1, video: "https://s.wink.co.kr/danbi_common/videos/mobile_main_video_1.mp4"},
                { image: img2, video: "https://s.wink.co.kr/danbi_common/videos/mobile_main_video_2.mp4"},
                { image: img3, video: "https://s.wink.co.kr/danbi_common/videos/mobile_main_video_3.mp4"},
                { image: img4, video: "https://s.wink.co.kr/danbi_common/videos/mobile_main_video_4.mp4"}
                ],
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {this.state.data.map(val => (
                            <video
                                src={val.video}
                                poster={val.image}
                                controls
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                    ))}
                </Carousel>
            </WingBlank>
        );
    }
}

export default HomeCarousel;