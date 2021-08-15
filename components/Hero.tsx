import { useRef, useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/hero.module.css'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

/**
 * MentorUsername
 * mentor profile image
 * titter api for likes, comments, tweets, username, @ and follow btn
 * the variable numberOfContainers value should be changed to the number or slides within this component - 1.
 * 
 */
export default function Hero() {
    const numberOfContainers = 5;
    const containerMargin = 100;
    const initalState = 0;
    const heroCarousel = useRef<HTMLDivElement>(null);
    const heroContainer = useRef<HTMLDivElement>(null);
    const leftButton = useRef<HTMLDivElement>(null);
    const rightButton = useRef<HTMLDivElement>(null);
    const [count, setCount] = useState(initalState);
    const counterRef = useRef(initalState);

    useEffect(() => {
        counterRef.current = count;
    })

    useEffect(() => {
        let interval = setInterval(() => {
            if(count == numberOfContainers){
                setCount(initalState)
            } else{
                setCount(counterRef.current + 1);
            }
        }, 5000);
        return () => clearInterval(interval)
    }, [count]);

    useEffect(()=>{
        switch (count) {
            case 0:
                heroCarousel.current.style.transform = `translateX(0)`;
                leftButton.current.style.transform = `translateX(-50%) translateY(-50%)`;
                rightButton.current.style.transform = `translateX(50%) translateY(-50%)`;
                break;
            
            default:
                let transformed = count * heroContainer.current.offsetWidth;
                let displaced = count * containerMargin;
                let distance = transformed + displaced;
                heroCarousel.current.style.transform = `translateX(-${distance}px)`;
                leftButton.current.style.transform = `translateX(${distance - 30}px) translateY(-50%)`;
                rightButton.current.style.transform = `translateX(${distance + 30}px) translateY(-50%)`;
                break;
        }
    }, [count])

    return (
        <div ref={heroCarousel} className={`${styles.heroCarouselWrapper} flexRow sc`}>
            <div ref={leftButton} className={`${styles.leftButton} flexRow cc`} 
                onClick={
                    () => {
                        if(count <= 0 ){
                            setCount(initalState)
                        } else {
                            setCount(counterRef.current - 1)
                        }
                    }
                }
            >
                <HiChevronLeft/>
            </div>
            <div ref={rightButton} className={`${styles.rightButton} flexRow cc`}
                onClick={
                    () => {
                        if(count == numberOfContainers){
                            setCount(numberOfContainers)
                        } else{
                            setCount(counterRef.current + 1);
                        }
                    }
                }
            >
                <HiChevronRight/>
            </div>
            <div ref={heroContainer} className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>
            <div className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>
            <div className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>
            <div className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>
            <div className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>
            <div className={`${styles.heroContainer} flexColumn cc boxW100`}>

                    <div className={`${styles.mentorInfo} flexRow`}>

                        <div className={`${styles.profileImgContainer} flexRow cc`}>

                            <Image className={styles.profileImg} width={60} height={60} layout="intrinsic" src="/images/photo-1531427186611-ecfd6d936c79.jfif" alt="Merchant Profile Image" />

                        </div>

                        <h1 className={styles.userName}>
                            @MentorUsername
                        </h1>

                    </div>

                    <div className={`${styles.heroVideoContainer} boxW100H100`}>

                        <Image className={styles.heroBackground} layout="fill" src="/images/herobackgroundimg.jpg" alt="Hero background image" />

                    </div>

                    <div className={styles.tweetContainer}>

                        <div className={`${styles.tweetProfile} flexRow cc`}>

                            <div className={`${styles.tweetProfileImgContainer} flexRow cc`}>

                                <div className={styles.tweetProfileImg}>

                                    <Image width={60} height={60} layout="intrinsic" src="/images/thinkingmanprofileimg.jfif" alt="Merchant profile image"/>

                                </div>

                            </div>

                            <div className={`${styles.tweetProfileDetails} flexColumn`}>

                                <a href="">
                                    Teammindshare
                                </a>

                                <a href="">
                                    @teammindshare
                                </a>

                            </div>

                            <div className={`${styles.tweetFollowBtnContainer} flexRow cc`}>
                                <a href="">
                                    Follow
                                </a>
                            </div>

                        </div>

                        <div className={styles.tweet}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                        <div className={`${styles.tweetLikesComments} flexRow ec`}>

                            <div className={`${styles.Likes} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/833/833472.svg?token=exp=1620833264~hmac=9fdfbf0d5ff4de1c0cdebb0af36f7fd2" alt=""/>
                                </div>
                                <div>
                                    24k
                                </div>
                            </div>

                            <div className={`${styles.Comments} flexRow cc`}>
                                <div>
                                    <img src="https://www.flaticon.com/svg/vstatic/svg/2462/2462719.svg?token=exp=1620833464~hmac=d7770a82df529c94313f95e78aadc67d" alt=""/>
                                </div>
                                <div>
                                    2k
                                </div>
                            </div>

                        </div>
                    </div>
            
            </div>

        </div>
    );
};