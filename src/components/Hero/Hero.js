import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import styled from 'styled-components';
import { Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

const Hero = () => {
    const [movie, setMovie] = useState({});

    async function getDataApi() {
        const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

        try {
            const response = await fetch(url);
            const data = await response.json();

            setMovie(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getDataApi();
    }, []);

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
          <Flex p={8} flex={1} align={'center'} justify={'center'} color={'white'} flexDirection={'column'}>
            <Stack spacing={6} w={'full'} maxW={{ base: '100%', md: 'lg' }} textAlign={'center'}>
              <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={4} textAlign={'center'}>
                <Text color={'blue.400'} as={'span'}>
                  {movie.Title}
                </Text>{' '}
                <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
                  {movie.Genre}
                </Text>
              </Heading>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.400'}>
                {movie.Plot}
              </Text>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
                {movie.Director}
              </Text>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
                {movie.Actors}
              </Text>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'red.500'}>
                {movie.Released}
              </Text>
              <Stack direction={{ base: 'column', md: 'row' }} spacing={4} mt={6} justifyContent={'center'}>
                <Button colorScheme="red" variant='solid' size="lg">
                  Tonton
                </Button>
                <Button colorScheme="gray" variant='solid' size="lg">
                  Trailer
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1} justify={'center'} align={'center'} maxW={{ base: '100%', md: '500px' }}>
            <Image
              alt={'Movie Poster'}
              objectFit={'cover'}
              borderRadius={'25px'}
              src={movie.Poster}
              maxW="100%"
            />
            </Flex>
        </Stack>
    );
};

export default Hero;
