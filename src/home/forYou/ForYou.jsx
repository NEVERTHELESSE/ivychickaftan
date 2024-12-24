import { lazy, Suspense } from "react";
import { damsakBubu } from "./damaskBubuCloth";

const NewestCategory = lazy(()=>import('../newestCategory/NewestCategories'))

export default function ForYou() {
  return (
    <div>
    <div className="flex items-center bg-secondaryColor  justify-around p-8">
      <img src="/images/cloth3.jpg" alt="img" className="w-[35rem] slide" />
      <div className="w-[40%] swipe">
        <p className="text-[10rem] font-bold capitalize">damask bubu</p>
      </div>
    </div>
        <Suspense>

        <NewestCategory
          title="damask bubu
          
          "
          cloths={damsakBubu}
          />
          </Suspense>
    </div>
  );
}
