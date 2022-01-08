import {
  Box,
  ChakraProvider,
  Heading,
  HStack,
  Stack,
  Text,
  theme
} from "@chakra-ui/react";

import { useTranslation } from 'react-i18next';
import i18n from './i18n/index';
import { LanguageMenu } from "./LanguageMenu";

export const App = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  }

  const languages = [
    {
      language: 'Portuguese', code: 'ptbr', country: 'BR'
    },
    {
      language: 'English', code: 'en', country: 'US'
    }
  ]

  return (
    <ChakraProvider theme={theme}>
      <Box p={10}>

        <Heading mb='10'>React i18n 🌎</Heading>

        <LanguageMenu changeLanguage={changeLanguage} languages={languages}></LanguageMenu>
        <HStack mt='10' p='10' spacing={10} border='1px solid' borderColor={'gray.200'} borderRadius='md'>
          <Stack spacing={3}>
            <Text fontSize='6xl'>{t('Welcome to React')}</Text>
            <Text fontSize='5xl'>{t('Welcome to React')}</Text>
            <Text fontSize='4xl'>{t('Welcome to React')}</Text>
            <Text fontSize='3xl'>{t('Welcome to React')}</Text>
            <Text fontSize='2xl'>{t('Welcome to React')}</Text>
            <Text fontSize='xl'>{t('Welcome to React')}</Text>
            <Text fontSize='lg'>{t('Welcome to React')}</Text>
            <Text fontSize='md'>{t('Welcome to React')}</Text>
            <Text fontSize='sm'>{t('Welcome to React')}</Text>
            <Text fontSize='xs'>{t('Welcome to React')}</Text>
          </Stack>
          <Stack spacing={3}>
            <Heading fontSize='6xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='5xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='4xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='3xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='2xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='xl'>{t('Welcome to React')}</Heading>
            <Heading fontSize='lg'>{t('Welcome to React')}</Heading>
            <Heading fontSize='md'>{t('Welcome to React')}</Heading>
            <Heading fontSize='sm'>{t('Welcome to React')}</Heading>
            <Heading fontSize='xs'>{t('Welcome to React')}</Heading>
          </Stack>
        </HStack>
      </Box>

    </ChakraProvider>
  )
}

