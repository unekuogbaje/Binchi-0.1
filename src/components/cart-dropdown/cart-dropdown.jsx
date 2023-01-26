import Button from "../button/button.component";

const Cartdropdown = () => {
    return (
        <div className="flex-col absolute w-[240px] h-[340px] p-[20px] b-[1px solid] b-#003ECB bg-mainClr top-[90px] right-10 z-5 ">
          <div className="cart-items h-[240px] flex-col overflow-scroll "></div>
          <Button className="mt-auto" >Go to checkout</Button>
        </div>
    );
};

export default Cartdropdown;