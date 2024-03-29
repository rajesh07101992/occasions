import CardCustom from "./Cards/CardCustom";
import DataIteration from "./DataIteration";
import ViewMoreTitle from "./ViewMoreTitle";

export default function CustomSTyle({
    className,
    sectionTitle,
    seeMoreUrl,
    products = [],
}) {
    const p = [
        {
            "id": 73,
            "name": "test5675765",
            "short_name": "test567",
            "slug": "test5675765",
            "thumb_image": "uploads/custom-images/test5675765-2023-08-07-08-52-01-8877.jpg",
            "qty": 13,
            "sold_qty": 0,
            "price": 150,
            "offer_price": 120,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "1,13",
            "sub_category_id": "1,10",
            "child_category_id": "0",
            "brand_id": 8,
            "averageRating": "0",
            "totalSold": 0,
            "active_variants": []
        },
        {
            "id": 71,
            "name": "sd",
            "short_name": "sd",
            "slug": "sndk",
            "thumb_image": "uploads/custom-images/sd-2023-08-05-12-55-59-4640.png",
            "qty": 5,
            "sold_qty": 0,
            "price": 5,
            "offer_price": 5,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "1,2",
            "sub_category_id": "1,10",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": 0,
            "active_variants": []
        },
        {
            "id": 69,
            "name": "Keep it Green",
            "short_name": "Keep It Green",
            "slug": "keep-it-green",
            "thumb_image": "uploads/custom-images/keep-it-green-2023-04-04-02-54-37-6650.webp",
            "qty": -1,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "1,2",
            "sub_category_id": "10",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": "2",
            "active_variants": []
        },
        {
            "id": 68,
            "name": "Vintage Fleure",
            "short_name": "Vintage Fleure",
            "slug": "vintage-fleure",
            "thumb_image": "uploads/custom-images/vintage-fleure-2023-04-04-02-54-47-8612.webp",
            "qty": 0,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "1",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": "1",
            "active_variants": []
        },
        {
            "id": 67,
            "name": "My Desire",
            "short_name": "My Desire",
            "slug": "my-desire",
            "thumb_image": "uploads/custom-images/my-desire-2023-04-04-02-55-04-6818.webp",
            "qty": -1,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "1",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": "2",
            "active_variants": []
        },
        {
            "id": 62,
            "name": "Birthday Bash",
            "short_name": "Birthday Bash",
            "slug": "birthday-bash",
            "thumb_image": "uploads/custom-images/birthday-bash-2023-04-04-04-38-33-1356.webp",
            "qty": 3,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 0,
            "is_best": 0,
            "category_id": "3",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": "10",
            "active_variants": []
        },
        {
            "id": 61,
            "name": "Birthday Gift",
            "short_name": "Birthday Gift",
            "slug": "birthday-gift",
            "thumb_image": "uploads/custom-images/birthday-gift-2023-04-04-03-22-24-3064.jpg",
            "qty": 1,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 1,
            "is_top": 0,
            "is_best": 0,
            "category_id": "3",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": 0,
            "active_variants": []
        },
        {
            "id": 58,
            "name": "Keep it Lovely",
            "short_name": "Keep it Lovely",
            "slug": "keep-it-lovely",
            "thumb_image": "uploads/custom-images/keep-it-lovely-2023-04-04-03-24-10-8240.jpg",
            "qty": 1,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 1,
            "is_top": 0,
            "is_best": 0,
            "category_id": "3",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": 0,
            "active_variants": []
        },
        {
            "id": 56,
            "name": "Bouquet Of Flowers",
            "short_name": "Bouquet Of Flowers",
            "slug": "bouquet-of-flowers",
            "thumb_image": "uploads/custom-images/bouquet-of-flowers-2023-04-04-03-25-15-3595.jpg",
            "qty": 1,
            "sold_qty": 0,
            "price": 120,
            "offer_price": 100,
            "is_undefine": 1,
            "is_featured": 0,
            "new_product": 0,
            "is_top": 1,
            "is_best": 0,
            "category_id": "1",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": 0,
            "active_variants": []
        },
        {
            "id": 35,
            "name": "Pink Bouquet",
            "short_name": "Pink",
            "slug": "pink-bouquet",
            "thumb_image": "uploads/custom-images/pink-bouquet-2023-07-17-01-19-20-9028.webp",
            "qty": 78,
            "sold_qty": 0,
            "price": 1235,
            "offer_price": 1200,
            "is_undefine": 1,
            "is_featured": 1,
            "new_product": 0,
            "is_top": 0,
            "is_best": 1,
            "category_id": "1",
            "sub_category_id": "0",
            "child_category_id": "0",
            "brand_id": 0,
            "averageRating": "0",
            "totalSold": "1",
            "active_variants": []
        }
    ]
    const rs = p.slice(0, 4).map((item) => {
        return {
            id: item.id,
            title: item.name,
            slug: item.slug,
            image: process.env.NEXT_PUBLIC_BASE_URL + item.thumb_image,
            price: item.price,
            offer_price: item.offer_price,
            campaingn_product: null,
            review: parseInt(item.averageRating),
            variants: item.active_variants,
        };
    });
    return (
        <div className={`section-style-one ${className || ""}`}>
            <ViewMoreTitle categoryTitle={sectionTitle} seeMoreUrl={seeMoreUrl}>
                <div className="products-section w-full">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5">
                        <DataIteration datas={rs} startLength={0} endLength={rs.length}>
                            {({ datas }) => (
                                <div data-aos="fade-up" key={datas.id} className="item">
                                    <CardCustom datas={datas} />
                                </div>
                            )}
                        </DataIteration>

                    </div>
                </div>
            </ViewMoreTitle>
        </div>
    );
}
