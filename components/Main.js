import React from 'react';
import { FaHeart } from 'react-icons/fa'
import { MdAccessTime } from 'react-icons/md'
import { FaEthereum } from 'react-icons/fa'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-top m-10`,
  innercontentWrapper:`m-10 `,
  nftcontainer:`flex justify-center inline-flex space-x-10 mt-20 mb-20`,
  bookcontainer:`flex justify-center place-content-center space-x-10 mt-20 mb-20`,
  topNFTs:`box-content w-30 h-30 bg-[#313338] rounded-t-lg rounded-b-lg`, 
  recommdBook:`flex justify-between box-content w-auto h-auto bg-[#313338] rounded-t-lg rounded-b-lg`, 
  recommdOptn:`flex justify-center space-x-10 mt-10 mb-10`,
  title: `flex justify-center relative text-white text-[46px] font-semibold items-center`,
  subtitle:`flex justify-center relative text-white text-[35px] font-semibold hover:bg-black`, 
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  infoContainer: `flex justify-between h-auto bg-[#313338] p-3 rounded-b-lg text-white`, 
  bookContent:`flex justify-center h-xxl w-80 bg-[#E7EFF0] p-5 text-black `, 
  book:`m-1 float-none`,
  categories:`flex justify-center block font-semibold text-[#414E54]`,
  bookTitle:`flex justify-center block text-xl`,
  collectionTitle: `text-[#8a939b]`, 
  assetName: `text-bold`, 
  topBid:`text-[#8a939b]`,
  price:`text-[#cccccc]`,
  auctionether:`text-[#FC10DC]`,
  timeremains:`text-[#8a939b]`,
  heart:`text-[#D6D6D6] mt-[2.0rem]` 
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.innercontentWrapper}>

                        <div className={style.title}>Top 5 NFTs</div>
                            <div className={style.nftcontainer}>
                                <div className={style.topNFTs}> 
                                    <img
                                        className = "rounded-t-lg" // NFT1
                                        src = "https://img.seadn.io/files/d46e069295b4c2ebe7a3de2b60053eb3.png?auto=format&h=720&w=720"
                                        alt = ""
                                    />
                                    <div className={style.infoContainer}>
                                        <div>
                                            <div className={style.collectionTitle}>[Collection Title]</div>
                                            <div className={style.assetName}>[Asset Name]</div>
                                        </div>
                                        <div class="text-right justify-end">
                                            <div className={style.topBid}>Top Bid</div>
                                            <div className={style.price}>
                                                <div class="inline-block">
                                                    <div className={style.auctionether}>
                                                        <FaEthereum />
                                                    </div>
                                                </div>
                                                <div class="inline-block">[Price]</div>
                                            </div>
                                            <div className={style.timeremains}>
                                                <div class="inline-block"><MdAccessTime /></div>
                                                <div class="inline-block">[time remaining]</div>
                                            </div>
                                            <div className={style.heart}>
                                                <button class="float-right"><FaHeart/></button>
                                            </div>
                                        </div> 
                                    </div>
                                </div>

                                <div className={style.topNFTs}>
                                    <img
                                        className = "rounded-t-lg" // NFT2
                                        src = "https://img.seadn.io/files/4447332048db351b771597dee67d0453.png?auto=format&h=720&w=720"
                                        alt = ""
                                    />
                                    <div className={style.infoContainer}>
                                        <div>
                                            <div className={style.collectionTitle}>[Collection Title]</div>
                                            <div className={style.assetName}>[Asset Name]</div>
                                        </div>
                                        <div class="text-right justify-end">
                                            <div className={style.topBid}>Top Bid</div>
                                            <div className={style.price}>
                                                <div class="inline-block">
                                                    <div className={style.auctionether}>
                                                        <FaEthereum />
                                                    </div>
                                                </div>
                                                <div class="inline-block">[Price]</div>
                                            </div>
                                            <div className={style.timeremains}>
                                                <div class="inline-block"><MdAccessTime /></div>
                                                <div class="inline-block">[time remaining]</div>
                                            </div>
                                            <div className={style.heart}>
                                                <button class="float-right"><FaHeart/></button>
                                            </div>
                                        </div> 
                                    </div>                                        
                                </div>

                                <div className={style.topNFTs}>
                                    <img // NFT3
                                        className = "rounded-t-lg"
                                        src = "https://img.seadn.io/files/3b79cf7ea3379c6bba91dc86e525d766.png?auto=format&h=720&w=720"
                                        alt = ""
                                    />
                                    <div className={style.infoContainer}>
                                        <div>
                                            <div className={style.collectionTitle}>[Collection Title]</div>
                                            <div className={style.assetName}>[Asset Name]</div>
                                        </div>
                                        <div class="text-right justify-end">
                                            <div className={style.topBid}>Price</div>
                                            <div className={style.price}>
                                                <div class="inline-block"><FaEthereum /></div>
                                                <div class="inline-block">[Price]</div>
                                            </div>
                                            <div class="inline-block"></div>
                                            <div className={style.heart}>
                                                <button class="float-right"><FaHeart/></button>
                                            </div>
                                        </div> 
                                    </div>                                    
                                </div>
                                
                                <div className={style.topNFTs}>
                                    <img
                                        className = "rounded-t-lg" // NFT4
                                        src = "https://img.seadn.io/files/be8b45e08d38ce9182ddda1492b42c98.png?auto=format&h=720&w=720"
                                        alt = ""
                                    />
                                    <div className={style.infoContainer}>
                                        <div>
                                            <div className={style.collectionTitle}>[Collection Title]</div>
                                            <div className={style.assetName}>[Asset Name]</div>
                                        </div>
                                        <div class="text-right justify-end">
                                            <div className={style.topBid}>Top Bid</div>
                                            <div className={style.price}>
                                                <div class="inline-block">
                                                    <div className={style.auctionether}>
                                                        <FaEthereum />
                                                    </div>
                                                </div>
                                                <div class="inline-block">[Price]</div>
                                            </div>
                                            <div className={style.timeremains}>
                                                <div class="inline-block"><MdAccessTime /></div>
                                                <div class="inline-block">[time remaining]</div>
                                            </div>
                                            <div className={style.heart}>
                                                <button class="float-right"><FaHeart/></button>
                                            </div>
                                        </div> 
                                    </div>                                    
                                </div>

                                <div className={style.topNFTs}>
                                    <img
                                        className = "rounded-t-lg" // NFT5
                                        src = "https://img.seadn.io/files/4a499a00caccd38d907c0c1776c66f61.png?auto=format&h=720&w=720"
                                        alt = ""
                                    />
                                    <div className={style.infoContainer}>
                                        <div>
                                            <div className={style.collectionTitle}>[Collection Title]</div>
                                            <div className={style.assetName}>[Asset Name]</div>
                                        </div>
                                        <div class="text-right justify-end">
                                            <div className={style.topBid}>Price</div>
                                            <div className={style.price}>
                                                <div class="inline-block"><FaEthereum /></div>
                                                <div class="inline-block">[Price]</div>
                                            </div>
                                            <div class="inline-block"></div>
                                            <div className={style.heart}>
                                                <button class="float-right"><FaHeart/></button>
                                            </div>
                                        </div> 
                                    </div>                                    
                                </div>
                            </div>
                        <div className={style.title}>Recommended</div>
                        <div className={style.recommdOptn}>
                            <button className={style.subtitle}>총류</button>
                            <button className={style.subtitle}>인문</button>
                            <button className={style.subtitle}>종교</button>
                            <button className={style.subtitle}>사회과학</button>
                            <button className={style.subtitle}>자연과학</button>
                            <button className={style.subtitle}>기술과학</button>
                            <button className={style.subtitle}>예술</button>
                            <button className={style.subtitle}>언어</button>
                            <button className={style.subtitle}>문학</button>
                            <button className={style.subtitle}>역사</button> 
                        </div>
                        <div className={style.bookcontainer}>
                            <div className={style.recommdBook}>
                                <div className={style.bookContent}>
                                    <div class="space-y-2">
                                        <span class="block">
                                            <img
                                                className={style.book}
                                                src="http://image.kyobobook.co.kr/images/book/large/225/l9791191114225.jpg"
                                                alt=""
                                            />
                                        </span>
                                        <span className={style.categories}>[문학]</span>
                                        <span className={style.bookTitle}>작별인사</span>
                                    </div>                                   
                                </div>
                                
                            </div>
                            <div className={style.recommdBook}>
                                <div className={style.bookContent}>
                                    <div class="space-y-2">
                                        <span class="block">
                                            <img
                                                className={style.book}
                                                src="http://image.kyobobook.co.kr/images/book/large/716/l9788901260716.jpg"
                                                alt=""
                                            />
                                        </span>
                                        <span className={style.categories}>[문학]</span>
                                        <span className={style.bookTitle}>역행자</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.recommdBook}>
                                <div className={style.bookContent}>
                                    <div class="space-y-2">
                                        <span class="block">
                                            <img
                                                className={style.book}
                                                src="http://image.kyobobook.co.kr/images/book/large/188/l9791161571188.jpg"
                                                alt=""
                                            />
                                        </span>
                                        <span className={style.categories}>[문학]</span>
                                        <span className={style.bookTitle}>불편한 편의점</span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.recommdBook}>
                                <div className={style.bookContent}>
                                    <div class="space-y-2">
                                        <span class="block">
                                            <img
                                                className={style.book}
                                                src="http://image.kyobobook.co.kr/images/book/large/661/l9791190977661.jpg"
                                                alt=""
                                            />
                                        </span>
                                        <span className={style.categories}>[문학]</span>
                                        <span className={style.bookTitle}>인플레이션에서 살아남기</span>
                                    </div></div>
                            </div>

                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
};
 
export default Hero; 