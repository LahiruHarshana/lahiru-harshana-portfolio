'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Oswald } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./flaticon.css";
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { FiMonitor, FiCode, FiPenTool, FiSmartphone, FiSettings, FiHelpCircle } from 'react-icons/fi';
const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
});


interface Testimonial {
  id: number;
  text: string;
  avatarSrc: string;
  name: string;
  title: string;
}


interface Social {
  id: number;
  name: string;
  href: string;
  icon: JSX.Element;
}

interface BlogPost {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  authorAvatarSrc: string;
  authorName: string;
  date: string;
}


const Home: FC<{}> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");
      const [currentIndex, setCurrentIndex] = useState(0);
        const [slideStyle, setSlideStyle] = useState({
    opacity: 1,
    transform: 'translateX(0%)',
  });
    const [isAnimating, setIsAnimating] = useState(false);

    const blogPostsData: BlogPost[] = [
  {
    id: 1,
    imageSrc: "https://t4.ftcdn.net/jpg/01/79/13/19/360_F_179131907_dEbrIVvpqUkenNvGHUm4ZpChboGCeFl7.jpg",
    imageAlt: "Various tech devices",
    title: "Everything is easy when you think it easy",
    excerpt: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    authorAvatarSrc: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjqdS3zgcdhRvPqumSKevrqUnSWdqxz8B8j3b70ZZitgIXZm0MTo5_y0rca_vcLvUMJ0VffrcPoJVucRYwANd_1bB0GTFIcKdJz76hc2LsvUMbWT2Ca8gOR4EGYHpCpuvetAlHX-yh0KpxZfvp82o-Ozm-HJbePPEJg6F0TRcZLdUxaTRXAKan7Ol2J/s800/Lily%20Anne%20Harrison.jpg",
    authorName: "Lily Anne",
    date: "October 12,2019"
  },
  {
    id: 2,
    imageSrc: "https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/blog/9-21-23-ideas-for-a-monochrome-desk-setup/DSC07611_foajcm_sjx02o",
    imageAlt: "Laptop on a desk",
    title: "New design trends shaping the industry",
    excerpt: "Discover the latest design trends that are making waves and how you can incorporate them into your next project for stunning results.",
    authorAvatarSrc: "https://media.licdn.com/dms/image/v2/D4E03AQE727a0W5abuQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730041137046?e=2147483647&v=beta&t=LT7g55UyjlIcz7qq2aw807hIWoDpFY1_PiPJmhZr7dc",
    authorName: "James Arch",
    date: "October 14,2019"
  },
  {
    id: 3,
    imageSrc: "https://img.freepik.com/premium-photo/beautiful-open-book-pages-color-neon-light-table-night-background_181667-25485.jpg",
    imageAlt: "Open book with fanned pages",
    title: "The future of remote collaboration tools",
    excerpt: "Remote work is here to stay. We explore the upcoming collaboration tools that promise to make teamwork more seamless and efficient.",
    authorAvatarSrc: "https://m.media-amazon.com/images/M/MV5BMTk3MDY4MDM3Nl5BMl5BanBnXkFtZTYwNzUyMzAz._V1_FMjpg_UX1000_.jpg",
    authorName: "Eliza Monet",
    date: "October 16,2019"
  },
];
  const socialLinks: Social[] = [
    { id: 1, name: 'Facebook', href: '#', icon: <FaFacebook /> },
    { id: 2, name: 'Twitter', href: '#', icon: <FaTwitter /> },
    { id: 3, name: 'LinkedIn', href: '#', icon: <FaLinkedin /> },
    { id: 4, name: 'Pinterest', href: '#', icon: <FaPinterest /> },
  ];

  const testimonialsData: Testimonial[] = [
  {
    id: 1,
    text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.",
    avatarSrc: "/dp5.jpg",
    name: "Jimmy Alex",
    title: "SEO of Northy"
  },
  {
    id: 2,
    text: "Working with them has been an absolute pleasure. Their dedication and insights are unparalleled. We've seen remarkable growth since partnering up. Highly recommended for any business looking to scale effectively.",
    avatarSrc: "/dp2.jpg",
    name: "Sarah Chen",
    title: "Founder, Creative Solutions"
  },
  {
    id: 3,
    text: "The level of professionalism and the quality of work delivered exceeded all my expectations. The team is responsive, innovative, and truly understands customer needs. A five-star experience!",
    avatarSrc: "/dp3.avif",
    name: "Michael B.",
    title: "Product Manager, Tech Innovators"
  },
];
  const currentTestimonial = testimonialsData[currentIndex];

  const allPortfolioItemsData = [
  { 
    id: 1, 
    src: "https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg", 
    alt: "Web Design Project Alpha", 
    category: "Web Design" 
  },
  { 
    id: 2, 
    src: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/495304246_559930727161542_1826639213272179947_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEAw0cOlxMlnQ4tHcvwQ0iGDyv17BFII_kPK_XsEUgj-dMalUQHzEwe1J0zlmskRkAfR6RqXF_7oiB17flDRcNT&_nc_ohc=rtvtoto8k-kQ7kNvwHEWlKp&_nc_oc=AdmKWCRx7lrQaP2vMLoV8fCiiW_KYtxXenE7aENvZa3N0k_amBEpvzORZgz-VwzWTy8&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=cGxZd4NymKN1oGqgheh4QA&oh=00_AfJifvZ-5EHPYUvBtF9020P6xYnpNqCDLZc8pZCLIWCjaA&oe=683FBA30", 
    alt: "Photography Session Alpha", 
    category: "Photography" 
  },
  { 
    id: 3, 
    src: "https://i.ytimg.com/vi/3WOXrhCzzr4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDsEmTM1_FDe-Cfmwe1OJthohe1Iw", 
    alt: "Web Application Project X", 
    category: "Web Application" 
  },
  { 
    id: 4, 
    src: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/2056/posts/33235/image/19-07-05-ART-Tips-Print-Design-ID-1-2.jpg", 
    alt: "Print Design Sample I", 
    category: "Print Design" 
  },
  { 
    id: 5, 
    src: "https://www.blendb2b.com/hs-fs/hubfs/blog-images/Modern%20Website%20Designs/Screenshot%202025-01-23%20at%2015.07.56-min.png?width=3544&height=1750&name=Screenshot%202025-01-23%20at%2015.07.56-min.png", 
    alt: "Web Design Project Beta", 
    category: "Web Design" 
  },
  { 
    id: 6, 
    src: "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/472312177_469534729534476_1106804398961209649_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH6lO-Ao6YKuEQzXPOcoOD8l9f_iL-LLM2X1_-Iv4sszTGh7TDte_ttb9oGanasAebR5aUiXrjD6Lm5zvAb9iZd&_nc_ohc=lBiluh0-mGQQ7kNvwEVeZIf&_nc_oc=AdkRCJZYf16BtWRinwsrWgRt1BCeZ7KVy5NiL738ldE1f1eF6W7v54KIVJiQPe3tiR0&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=0fE_cfHlG7xA-hulx_0zSg&oh=00_AfLG3uwaCIS1ui6oKT5CfQHlY7vHgDcZYvWqwsTcG4mTnw&oe=683FA2F8", 
    alt: "Photography Session Beta", 
    category: "Photography" 
  },
  { 
    id: 7, 
    src: "https://www.clickdo.co.uk/wp-content/uploads/2020/04/Bespoke-Web-Design.jpg", 
    alt: "Web Design Project Gamma", 
    category: "Web Design" 
  },
  { 
    id: 8, 
    src: "https://betterize.pl/strapi/uploads/172382_526a6ac995.jpg", 
    alt: "Web Application Project Y", 
    category: "Web Application" 
  },
];
  const [filteredItems, setFilteredItems] = useState(allPortfolioItemsData);
const filterCategoriesList = ["All", "Web Design", "Print Design", "Web Application", "Photography"];
const TRANSITION_DURATION = 300;
useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(allPortfolioItemsData);
    } else {
      const newFilteredItems = allPortfolioItemsData.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
    }
  }, [activeFilter]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const goToSlide = (newIndex: number) => {
    if (newIndex === currentIndex || isAnimating) return;

    setIsAnimating(true);
    const direction = newIndex > currentIndex ? 1 : -1;

    setSlideStyle({
      opacity: 0,
      transform: `translateX(${-direction * 25}%)`,
    });

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSlideStyle({
        opacity: 0,
        transform: `translateX(${direction * 25}%)`,
      });

      setTimeout(() => {
        setSlideStyle({
          opacity: 1,
          transform: 'translateX(0%)',
        });
        setTimeout(() => {
            setIsAnimating(false);
        }, TRANSITION_DURATION);
      }, 50);

    }, TRANSITION_DURATION);
  };
  return (
    <div className="relative bg-[#202020] text-white">

      <div className="absolute top-0 bottom-0 bg-white z-10 line h-full"></div>
      <div className="absolute top-0 bottom-0 bg-white z-10 line-3 h-full"></div>
      <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-2"></div>

<section
      id="home"
      className="relative h-[950px] flex flex-col items-center justify-center py-10 md:py-0"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full">
        <div className="relative z-10 text-center lg:text-left w-full lg:w-1/2 xl:w-2/5 order-last lg:order-first mb-10 lg:mb-0">
          <div className="relative inline-block mb-4">
            <div className="hidden sm:block absolute -left-4 md:left-96 top-1/2 transform -translate-y-1/2 -translate-x-full w-12 md:w-16 h-0.5 bg-white"></div>
            <h4 className={`${oswald.className} text-base sm:text-lg font-normal uppercase tracking-[6px] sm:tracking-[8px] text-white relative`}>
              I Am Lahiru Harshana
            </h4>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 break-words"
            style={{
              fontFamily: 'Oswald, sans-serif',
              lineHeight: '1.2',
            }}
          >
            CREATIVE DESIGNER
          </h2>
          <Link
            href="#contact"
            className={`
              ${oswald.className}
              inline-block
              h-[45px] sm:h-[50px]
              leading-[42px] sm:leading-[47px]
              text-[14px] sm:text-[16px]
              text-white
              border
              border-[rgba(102,102,102,0.8)]
              px-[25px] sm:px-[30px]
              uppercase
              tracking-[1px]
              rounded-full
              transition-all
              duration-300
              ease-in-out
              bg-transparent
              hover:bg-gray-200
              hover:text-black
              focus:outline-none focus:ring-2 focus:ring-gray-400
            `}
          >
            Contact Me
          </Link>
        </div>

        <div
          className="hidden lg:block relative z-10 mt-8 lg:mt-0 w-60 h-60 sm:w-72 sm:h-72 md:w-72 md:h-96 lg:w-72 lg:h-[500px] xl:w-[450px] xl:h-[700px] bg-cover bg-no-repeat bg-center rounded-lg order-first lg:order-last" // MODIFIED HERE
          style={{ backgroundImage: "url('/dp.png')" }}
        ></div>
      </div>

      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center w-full px-4 
                      md:left-auto md:right-4 md:-translate-x-0 md:text-right md:w-auto md:px-0 z-20">
        <p className="text-xs sm:text-sm md:text-base font-normal text-gray-300">
          Creative Designer And Developer
        </p>
      </div>

<div className="absolute bottom-4 left-4 flex flex-col space-y-2">

<div

style={{

fontFamily: 'Oswald, sans-serif',

color: '#888',

position: 'absolute',

left: '-10px',

top: '-135px',

letterSpacing: '5px',

writingMode: 'vertical-rl',

textTransform: 'uppercase',

}}

>

SOCIAL

</div>

<div className="absolute left-2 top-[-55px] w-px h-10 bg-white line-4"></div>

<div className="flex flex-col space-y-2">

{socialLinks.map((social) => (

<Link

key={social.id}

href={social.href}

className="text-white hover:text-gray-300 text-1xl mb-6"

>

{social.icon}

</Link>

))}

</div>

</div>
    </section>
            <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-5"></div>


<section className="relative text-white py-16">
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="img-container">
          <Image
            className="img-about"
            src="/dp.png"
            alt="A random man"
            width={300}
            height={300}
          />
        </div>
    </div>

      <div className="absolute top-0 bottom-0 bg-white z-10 line-6 h-full"></div>

    <div className="md:ml-8 mt-8 md:mt-0 w-[40%]">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-6 tsxt">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
        alteration in some form, by injected humour, or randomised words which don't look even slightly
        believable.
      </p>
      <p className="mb-8">
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything
        embarrassing hidden in the middle of the text. All the Lorem Ipsum
      </p>
      <Link
            href="#contact"
            className={`
              link
              ${oswald.className}
              inline-block
              h-[50px]
              leading-[47px]
              text-[16px]
              text-white
              border
              border-[rgba(102,102,102,0.8)]
              px-[30px]
              uppercase
              tracking-[1px]
              rounded-full
              transition
              transition-all
              duration-300
              ease-in-out
              bg-transparent
              hover:bg-gray-200
              hover:text-black
            `}
          >
            Download Resume
          </Link>
    </div>
  </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white z-10 line-7"></div>
                            <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-8"></div>


</section>

<section className="relative text-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-60 service-section">
  <style jsx>{`
    .services-icon-wrapper {
      position: relative;
      z-index: 1;
      width: 100px; /* Or use Tailwind: w-24 h-24 or w-[100px] h-[100px] */
      height: 100px;
      border: 1px solid #666;
      background: transparent;
      box-sizing: content-box;
      border-radius: 50%;
      color: rgb(221, 221, 221);
      margin-left: auto; /* Changed from margin: auto to allow text-align on parent */
      margin-right: auto; /* Changed from margin: auto to allow text-align on parent */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .service-dot {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: center center;
    }
    .dots {
      width: 10px;
      height: 10px;
      background: rgb(221, 221, 221);
      border-radius: 50%;
      position: absolute;
      top: -5px; /* Adjust if icon wrapper size changes */
      left: 50%;
      transform: translateX(-50%);
    }
    .services-wrapper:hover .service-dot:nth-child(1) {
      animation-play-state: running;
    }
    /* Ensure you have at least one service-dot for the animation to target */
    .services-icon-wrapper .service-dot:nth-child(1) {
      transform: rotate(0deg);
      animation: service-dot_1 2s infinite linear;
      animation-play-state: paused;
    }
    @keyframes service-dot_1 {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
  <div className="text-center mb-12">
    {/* Consider responsive text sizes for h2 as well if needed */}
    <h2 style={{ fontFamily: 'Heebo, sans-serif' }} className="text-xl md:text-2xl mb-4">
      What I am Expert In
    </h2>
    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">MY SERVICE</h3>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Service Item 1 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            {/* Assuming FiMonitor is an icon component. Ensure it scales or is sized appropriately. */}
            {/* You might want to control icon size with Tailwind too e.g., <FiMonitor className="w-10 h-10 sm:w-12 sm:h-12" /> */}
            <FiMonitor size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">Web Design</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>

    {/* Service Item 2 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            <FiCode size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">Web Development</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>

    {/* Service Item 3 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            <FiPenTool size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">Creative Design</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>

    {/* Service Item 4 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            <FiSmartphone size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">Responsive Design</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>

    {/* Service Item 5 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            <FiSettings size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">Branding Identity</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>

    {/* Service Item 6 */}
    <div className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
      <div className="text-center mb-4">
        <div className="mb-6">
          <div className="services-icon-wrapper">
            <div className="service-dot">
              <div className="dots"></div>
            </div>
            <FiHelpCircle size={50} />
          </div>
        </div>
        <h4 className="text-xl font-semibold">24/7 Support</h4>
      </div>
      <p className="service-text text-center text-gray-400">
        I am an expert web designer and developer. Contrary to popular belief, Lorem Ipsum is not simply random text. It has meaning.
      </p>
    </div>
  </div>
</section>


<section className="relative text-white py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
    {/* Horizontal line at the top of the section */}
    <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-50 z-10 line-9"></div>
    {/* Vertical line on the left of the section */}
    <div className="absolute top-0 bottom-0 left-0 w-px bg-white opacity-50 z-10 line-10"></div>

    {/* Container for content, providing its own responsive padding */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0"> {/* Added z-0 to ensure content is behind lines if lines were to overlap due to complex layouts, though typical flow keeps them separate */}
        <div className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-white text-lg md:text-xl tracking-wider font-medium">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">WORK I HAVE DONE</h2>
        </div>

        <nav className="flex justify-center mb-12 md:mb-16">
            <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-6 text-sm sm:text-base">
                {/* Assuming filterCategoriesList is an array of strings */}
                {filterCategoriesList.map((category) => (
                    <li key={category}>
                        <button
                            onClick={() => handleFilterClick(category)}
                            className={`hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white py-1 px-2 rounded
                                ${activeFilter === category
                                    ? 'text-white font-semibold border-b-2 border-white'
                                    : 'text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-gray-500'
                                }`}
                        >
                            {category}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Assuming filteredItems is an array of objects */}
            {filteredItems.map((item) => (
                <div key={item.id} className="bg-black aspect-square group relative overflow-hidden rounded-md"> {/* Added rounded-md for aesthetics, z-1 was on items, but lines are z-10 */}
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    {/* Optional: Add an overlay or text on hover here if needed */}
                </div>
            ))}
        </div>

        {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 mt-8 text-lg">No items found for this category.</p>
        )}
    </div>
</section>

<section className="relative text-white min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 bottom-0 bg-white z-10 line-12 h-full"></div>
                        <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-11"></div>
                                                <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-13"></div>

      <div className="max-w-3xl w-full text-center">
        <div
          style={{
            opacity: slideStyle.opacity,
            transform: slideStyle.transform,
          }}
          className={`transition-all ease-linear`}
        >
          {currentTestimonial && (
            <>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 font-serif italic">
                "{currentTestimonial.text}"
              </p>
              <div className="mb-4">
                <Image
                  key={currentTestimonial.id} 
                  src={currentTestimonial.avatarSrc}
                  alt={currentTestimonial.name}
                  width={80}
                  height={80}
                  className="z-1 rounded-full mx-auto object-cover border-2 border-gray-700 shadow-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-gray-400 mb-10">
                {currentTestimonial.title}
              </p>
            </>
          )}
        </div>
      </div>

      <div className="flex space-x-3 mt-2">
        {testimonialsData.map((testimonial, index) => (
          <button
            key={testimonial.id}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none
              ${currentIndex === index ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-500 disabled:opacity-50'}`}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={currentIndex === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </section>

<section className="relative text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60">
    {/* Assumed vertical line on the left */}
    <div className="absolute top-0 bottom-0 left-0 w-px bg-white opacity-30 z-20 line-14"></div>
    {/* Assumed horizontal line at the top */}
    {/* <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-30 z-20 line-13-top"></div> */}
    {/* Assumed horizontal line at the bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-30 z-20 line-13-bottom"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Content should be above lines if lines are on edges, or lines above content if desired via higher z-index for lines */}
        <div className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-lg md:text-xl text-white tracking-wider font-medium">
                From Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
                LATEST NEWS
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Assuming blogPostsData is an array of post objects */}
            {blogPostsData.map((post) => (
                <div
                    key={post.id}
                    className="bg-[#222222] rounded-lg overflow-hidden flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out group" // Darker background for cards, added group
                >
                    <div className="relative w-full aspect-video overflow-hidden"> {/* Ensure image doesn't break rounded corners if any scale effect */}
                        <Image
                            src={post.imageSrc}
                            alt={post.imageAlt}
                            layout="fill"
                            objectFit="cover"
                            className="transform transition-transform duration-300 ease-in-out group-hover:scale-105" // Added hover effect to image
                        />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col flex-grow"> {/* Standardized padding */}
                        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-3 transition-colors duration-200">
                            {/* Removed <a> tag if the whole card is clickable or if title is the only link */}
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3"> {/* Ensure @tailwindcss/line-clamp is installed */}
                            {post.excerpt}
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-700"> {/* Adjusted border color */}
                            <div className="flex items-center">
                                <div className="relative w-10 h-10 mr-3 shrink-0">
                                    <Image
                                        src={post.authorAvatarSrc}
                                        alt={post.authorName}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full"
                                    />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-200">{post.authorName}</p>
                                    <p className="text-xs text-gray-400">{post.date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

<section className=" text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60"> {/* Added a dark section background, adjust as needed */}
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-lg md:text-xl text-white tracking-wider font-medium">
                Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
                CONTACT
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <div className="text-gray-300">
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                    Our Contacts
                </h3>
                <p className="leading-relaxed mb-8 text-gray-400 text-base sm:text-lg"> {/* Added responsive text size */}
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It
                    has roots in a piece of classical Latin literature from 45 BC, making it
                    over 2000 years old.
                </p>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                    <p className="text-gray-400 text-base sm:text-lg">245 King Street, Touterie Victoria 8520 Australia</p>
                </div>

                <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                    <p className="text-gray-400 text-base sm:text-lg">0-123-456-7890</p>
                    <p className="text-gray-400 text-base sm:text-lg mt-1">0-123-456-7890</p>
                </div>

                <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                    <p className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-base sm:text-lg">
                        <a href="mailto:sample@gmail.com">sample@gmail.com</a>
                    </p>
                </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                    Quick Contact Form
                </h3>
                <form action="#" method="POST" className="space-y-5"> {/* Added space-y for consistent vertical spacing of direct children */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div>
                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input
                                style={{ fontFamily: 'Heebo, sans-serif' }}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your Name"
                                className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input
                                style={{ fontFamily: 'Heebo, sans-serif' }}
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                        <div>
                            <label htmlFor="phone" className="sr-only">Your Phone</label>
                            <input
                                style={{ fontFamily: 'Heebo, sans-serif' }}
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Your Phone"
                                className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="form_address" className="sr-only">Address</label>
                            <input
                                style={{ fontFamily: 'Heebo, sans-serif' }}
                                type="text"
                                name="form_address"
                                id="form_address"
                                placeholder="Address"
                                className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                            />
                        </div>
                    </div>
                    <div> {/* Wrapped textarea in a div for consistent spacing from space-y on form */}
                        <label htmlFor="message" className="sr-only">Your Message</label>
                        <textarea
                            style={{ fontFamily: 'Heebo, sans-serif' }}
                            name="message"
                            id="message"
                            rows={5}
                            placeholder="Your Message"
                            className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                        ></textarea>
                    </div>
                    <div> {/* Wrapped button in a div for consistent spacing from space-y on form */}
                        <button
                            type="submit"
                            style={{ fontFamily: 'Heebo, sans-serif' }}
                            className="field  text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-sky-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
    
    </div>
  );
};

export default Home;