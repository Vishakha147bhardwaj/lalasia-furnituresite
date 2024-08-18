import { totalproductcards } from "@/Database";
import Navbar from "@/components/Navbar";
import DetailCard from "@/components/ProductDetail/DetailCard";
import RelatedCard from "@/components/ProductDetail/RelatedCard";
import Wrapper from "@/components/ProductPage/Wrapper";
import Footer from "@/components/ui/Footer";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  useEffect(() => {
    if (slug) {
      const product = totalproductcards.find(
        (product) => product.id === parseInt(slug)
      );
      setSelectedProduct(product);
    }
  }, [slug]);
  useEffect(() => {
    setRelatedItems(totalproductcards);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const updatedRelatedItems = totalproductcards.filter(
        (relatedproduct) =>
          relatedproduct.shortdescription === selectedProduct.shortdescription
      );
      setRelatedItems(updatedRelatedItems);
    }
  }, [selectedProduct]);

  return (
    <div className="flex flex-col gap-10 md:gap-20">
      <Navbar />
      <Wrapper>
        <div className="flex flex-col gap-5">
          {selectedProduct && (
            <DetailCard
              heading={selectedProduct.heading}
              shortdescription={selectedProduct.shortdescription}
              image={selectedProduct.image}
              description={selectedProduct.description}
              price={selectedProduct.price}
              colors={selectedProduct.colors}
            />
          )}

          <div>
            <RelatedCard products={relatedItems} />
          </div>
        </div>
      </Wrapper>
      <Footer />
    </div>
  );
};

export default ProductDetail;
