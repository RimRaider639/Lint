import { SimpleGrid, Box, CircularProgress  } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import UserCard from "../Components/UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://wide-eyed-pinafore-duck.cyclic.app/users/all?role=customer",
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZjczM2Y2YWIwMDhkMzdjMDQyNzJiZiIsImlhdCI6MTY3NzE0NTIxMn0.U_Yr-cKZ4lWa1M02zgPdwXzZc1wZGbz4-nODV6x-WQQ",
          },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setUsers(res.data);
      });
  }, []);

  if (users.length === 0) {
    return <CircularProgress isIndeterminate color="green.300" />;
  } else {
    return (
      <Box p="6">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {
            users.map((el)=>{
              return <UserCard key={el._id} {...el}/>
            })
          }
          
        </SimpleGrid>
      </Box>
    );
  }
};

export default Users;
