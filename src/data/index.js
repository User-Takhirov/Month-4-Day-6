import { Banners, FeaturedProducts } from "./main.js";

const hero = document.querySelector(".hero");
const featuredProducts = document.querySelector(".featuredProducts");

hero.innerHTML = Banners.map(
  (item) => `
<div class="w-[644px]">
<p class="font-[700] text-[17px] leading-[175%] mb-[12px] text-[#FB2E86]">${item.miniText}</p>
<h1 class="font-[700] text-[53px]  mb-[12px] ">${item.title}</h1>
<p class="font-[700] text-[17px] leading-[175%] text-[#8A8FB9] mb-[27px] ">${item.headerText}</p>
<button class="py-[16px] px-[40px] bg-[#FB2E86] text-white font-[600] text-[16px]">${item.headerBtn}</button>
</div>
<div>
<img src="${item.HeaderImg}">
</div>`
);

featuredProducts.innerHTML = FeaturedProducts.map(
  (item) => `
  <div>
<div>
<div class="pt-[46px] pr-[52px] pb-[12px] pl-[40px] bg-[#f6f7fb]"><img src="${item.featuredImg}"></div>
<div class="text-center bg-white shadow-xl text-[#151875]  hover:bg-[#2F1AC4] hover:text-white">
<h3 class="font-[700] text-[18px] text-[#FB2E86] hover:text-white    pt-[15px] mb-[12px] ">${item.featuredInnerTitle}</h3>
<div>
<img class="text-center mx-auto mb-[12px]" src="${item.featuredDes}"
</div>
<p class="font-[500] text-[14px]  mb-[12px] ">${item.featuredText}</p>
<p class="font-[500] text-[14px] pb-[17px]">${item.featuredPrice}</p>
</div>
</div>
</div>
</div>
`
).join("");
