import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

function HomeCarousel() {
    return (
        <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>

            <div>
            <Image src="/Images/hero.jpg" height={400} width={1000} />
            </div>
            <div>
            <Image src="/Images/hero.jpg" height={400} width={1000} />
            </div>

        </Carousel>
    );
}

export default HomeCarousel;