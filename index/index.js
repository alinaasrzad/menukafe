import { maktils } from "./maktil.js";
import { caffees } from "./cafee.js";

console.log(maktils);
{
  /*  */
}

const maktilsElement = document.querySelector("#maktil");

maktils.forEach((maktil) => {
  maktilsElement.innerHTML += `<div
class="flex-row bg-orange-200 rounded-xl  w-72 pb-5 shad m-5 opacity-70"
>
<div><img class="rounded-xl w-72  aspect-[6//4]" src="${maktil.pic}" alt="ice latte" /></div>
<p class="text-center font-semibold m-3"> ${maktil.name}</p>
<br>
<div class="flex flex-row-reverse">
<p class="text-left font-semibold  mx-10">قیمت </p>
<p class="text-right text-nowrap"> ${maktil.price}</p>
<p class="mx-2">تومان</p>
</div>
</div>`;
});

const caffesElement = document.querySelector("#caffee");

caffees.forEach((maktil) => {
  caffesElement.innerHTML += `<div
class="flex-row bg-orange-200 rounded-xl  w-72 pb-5 shad m-5 opacity-70"
>
<div><img class="rounded-xl w-72  aspect-[6//4]" src="${maktil.pic}" alt="ice latte" /></div>
<p class="text-center font-semibold m-3"> ${maktil.name}</p>
<br>
<div class="flex flex-row-reverse">
<p class="text-left font-semibold  mx-10">قیمت </p>
<p class="text-right text-nowrap"> ${maktil.price}</p>
<p class="mx-2">تومان</p>
</div>
</div>`;
});
