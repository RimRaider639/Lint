import {
  Avatar,
  AvatarBadge,
  CircularProgress,
  HStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import user from "../Images/tejas.png";
const myToken = JSON.parse(localStorage.getItem("token"));

const AdminAccount = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios
      .get("https://wide-eyed-pinafore-duck.cyclic.app/users", {
        headers: {
          token:myToken,
        },
      })
      .then((res) => {
        // console.log(res)
        localStorage.setItem("admin", JSON.stringify(user));
        setAdmin(res.data);
      });
  }, []);

  if (admin.length === 0) {
    return <CircularProgress isIndeterminate color="green.300"/>;
  } else {
    return (
      <>
        <HStack>
          <Avatar src={user}>
            <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
          <Text>{admin.name}</Text>
        </HStack>
      </>
    );
  }
};

export default AdminAccount;
