import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableProducts from "@/components/Tables/TableProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next Tables Page | NextAdmin - Next Dashboard Kit",
  description: "This is Next Tables page for NextAdmin Dashboard Kit",
};

const ProductsPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Products" />

      <div className="flex flex-col gap-10">
        <TableProducts />
      </div>
    </DefaultLayout>
  );
};

export default ProductsPage;
