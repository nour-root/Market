import Item_cart from "../Components/item_cart";
export default function Cart() {
  return (
    <div className="py-5 px-4 max-lg:relative max-lg:z-10 bg-backGround text-[#2B3445]">
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-5">
        <div className="flex flex-col gap-6 max-h-[400px] overflow-y-scroll scroll cart-items p-2">
          <Item_cart />
        </div>
        <div className="bg-white p-6 rounded-[12px] border border-head/5 flex flex-col">
          <div className="w-full flex justify-between items-center">
            <p className="capitalize text-dark-gray">total:</p>
            <p className="capitalize">0.00</p>
          </div>
          <hr className="my-5" />
          <div>
            <p className="">Shipping Estimates</p>
          </div>
        </div>
      </div>
    </div>
  );
}
