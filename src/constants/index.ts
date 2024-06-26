export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a minimal NestJS Dashboard",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Contact Me",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "MeetMate",
    des: "Simplify your video conferencing experience with MeetMate. Seamlessly connect with colleagues and friends.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/BehzadBarzin/meetmate",
    deplLink: "https://meetmate-smoky.vercel.app/",
  },
  {
    id: 2,
    title: "EkoPods",
    des: "A Podcasting platform for those who love sharing ideas. Through the power of AI generate ideas and share them with the world.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://github.com/BehzadBarzin/ekopods",
    deplLink: "https://ekopods.vercel.app/",
  },
  {
    id: 3,
    title: "CustomGripz",
    des: "Carry your precious memories with you by creating your own custom phone cases. It's a fun and easy-to-use tool that lets you create your own custom phone cases with just a few clicks.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/BehzadBarzin/customgripz",
    deplLink:
      "https://customgripz-eextpsozp-behzads-projects-1a38c24f.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website Clone",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.png",
    iconLists: ["/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/BehzadBarzin/apple-clone",
    deplLink:
      "https://apple-clone-cngenyw5s-behzads-projects-1a38c24f.vercel.app/",
  },
  {
    id: 5,
    title: "IntelliSynth - Modern AI Assistant",
    des: "A gorgeous minimalistic website landing page for a modern AI Assistant.",
    img: "/p5.png",
    iconLists: ["/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/BehzadBarzin/intellisynth",
    deplLink:
      "https://intellisynth-q0h2saqjl-behzads-projects-1a38c24f.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with John was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. John's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, John is the ideal partner.",
    name: "John Doe",
    title: "Director of XYZ Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for Android platform using Java.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 2,
    title: "Junior Fullstack Engineer",
    desc: "Development of a web-based platforms using React.js, PHP, and Node.js, enhancing the user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of mobile and web apps for clients, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Senior Fullstack Developer",
    desc: "Developed and maintained both server and client applications using modern frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
