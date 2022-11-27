import AdminForm from "./views/AdminForm.vue";
import TheProducts from "./views/TheProducts.vue";
import ProductsDetails from "./views/ProductsDetails.vue";
import TheCart from "./views/TheCart.vue";

export const routes = [
  {
    path: "/products",
    name: "proucts",
    component: TheProducts,
    children: [
      {
        path: ":id",
        component: ProductsDetails,
      },
    ],
  },
  {
    path: "/cart",
    name: "cart",
    component: TheCart,
  },
  // admin component: in the future will need to know how authentication works to guard this
  {
    path: "/addproduct",
    name: "addproduct",
    component: AdminForm,
  },
];
