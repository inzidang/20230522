import { Box, Text, HStack, VStack, GridItem, Grid } from "@chakra-ui/react";
import { AiFillApple, AiFillHome } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const dataGoods = [
  {
    text: "봄(Spring)",
    image: "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8JUVCJUI0JTg0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "여름(Summer)",
    image: "https://images.unsplash.com/photo-1532347922424-c652d9b7208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVFQyU5NyVBQyVFQiVBNiU4NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "가을(Automn)",
    image: "https://images.unsplash.com/photo-1506193503569-d57d2a678510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQSVCMCU4MCVFQyU5RCU4NHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "겨울(Winter)",
    image: "https://plus.unsplash.com/premium_photo-1670493557623-d0c91a65b633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8JUVBJUIyJUE4JUVDJTlBJUI4fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  }
]

const dataTour = [
  {
    text: "6월이벤트",
    image: "https://images.unsplash.com/photo-1607460694867-af0c6d6f2c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDYlRUMlOUIlOTR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "7월이벤트",
    image: "https://images.unsplash.com/photo-1595311098506-3d06eda55262?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fDclRUMlOUIlOTR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    text: "8월이벤트",
    image: "https://images.unsplash.com/photo-1597119162008-7e9d0ca2bd95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fDglRUMlOUIlOTR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
]
function App() {
  return (
    <>
      <Box w="full" display="flex" justifyContent="center">
        <VStack w="sm">
          {/* 헤더*/}
          <Box display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"inherit"}
            h={"120px"}
            bg="black"
            position="fixed"
            Top={0}
            zIndex={9}>
            <AiFillApple size={60} color="white" />
          </Box>
          <Box bg="blue.200" >2</Box>

          {/*본문*/}
          <VStack
            spacing={6}
            w="inherit"
            py="140px"
            px={4}
            alignItems={"flex-start"}>

            {/* 최신상품 컨테이너 */}
            <VStack w="full" spacing={0} >
              <Text fontWeight={600} fontSize={24}>
                최신상품
              </Text>
              <Grid
                gap={2}
                gridTemplateColumns={"repeat(2,1fr)"}
                w={"full"} >
                {dataGoods
                  .map((item, i) => (
                    <GridItem
                      key={i}
                      h="200px"
                      border={"1px"}
                      rounded={"md"}
                      borderColor="gray.300"
                      backgroundImage={`url(${item.image})`}
                      backgroundSize={"cover"}
                      backgroundPosition={"center center"}
                      position="relative"
                      overflow={"hidden"}>
                      <Box position="absolute"
                        top={0}
                        left={0}
                        w="full"
                        h="full"
                        bg="rgba(0,0,0,0.5)">
                        <Text color="white"
                          position="absolute"
                          w="full"
                          bottom="0"
                          align="center"
                          fontWeight={600}
                          py={4}>
                          {item.text}
                        </Text>
                      </Box>
                    </GridItem>
                  ))}

              </Grid>
            </VStack>

            {/* 이벤트 컨테이너 */}
            <VStack w="full" spacing={0} >
              <Text fontWeight={600} fontSize={24}>
                이벤트
              </Text>
              <Grid gap={4} w="full">
                {dataTour
                  .map((item, i) => (
                    <GridItem
                      key={i}
                      rounded={"lg"}
                      w="full"
                      h="120px"
                      backgroundImage={`url(${item.image})`}
                      backgroundSize="cover"
                      backgroundPosition={"center center"}
                      position="relative">
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        w="full"
                        h="120px"
                        bgGradient="linear(to-b, rgba(255,255,255,0.0),rgba(255,255,255,1))"
                      >
                        <Text
                          w="full"
                          align="center"
                          position="absolute"
                          top="50%"
                          left="50%"
                          transform={"translate(-50%, -50%)"}
                          fontWeight={900}
                          fontSize="20"
                          color="blue">
                          {item.text}
                        </Text>
                      </Box >
                    </GridItem>
                  ))}


              </Grid>
            </VStack>
          </VStack>

          <Box
            w={"inherit"}
            h={"120px"}
            bg="black"
            position="fixed"
            bottom={0}>
            <HStack
              h={"inherit"}
              justifyContent={"space-between"}
              alignItems={"center"}>
              <VStack w="full">
                <AiFillHome color="white" />
                <Text color="white">Home</Text>
              </VStack>
              <VStack w="full">
                <Text color="white">Profile</Text>
              </VStack>
              <VStack w="full">
                <BsFillPeopleFill color="white" />
                <Text color="white">ContactUs</Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
}

export default App;
