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
        // carousel image resize, resize 이슈가 있어 추가된 코드, video element의 height를 직접 바꿔도 된다.
        // github : FormidableLabs/nuka-carousel/issues/103
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 0);
    }

    render() {
        return (
            <div className="carousel-container">
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <video
                                key={val}
                                src={val.video}
                                poster={`../../${val.image}`}
                                controls
                                style={{ width: '100%', verticalAlign: 'top', height: 'auto' }}
                                onLoad={() => {
                                }}
                            />
                        ))}
                    </Carousel>
                </WingBlank>
            </div>
        );
    }
}

export default HomeCarousel;