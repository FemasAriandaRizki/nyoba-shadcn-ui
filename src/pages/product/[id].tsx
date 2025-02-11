import { useRouter } from "next/router";

const DetailProductPage = () => {
  const { query } = useRouter();
  return (
    <div>
      <div>Detail Product</div>
      <p>Product : {query.id}</p>
    </div>
  );
};

export default DetailProductPage;
