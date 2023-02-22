import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

const Sales = ()=>{
    return <>
        <StatGroup gap={20}>
            <Stat>
                <StatLabel>This week</StatLabel>
                <StatNumber>345,670</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                23.36%
                </StatHelpText>
            </Stat>
            <Stat>
                <StatLabel>Today</StatLabel>
                <StatNumber>450</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
                </StatHelpText>
            </Stat>
        </StatGroup>
    </>
}

export default Sales;