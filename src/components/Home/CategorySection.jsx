import Image from "next/image";
import Link from "next/link";
import React from "react";
import SectionStyleThree from "../Helpers/SectionStyleThree";

function CategorySection({
    sectionTitle,
    categories,
}) {
    console.log(categories);
    const subCategories = [
        {
            "id": 1,
            "name": "Birthday",
            "slug": "birthday",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/birthday.webp"
        },
         {
            "id": 2,
            "name": "Get Well",
            "slug": "get-well",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/get-weel.webp"
        },
        {
            "id": 3,
            "name": "Mother's Day",
            "slug": "mothers-day",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/mothers-day.webp"
        },
        {
            "id": 4,
            "name": "New Baby",
            "slug": "new-baby",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/new-baby.webp"
        },
        {
            "id": 5,
            "name": "Congratulations",
            "slug": "congratulations",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/congo.webp"
        },
        {
            "id": 6,
            "name": "Love",
            "slug": "love",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/love.webp"
        },
        {
            "id": 7,
            "name": "Wedding",
            "slug": "wedding",
            "icon": "fas fa-anchor",
            "image": "uploads/custom-images/wedding.webp"
        }
    ]
    return (
        <div data-aos="fade-up" className="category-section-wrapper w-full">
            <div className="container mx-auto pb-[60px]">
                <div>
                    {/* <div className="section-title flex justify-between items-center mb-5">
                       <div>
                           <h1 className="sm:text-3xl text-xl font-600 text-qblacktext">
                               {sectionTitle}
                           </h1>
                       </div>
                    </div> */}
                    <SectionStyleThree

                        sectionTitle='Shop by Category'

                        className="new-products md:mb-[30px] mb-[30px]"
                    />
                    <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        {categories && categories.length > 0 &&
                            categories
                                .slice(0, categories.length > 8 ? 8 : categories.length)
                                .map((item, i) => (
                                    <div
                                        data-aos="fade-left"
                                        data-aos-delay={i + "00"}
                                        key={i}
                                        className="item w-full cursor-pointer group"
                                    >
                                        <Link
                                            href={{
                                                pathname: "/products",
                                                query: { category: item.slug },
                                            }}
                                            passhref
                                        >
                                            <a rel="noopener noreferrer">
                                                <div
                                                    className="w-full h-[400px] relative rounded bg-white flex justify-center items-center">
                                                    <div
                                                        className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                                                        <Image
                                                            layout="fill"
                                                            // objectFit="scale-down"
                                                            // objectFit="contain"
                                                            className="circleImage"
                                                            src={
                                                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                                                    {item.name}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                    </div>

                    <div className="pb-[60px]"></div>
                    <SectionStyleThree

                        sectionTitle='Shop by Flower Bouquet'

                        className="new-products md:mb-[30px] mb-[30px]"
                    />

<div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        {subCategories && subCategories.length > 0 &&
                            subCategories
                                .slice(0, subCategories.length > 8 ? 8 : subCategories.length)
                                .map((item, i) => (
                                    <div
                                        data-aos="fade-left"
                                        // data-aos-delay={i + "00"}
                                        key={i}
                                        className="item w-full cursor-pointer group"
                                    >
                                        <Link
                                            href={{
                                                pathname: "/products",
                                                query: { sub_category: item.slug },
                                            }}
                                            passhref
                                        >
                                            <a rel="noopener noreferrer">
                                                <div
                                                    className="w-full h-[400px] relative rounded bg-white flex justify-center items-center">
                                                    <div
                                                        className="w-full h-full relative transform scale-100 group-hover:scale-110 transition duration-300 ease-in-out">
                                                        <Image
                                                            layout="fill"
                                                            objectFit="scale-down"
                                                            className="borderCross"
                                                            src={
                                                                process.env.NEXT_PUBLIC_BASE_URL + item.image
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-base text-qgray text-center mt-5 group-hover:text-qgreen transition duration-300 ease-in-out">
                                                    {item.name}
                                                </p>
                                            </a>
                                        </Link>
                                    </div>
                                ))}
                    </div>                                   
                </div>
            </div>
        </div>
    );
}

export default CategorySection;
