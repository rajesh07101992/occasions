import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ServeLangItem from "../../../Helpers/ServeLangItem";
import Multivendor from "../../../Shared/Multivendor";

export default function Navbar({ className }) {
  const { websiteSetup } = useSelector((state) => state.websiteSetup);
  const categoryList = websiteSetup && websiteSetup.payload.productCategories;
  const mageMenuList = websiteSetup && websiteSetup.payload.megaMenuCategories;
  const megaMenuBanner = websiteSetup && websiteSetup.payload.megaMenuBanner;
  const customPages = websiteSetup && websiteSetup.payload.customPages;
  const [categoryToggle, setToggle] = useState(false);
  const [subCatHeight, setHeight] = useState(null);
  const handler = () => {
    setToggle(!categoryToggle);
  };
  // Unhide for category dropdown
  // useEffect(() => {
  //   let categorySelector = document.querySelector(".category-dropdown");
  //   setHeight(categorySelector.offsetHeight);
  // }, [categoryToggle]);

  // Header Class
  const router = useRouter();
  const isHome = router.pathname === '/';
  const bgClass = isHome ? 'zIndex10' : 'bg-cream border-b border-qgray-border';

  return (
    <div
      className={`nav-widget-wrapper w-full  h-[60px] relative z-30 ${bgClass} ${className || ""
        }`}
    >
      <div className="container mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-center items-center">
            <div className="category-and-nav flex xl:rtl:space-x-reverse space-x-7 rtl:space-x-reverse space-x-3 items-center">
              {/* Unhide for categorydropdown */}
              {/* <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                <button
                  onClick={handler}
                  type="button"
                  className="w-full h-full flex justify-between items-center"
                >
                  <div className="flex rtl:space-x-reverse space-x-3 items-center">
                    <span>
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="14" height="1" fill="#1D1D1D" />
                        <rect y="8" width="14" height="1" fill="#1D1D1D" />
                        <rect y="4" width="10" height="1" fill="#1D1D1D" />
                      </svg>
                    </span>
                    <span className="text-sm font-600 text-qblacktext">
                      {ServeLangItem()?.All_Categories}
                    </span>
                  </div>
                  <div>
                    <Arrow
                      width="5.78538"
                      height="1.28564"
                      className="fill-current text-qblacktext"
                    />
                  </div>
                </button>
                {categoryToggle && (
                  <>
                    <div
                      className="fixed top-0 left-0 w-full h-full -z-10"
                      onClick={handler}
                    ></div>
                  </>
                )}
                <div
                  style={{
                    boxShadow: " 0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                  }}
                  className={`category-dropdown w-full absolute left-0 top-[53px]  ${
                    categoryToggle ? "block" : "hidden"
                  }`}
                >
                  <ul className="categories-list relative">
                    {categoryList &&
                      categoryList.map((item) => (
                        <li key={item.id} className="category-item">
                          <Link
                            href={{
                              pathname: "/products",
                              query: { category: item.slug },
                            }}
                            passHref
                          >
                            <a rel="noopener noreferrer">
                              <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                <div className="flex items-center rtl:space-x-reverse space-x-6">
                                  <span>
                                    <FontAwesomeCom
                                      className="w-4 h-4"
                                      icon={item.icon}
                                    />
                                  </span>
                                  <span className="text-xs font-400">
                                    {item.name}
                                  </span>
                                </div>
                                <div>
                                  <span>
                                    <svg
                                      className={`transform rtl:rotate-180`}
                                      width="6"
                                      height="9"
                                      viewBox="0 0 6 9"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <rect
                                        x="1.49805"
                                        y="0.818359"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(45 1.49805 0.818359)"
                                        fill="#1D1D1D"
                                      />
                                      <rect
                                        x="5.58984"
                                        y="4.90918"
                                        width="5.78538"
                                        height="1.28564"
                                        transform="rotate(135 5.58984 4.90918)"
                                        fill="#1D1D1D"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </a>
                          </Link>
                          <div
                            className={`sub-category-lvl-two absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                              item.active_sub_categories.length > 0
                                ? "bg-white"
                                : ""
                            }`}
                            style={{ height: `${subCatHeight}px` }}
                          >
                            <ul className="">
                              {item.active_sub_categories.length > 0 &&
                                item.active_sub_categories.map((subItem) => (
                                  <li
                                    key={subItem.id}
                                    className="category-item"
                                  >
                                    <Link
                                      href={{
                                        pathname: "/products",
                                        query: { sub_category: subItem.slug },
                                      }}
                                      passHref
                                    >
                                      <a rel="noopener noreferrer">
                                        <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                          <div>
                                            <span className="text-xs font-400">
                                              {subItem.name}
                                            </span>
                                          </div>
                                          <div>
                                            <span>
                                              <svg
                                                className={`transform rtl:rotate-180`}
                                                width="6"
                                                height="9"
                                                viewBox="0 0 6 9"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <rect
                                                  x="1.49805"
                                                  y="0.818359"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(45 1.49805 0.818359)"
                                                  fill="#1D1D1D"
                                                />
                                                <rect
                                                  x="5.58984"
                                                  y="4.90918"
                                                  width="5.78538"
                                                  height="1.28564"
                                                  transform="rotate(135 5.58984 4.90918)"
                                                  fill="#1D1D1D"
                                                />
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </a>
                                    </Link>
                                    <div
                                      className={`sub-category-lvl-three absolute ltr:left-[270px] rtl:right-[270px] top-0 z-10 w-[270px] ${
                                        subItem.active_child_categories.length >
                                        0
                                          ? "bg-white"
                                          : ""
                                      }`}
                                      style={{ height: `${subCatHeight}px` }}
                                    >
                                      <ul className="">
                                        {subItem.active_child_categories
                                          .length > 0 &&
                                          subItem.active_child_categories.map(
                                            (subsubitem) => (
                                              <li
                                                key={subsubitem.id}
                                                className="category-item"
                                              >
                                                <Link
                                                  href={{
                                                    pathname: "/products",
                                                    query: {
                                                      child_category:
                                                        subsubitem.slug,
                                                    },
                                                  }}
                                                  passHref
                                                >
                                                  <a rel="noopener noreferrer">
                                                    <div className=" flex justify-between items-center px-5 h-10 transition-all duration-300 ease-in-out cursor-pointer">
                                                      <div>
                                                        <span className="text-xs font-400">
                                                          {subsubitem.name}
                                                        </span>
                                                      </div>
                                                    </div>
                                                  </a>
                                                </Link>
                                              </li>
                                            )
                                          )}
                                      </ul>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              </div> */}
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 rtl:space-x-reverse space-x-5">
                  <li>
                    <Link href="/" passHref>
                      {/* <Link href="/sellers" passHref> */}
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>Home</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products" passHref>
                      {/* <Link href="/sellers" passHref> */}
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>All Products</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" passHref>
                      {/* <Link href="/sellers" passHref> */}
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>Blogs</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                      {/* <Link href="/sellers" passHref> */}
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>About</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref>
                      {/* <Link href="/sellers" passHref> */}
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">

                          <span>{ServeLangItem()?.Contact}</span>
                        </span>
                      </a>
                    </Link>
                  </li>


                  <li>

                    <Link href="/catering" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          {/* <span>{ServeLangItem()?.Sellers}</span> */}
                          <span>Catering</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  {/* <li>
            
                    <Link href="/sellers" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>{ServeLangItem()?.Sellers}</span>
                        </span>
                      </a>
                    </Link>
                  </li> */}
                  {/* <li>
                
                    <Link href="/blogs" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span className="capitalize">
                            {ServeLangItem()?.blogs}
                          </span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>{ServeLangItem()?.About}</span>
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref>
                      <a rel="noopener noreferrer">
                        <span className="flex items-center text-sm font-600 cursor-pointer ">
                          <span>{ServeLangItem()?.Contact}</span>
                        </span>
                      </a>
                    </Link>
                  </li> */}
                  <li className="relative">
                    {/* <span className="flex items-center text-sm font-600 cursor-pointer ">
                      <span>{ServeLangItem()?.Pages}</span>
                      <span className="ml-1.5 ">
                        <Arrow className="fill-current" />
                      </span>
                    </span> */}
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div
                        className="w-full bg-white flex justify-between items-center "
                        style={{
                          boxShadow: "0px 15px 50px 0px rgba(0, 0, 0, 0.14)",
                        }}
                      >
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li>
                                  <Link href="/privacy-policy" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Privacy_Policy}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/terms-condition" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.Term_and_Conditions}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {Multivendor() === 1 && (
                                  <li>
                                    <Link
                                      href="seller-terms-condition"
                                      passHref
                                    >
                                      <a rel="noopener noreferrer">
                                        <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                          {
                                            ServeLangItem()
                                              ?.Seller_terms_and_conditions
                                          }
                                        </span>
                                      </a>
                                    </Link>
                                  </li>
                                )}
                                <li>
                                  <Link href="/faq" passHref>
                                    <a rel="noopener noreferrer">
                                      <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                        {ServeLangItem()?.FAQ}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                                {customPages &&
                                  customPages.length > 0 &&
                                  customPages.map((item, i) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <React.Fragment key={i}>
                                      <li>
                                        <Link
                                          href={`/pages?custom=${item.slug}`}
                                          passHref
                                        >
                                          <a rel="noopener noreferrer">
                                            <span className="text-qgray text-sm font-400 border-b border-transparent hover:border-qyellow hover:text-qyellow cursor-pointer">
                                              {item.page_name}
                                            </span>
                                          </a>
                                        </Link>
                                      </li>
                                    </React.Fragment>
                                  ))}

                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {Multivendor() === 1 && (
              <div className="become-seller-btn">
                <Link href="/become-seller" passHref>
                  <a rel="noopener noreferrer">
                    <div className=" w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                      <div className="flex rtl:space-x-reverse space-x-2 items-center">
                        <span className="text-sm font-600">
                          {ServeLangItem()?.Become_seller}
                        </span>
                        <span className="transform rtl:rotate-180 ">
                          <svg
                            width="6"
                            height="10"
                            viewBox="0 0 6 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current"
                          >
                            <rect
                              x="1.08984"
                              width="6.94106"
                              height="1.54246"
                              transform="rotate(45 1.08984 0)"
                            />
                            <rect
                              x="6"
                              y="4.9082"
                              width="6.94106"
                              height="1.54246"
                              transform="rotate(135 6 4.9082)"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
