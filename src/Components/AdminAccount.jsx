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

const AdminAccount = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios
      .get("https://wide-eyed-pinafore-duck.cyclic.app/users", {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjczM2Y2YWIwMDhkMzdjMDQyNzJiZiIsImlhdCI6MTY3NzE0NTIxMn0.U_Yr-cKZ4lWa1M02zgPdwXzZc1wZGbz4-nODV6x-WQQ",
        },
      })
      .then((res) => {
        // console.log(res)
        setAdmin(res.data);
      });
  }, []);

  if (admin.length === 0) {
    return <CircularProgress isIndeterminate color="green.300" />;
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
