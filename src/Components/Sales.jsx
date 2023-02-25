import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const Sales = ()=>{
    const [sales, setSales] = useState(670)
    const [order, setOrder] = useState(450)

    useEffect(() => {
        const interval = setInterval(() => {
            setSales(prev=>prev+1)
        }, 6000);
        return () => clearInterval(interval);
      }, []);

      useEffect(()=>{
        const interval2 = setInterval(() => {
            setOrder(prev=>prev+1)
        }, 2000);
        return () => clearInterval(interval2);
      },[])

    return <>
        <StatGroup gap={20}>
            <Stat>
                <StatLabel>This week</StatLabel>
                <StatNumber>345,{sales}</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                23.36%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel>Today</StatLabel>
                <StatNumber>{order}</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
                </StatHelpText>
            </Stat>
        </StatGroup>
    </>
}

export default Sales;