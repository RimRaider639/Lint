import React, { useState } from "react";
import { AccordionPanel, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const PriceRadio = ({ priceRanges, getProducts }) => {
  let dispatch = useDispatch();
  let { params } = useSelector((store) => store.ProductsManager);
  const [selectedPrice, setSelectedPrice] = useState({
    title: "",
    discounted_price_gt: "",
    discounted_price_lt: "",
  });

  const handlePriceChange = (range) => {
    setSelectedPrice({
      title: range.title,
      discounted_price_gt: range.discounted_price_gt,
      discounted_price_lt: range.discounted_price_lt,
    });
    params.discounted_price_gt = range.discounted_price_gt;
    params.discounted_price_lt = range.discounted_price_lt;
    dispatch(getProducts(params));
  };
  console.log(selectedPrice);
  return (
    <AccordionPanel>
      <RadioGroup
        value={selectedPrice}
        onChange={(value) => setSelectedPrice(value)}>
        {priceRanges.map((range) => (
          <Stack
            key={range.title}
            _hover={{ color: "#0076be", fontWeight: "bold" }}>
            <Radio
              _hover={{ color: "#0076be", fontWeight: "bold" }}
              value={{
                title: range.title,
                discounted_price_gt: range.discounted_price_gt,
                discounted_price_lt: range.discounted_price_lt,
              }}
              isChecked={selectedPrice.title === range.title}>
              {range.title}
            </Radio>
          </Stack>
        ))}
      </RadioGroup>
    </AccordionPanel>
  );
};

export default PriceRadio;
