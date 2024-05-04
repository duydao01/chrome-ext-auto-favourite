import { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
  Textarea
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import './Popup.css'

export const Popup = () => {

  return (
    <main>
      <Flex bg="gray.100" align="center" justify="center" h="100vh">
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              rememberMe: false
            }}
            onSubmit={async (values) => {
              const tabData = await chrome.tabs.create({ url: values.email, active: false });
              chrome.runtime.sendMessage({ tabData })
            }}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl>
                    <FormLabel htmlFor="email">URLs here</FormLabel>
                    <Field
                      as={Textarea}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                    />
                  </FormControl>
                  <Button type="submit" colorScheme="purple" width="full">
                    Process
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </main>
  )
}

export default Popup
