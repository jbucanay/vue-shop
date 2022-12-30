import AdminForm from "./views/AdminForm.vue";
import TheProducts from "./views/TheProducts.vue";
import TheCart from "./views/TheCart.vue";
import LoginUser from "./views/LoginUser.vue";
import LogoutUser from "./views/LogoutUser.vue";
import ProductDetails from "./views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: LoginUser,
    meta: { requiresAuth: false },
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutUser,
    meta: { requiresAuth: true },
  },
  {
    path: "/products",
    name: "proucts",
    component: TheProducts,
  },
  {
    path: "/products/:id",
    name: "productDetails",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: TheCart,
  },

  {
    path: "/addproduct",
    name: "addproduct",
    component: AdminForm,
    meta: { requiresAuth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    redirect: "/products",
  },
];

export default routes;
