import AdminForm from "./views/AdminForm.vue";
import TheProducts from "./views/TheProducts.vue";
import ProductsDetails from "./views/ProductsDetails.vue";
import TheCart from "./views/TheCart.vue";

const routes = [
  {
    path: "/products",
    name: "proucts",
    component: TheProducts,
    children: [
      {
        path: ":id",
        name: "product-details",
        component: ProductsDetails,
        props: true,
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
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    redirect: "/products",
  },
];

export default routes;
