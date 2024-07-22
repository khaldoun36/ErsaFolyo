// Code generated by Slice Machine. DO NOT EDIT.

import { defineAsyncComponent } from "vue";
import { defineSliceZoneComponents } from "@prismicio/vue";

export const components = defineSliceZoneComponents({
  about_us: defineAsyncComponent(() => import("./AboutUs/index.vue")),
  applications: defineAsyncComponent(() => import("./Applications/index.vue")),
  contact_form: defineAsyncComponent(() => import("./ContactForm/index.vue")),
  contact_us: defineAsyncComponent(() => import("./ContactUs/index.vue")),
  hero_section: defineAsyncComponent(() => import("./HeroSection/index.vue")),
  product_catalog: defineAsyncComponent(
    () => import("./ProductCatalog/index.vue"),
  ),
  rich_text: defineAsyncComponent(() => import("./RichText/index.vue")),
  sub_product: defineAsyncComponent(() => import("./SubProduct/index.vue")),
});
