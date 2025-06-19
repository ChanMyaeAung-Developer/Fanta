import Blog1 from "../../assets/blog1.png"
import Blog2 from "../../assets/blog2.png"
import Blog3 from "../../assets/blog3.png"
import Blog4 from "../../assets/blog4.png"
import { UpdateFollower } from "react-mouse-follower"

const Blog = () => {

    const blogData = [
        {
            id: 1,
            title: "The Fruity History of Fanta",
            text: "Did you know Fanta was born during World War II? Explore how a soda shortage led to the creation of one of the world’s most colorful soft drinks.",
            image: Blog1,
            link: '#',
        },
        {
            id: 2,
            title: "Why It’s Still a Fan Favorite",
            text: "With its bold citrus flavor and bubbly personality, Orange Fanta remains one of the most loved flavors. Find out what makes it irresistible.",
            image: Blog2,
            link: '#',
        },
        {
            id: 3,
            title: "How Fanta Gets Its Flavors",
            text: "Ever wondered how Fanta's fun flavors are made? Take a peek into the flavor lab and see how innovation meets refreshment.",
            image: Blog3,
            link: '#',
        },
        {
            id: 4,
            title: "Unique Flavors Never Tried",
            text: "From Fanta Lychee in Asia to Fanta Shokata in Europe, explore the global flavors that make Fanta a true international sensation.",
            image: Blog4,
            link: '#',
        }
    ];

    return (
        <section className="bg-gray-50">
            <div className="container py-14 ">
                <h1 className="text-3xl font-bold text-center pb-8">Blogs</h1>
                {/* card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {blogData.map(data => {
                        return (
                            <UpdateFollower
                                key={data.id}
                                mouseOptions={
                                    {
                                        backgroundColor: "black",
                                        zIndex: 99,
                                        followSpeed: 0.5,
                                        scale: 5,
                                        text: "read",
                                        textFontSize: "3px"
                                    }
                                }>
                                <div
                                    className="flex flex-col h-full p-4 shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300 text-center"
                                >
                                    {/* Image Section - Fixed Height */}
                                    <div className="flex justify-center items-center h-[180px] mb-4"> {/* Added h-[180px] for fixed height */}
                                        <img src={data.image} alt={data.title}
                                            className="max-w-[150px] object-contain w-full h-full" // Added h-full to image
                                        />
                                    </div>

                                    {/* Title Section - Fixed Height */}
                                    <div className="flex justify-center items-center h-[60px] mb-2"> {/* Added h-[60px] for fixed height */}
                                        <h1 className="text-xl font-bold line-clamp-2">{data.title}</h1>
                                    </div>

                                    {/* Body (Text) Section - Flexible Height to fill remaining space */}
                                    <div className="flex-grow flex flex-col justify-start items-center overflow-hidden"> {/* flex-grow to take remaining space, overflow-hidden to hide excess text if necessary */}
                                        <p className="line-clamp-3 text-sm text-gray-700">{data.text}</p>
                                    </div>
                                </div>
                            </UpdateFollower>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
export default Blog;