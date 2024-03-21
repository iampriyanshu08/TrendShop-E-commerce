import React from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const CheckoutModal = () => {
  const onCloseModal = () => {
    setOpenModal(false);
    setEmail("");
  };

  const [openModal, setOpenModal] = useState(false);
  const [orderDets, setorderDets] = useState({
    fullName: "",
    address: "",
    pincode: "",
    mobile: "",
  });
  const handleModal = (e) => {
    setorderDets({ ...orderDets, [e.target.name]: e.target.value });
    // console.log(orderDets)
  };

  const handleOrder = (e) => {
    e.preventDefault();
    if (
      orderDets.fullName === "" ||
      orderDets.address === "" ||
      orderDets.mobile === "" ||
      orderDets.pincode === ""
    ) {
      toast.error("please fill all the details");
    } else if (
      orderDets.fullName.length < 5 ||
      orderDets.mobile.length < 10 ||
      orderDets.pincode.length < 6
    ) {
      toast.error("please fill correct details");
    } else {
      toast.success("Your order has been placed successfully");
      console.log(orderDets);
      setorderDets({ fullName: "", address: "", pincode: "", mobile: "" });
      onCloseModal()
    }
  };
  return (
    <div>
      <>
        <Button
          onClick={() => setOpenModal(true)}
          className="bg-yellow-400 font-semibold hover:bg-yellow-500 py-1 text-xs text-white uppercase w-full"
        >
          Checkout
        </Button>
        <Modal show={openModal} size="md" onClose={onCloseModal} popup>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="fullname" value="Your Full name" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  name="fullName"
                  onChange={handleModal}
                  value={orderDets.fullName}
                  autoComplete="off"
                  required
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your Full address" />
                </div>
                <TextInput
                  id="address"
                  type="text"
                  name="address"
                  value={orderDets.address}
                  autoComplete="off"
                  onChange={handleModal}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="Your Pincode" />
                </div>
                <TextInput
                  id="pincode"
                  type="text"
                  onChange={handleModal}
                  value={orderDets.pincode}
                  name="pincode"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="mobile" value="Your Mobile No." />
                </div>
                <TextInput
                  id="mobileno"
                  type="number"
                  name="mobile"
                  value={orderDets.mobile}
                  autoComplete="off"
                  onChange={handleModal}
                  required
                />
              </div>

              <div className="w-full">
                <Button className="w-full" onClick={handleOrder}>
                  Order Now
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};

export default CheckoutModal;
