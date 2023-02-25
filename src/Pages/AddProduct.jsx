import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import AddTable from "../Components/AddTable";

const AddProducts = () => {
  return (
    <>
      <Card align="center" bg="transparent">
        <CardHeader>
          <Heading size="md"> Add Details</Heading>
        </CardHeader>
        <CardBody>
          <AddTable />
        </CardBody>
      </Card>
    </>
  );
};

export default AddProducts;

// {
//     _id: ObjectId,
//     crawl_timestamp: { type: Date, default: Date.now() },
//     product_name: { type: String, required: true },
//     product_category_tree: [{ type: String, required: true }],
//     pid: { type: String, required: true },
//     retail_price: { type: Number, default: 100 },
//     discounted_price: { type: Number, default: this.retail_price },
//     image: [{ type: String, required: true }],
//     description: { type: String, required: true },
//     product_rating: { type: Mixed, default: "No rating available" },
//     overall_rating: { type: Mixed, default: "No rating available" },
//     brand: { type: String, required: true },
//     product_specifications: { type: Object },
//     rating: { type: Number, required: true },
//     stock: { type: Number, required: true },
//     discount: { type: Number, default: 0 },
//   }

// image [Array]
// description
// rating
