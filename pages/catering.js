import React from "react";
import Catering from "../src/components/Catering/index";
import PageHead from "../src/components/Helpers/PageHead";
import Layout from "../src/components/Partials/Layout";
export default function CateringPage(data) {
  const { seoSetting } = data.data;
  return (
    <>
      <PageHead
        title={`${seoSetting.seo_title}`}
        metaDes={seoSetting.seo_description}
      />
      <Layout childrenClasses="pt-0 pb-0">
        {/* <Sellers sellersData={data.data} /> */}
        <Catering sellersData={data.data} />
      </Layout>
    </>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/sellers`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
