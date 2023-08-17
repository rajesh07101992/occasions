import Image from "next/image";
import Link from "next/link";
import isMultivendor from "../../../Middleware/isMultivendor";
import CustomSTyle from "../Helpers/CustomSTyle";
import PageTitle from "../Helpers/PageTitle";
import ServeLangItem from "../Helpers/ServeLangItem";
import Star from "../Helpers/icons/Star";
function Catering({ sellersData }) {
  const { sellers } = sellersData;


  const selldata = sellers.data.filter(user => user.catering_service === 0);
  console.log(selldata)
  return (
    <>
      <div className="sallers-page-wrapper w-full mb-[60px]">
        <PageTitle
          title="All Caterers "
          breadcrumb={[
            { name: ServeLangItem()?.home, path: "/" },
            { name: 'Catering', path: "/catering" },
          ]}
        />
      </div>

      <div className="content-wrapper w-full mb-[60px]">
        <div className="container-x mx-auto w-full">
          <div className="grid lg:grid-cols-1 grid-cols-1 lg:gap-[60px] gap-5">
            {selldata &&
              selldata.length > 0 &&
              selldata.map((seller, i) => (
                <>

                  <div key={i} data-aos="fade-up" className="item w-full">
                    <div
                      className="w-full sm:h-[328px] sm:p-[30px] p-5"
                      style={{
                        background: `url(/assets/images/sallers-cover-1.png) no-repeat`,
                        backgroundSize: "cover",
                      }}
                    >
                      <div className="flex sm:flex-row flex-col-reverse sm:items-center justify-between w-full h-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="">
                            <h1 className="text-[30px] font-semibold text-qblack">
                              {seller.shop_name}
                            </h1>
                            <div className="flex space-x-2 items-center mb-[30px]">
                              <div className="flex ">
                                {Array.from(
                                  Array(parseInt(seller.averageRating)),
                                  () => (
                                    <span
                                      key={
                                        parseInt(seller.averageRating) +
                                        Math.random()
                                      }
                                    >
                                      <Star />
                                    </span>
                                  )
                                )}
                                {parseInt(seller.averageRating) < 5 && (
                                  <>
                                    {Array.from(
                                      Array(5 - parseInt(seller.averageRating)),
                                      () => (
                                        <span
                                          key={
                                            parseInt(seller.averageRating) +
                                            Math.random()
                                          }
                                          className="text-gray-500"
                                        >
                                          <Star defaultValue={false} />
                                        </span>
                                      )
                                    )}
                                  </>
                                )}
                              </div>

                              <span className="text-[15px] font-bold text-qblack ">
                                ({parseInt(seller.averageRating)})
                              </span>
                            </div>

                            <div className="saller-text-details">
                              <ul>
                                <li className="text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal">
                                  <span>
                                    <svg
                                      width="16"
                                      height="12"
                                      viewBox="0 0 16 12"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M0.00250844 3.36719C0.156817 3.46656 0.260523 3.53094 0.362354 3.59906C2.3971 4.95656 4.43123 6.31406 6.46598 7.67156C7.55426 8.39781 8.44825 8.39844 9.53591 7.67281C11.5794 6.30969 13.6217 4.94531 15.6652 3.58219C15.7582 3.52031 15.8544 3.46219 15.9856 3.37969C15.9913 3.50031 15.9994 3.58781 15.9994 3.67594C16 5.91656 16.0013 8.15656 15.9994 10.3972C15.9988 11.3853 15.3903 11.9984 14.4038 11.9991C10.135 12.0009 5.86624 12.0009 1.59682 11.9991C0.612871 11.9984 0.00313317 11.3834 0.00250844 10.3959C0.00125898 8.15469 0.00250844 5.91469 0.00250844 3.67406C0.00250844 3.59156 0.00250844 3.50844 0.00250844 3.36719Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M8.00103 0.00122449C10.1557 0.00122449 12.3104 -0.00252551 14.4651 0.00309949C15.366 0.00559949 16.0345 0.6806 15.9963 1.53997C15.9732 2.05935 15.7058 2.4331 15.2792 2.71622C13.4156 3.95435 11.5564 5.1981 9.6953 6.43998C9.42729 6.61873 9.15928 6.79873 8.89002 6.97685C8.29715 7.3706 7.70428 7.37185 7.11141 6.97623C4.97483 5.54935 2.83637 4.12435 0.699789 2.6956C0.100046 2.29435 -0.126731 1.68935 0.0681849 1.04747C0.256229 0.42685 0.820362 0.00559949 1.50507 0.00372449C3.33741 -0.00252551 5.16912 0.00122449 7.00146 0.00122449C7.33506 0.00122449 7.66805 0.00122449 8.00103 0.00122449Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  <span>{seller.email}</span>
                                </li>
                                <li className="text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal">
                                  <span>
                                    <svg
                                      width="15"
                                      height="14"
                                      viewBox="0 0 15 14"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.5085 14.0001C10.5529 13.9553 9.6013 13.6377 8.6926 13.1988C6.27351 12.0295 4.30056 10.3639 2.60467 8.39981C1.65664 7.30216 0.854189 6.11977 0.351704 4.78105C0.0963526 4.09939 -0.084448 3.40133 0.0405862 2.66719C0.106332 2.27908 0.266587 1.9347 0.568313 1.65372C1.00388 1.24812 1.43592 0.838683 1.87618 0.437996C2.50077 -0.129964 3.37366 -0.152376 4.00587 0.410664C4.71205 1.03985 5.40649 1.68215 6.07862 2.34304C6.80124 3.05367 6.54589 4.09666 5.5826 4.47384C4.70383 4.81768 4.37452 5.42773 4.72966 6.25151C5.4106 7.8324 6.63746 8.94153 8.32865 9.57454C9.12171 9.87137 9.85842 9.52698 10.1918 8.7923C10.6145 7.86082 11.7292 7.63069 12.5129 8.33093C13.2114 8.9552 13.8936 9.59477 14.5669 10.2425C15.1533 10.8067 15.1416 11.6299 14.5475 12.2077C14.1014 12.6417 13.64 13.0627 13.1792 13.483C12.7383 13.8864 12.1842 13.999 11.5085 14.0001Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  <span>{seller.phone}</span>
                                </li>
                                <li className="text-black flex space-x-5 rtl:space-x-reverse items-center leading-9 text-base font-normal">
                                  <span>
                                    <svg
                                      width="14"
                                      height="19"
                                      viewBox="0 0 14 19"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M6.97116 2.68819e-05C2.96055 0.0118815 -0.248362 3.57049 0.0150623 7.72998C0.107867 9.19477 0.60259 10.5136 1.45069 11.6909C3.13831 14.0337 4.82379 16.3787 6.5107 18.7214C6.77412 19.0875 7.21745 19.0934 7.47659 18.734C9.17135 16.3816 10.8761 14.0359 12.5566 11.6724C15.2879 7.83075 14.0101 2.65546 9.84454 0.632026C9.03428 0.239342 7.93562 -0.00293677 6.97116 2.68819e-05ZM6.99257 9.29479C5.81395 9.29035 4.85877 8.29975 4.85734 7.08094C4.85592 5.8614 5.80752 4.86931 6.98686 4.86116C8.17762 4.85301 9.14708 5.85769 9.13994 7.09428C9.13351 8.3116 8.16977 9.29924 6.99257 9.29479Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  <span>{seller.address}</span>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <Link
                              href={{
                                pathname: "/seller-products",
                                query: { seller: seller.slug },
                              }}
                            >
                              <a rel="noopener noreferrer">
                                <div className="w-[116px] h-[40px] cursor-pointer">
                                  <div className="yellow-btn flex justify-center">
                                    <div className="flex space-x-2 rtl:space-x-reverse items-center">
                                      <span>{ServeLangItem()?.Shop_Now}</span>
                                      <span>
                                        <svg
                                          className={`transform rtl:rotate-180 fill-current`}
                                          width="7"
                                          height="11"
                                          viewBox="0 0 7 11"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <rect
                                            x="1.0918"
                                            y="0.636719"
                                            width="6.94219"
                                            height="1.54271"
                                            transform="rotate(45 1.0918 0.636719)"

                                          />
                                          <rect
                                            x="6.00195"
                                            y="5.54492"
                                            width="6.94219"
                                            height="1.54271"
                                            transform="rotate(135 6.00195 5.54492)"

                                          />
                                        </svg>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </Link>
                          </div>
                        </div>

                        <div>
                          <div className="flex sm:justify-center justify-start">
                            <div className="w-[170px] h-[170px] rounded-full bg-white mb-[20px] flex justify-center items-center relative overflow-hidden">
                              <Image
                                layout="fill"
                                objectFit="scale-down"
                                src={`${process.env.NEXT_PUBLIC_BASE_URL + seller.logo
                                  }`}
                                alt=""
                              />
                            </div>
                          </div>

                          <h1 className="sm:block hidden text-[30px] font-semibold  text-qblack text-center leading-none">
                            {seller.shop_name}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CustomSTyle />
                  <div className="flex justify-center mb-[60px]">
                    <Link href='/' className="text-center">
                      <a rel="noopener noreferrer">
                        <div className="flex space-x-2 items-center cursor-pointer">
                          <p className="text-base font-600 text-qblack">
                            View More
                          </p>
                          <span className="animate-right-dir">
                            <svg
                              className={`transform rtl:rotate-180`}
                              width="17"
                              height="14"
                              viewBox="0 0 17 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.0225 6.00243C13.9998 6.03738 13.9772 6.06941 13.9545 6.10436C13.8724 6.10727 13.7904 6.11601 13.7083 6.11601C9.93521 6.11601 6.16215 6.11601 2.38909 6.11601C1.87111 6.11601 1.35313 6.10728 0.835147 6.12475C0.351131 6.14514 0.00863998 6.51501 0.000148475 6.981C-0.00834303 7.45864 0.3483 7.83725 0.837977 7.8722C0.956858 7.88094 1.07857 7.87511 1.20028 7.87511C5.33565 7.87803 9.46818 7.87803 13.6035 7.88094C13.7253 7.88094 13.8498 7.88094 13.9715 7.88094C14.0026 7.93627 14.031 7.9887 14.0621 8.04403C13.9404 8.12267 13.7988 8.18383 13.697 8.28576C12.3355 9.67499 10.9797 11.0671 9.62669 12.4651C9.26155 12.8437 9.25306 13.3767 9.58423 13.732C9.91823 14.0902 10.4419 14.099 10.8127 13.7233C12.7855 11.702 14.7556 9.6779 16.7199 7.64794C17.0907 7.26351 17.0851 6.73053 16.7171 6.34901C14.7697 4.33652 12.8167 2.32987 10.858 0.329035C10.7278 0.195063 10.5466 0.0873038 10.3683 0.0319679C10.0088 -0.0757916 9.63235 0.116428 9.44554 0.451356C9.26438 0.78046 9.31533 1.20859 9.60687 1.51148C10.6768 2.62111 11.7524 3.72492 12.8308 4.82581C13.2271 5.2219 13.6262 5.60925 14.0225 6.00243Z"
                                fill="white"
                              />
                              <path
                                d="M14.0225 6.00241C13.6262 5.60923 13.2243 5.22188 12.8336 4.82288C11.7552 3.72199 10.6796 2.61818 9.60971 1.50855C9.31816 1.20566 9.26721 0.77753 9.44837 0.448427C9.63518 0.113498 10.0116 -0.0787213 10.3711 0.0290382C10.5466 0.0814617 10.7278 0.192134 10.8608 0.326105C12.8195 2.32694 14.7697 4.33359 16.7199 6.34608C17.0879 6.72469 17.0936 7.26058 16.7228 7.64501C14.7584 9.67497 12.7884 11.6991 10.8155 13.7203C10.4475 14.0989 9.92106 14.0873 9.58706 13.7291C9.25589 13.3737 9.26155 12.8408 9.62952 12.4622C10.9825 11.0642 12.3383 9.67206 13.6998 8.28284C13.8017 8.1809 13.9404 8.11974 14.0649 8.0411C14.0338 7.98577 14.0055 7.93334 13.9743 7.87801C13.8526 7.87801 13.7281 7.87801 13.6064 7.87801C9.47101 7.8751 5.33848 7.8751 1.20311 7.87218C1.0814 7.87218 0.962519 7.87801 0.840808 7.86927C0.3483 7.84015 -0.00834304 7.45862 0.00014847 6.98098C0.00863998 6.515 0.351131 6.14512 0.832316 6.12764C1.3503 6.10726 1.86828 6.11891 2.38626 6.11891C6.16215 6.11599 9.93521 6.11599 13.7083 6.11599C13.7904 6.11599 13.8724 6.10726 13.9574 6.10143C13.9772 6.0694 13.9998 6.03445 14.0225 6.00241Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </a>
                    </Link>
                  </div>
                </>


              ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default isMultivendor(Catering);
